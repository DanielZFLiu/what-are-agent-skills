# How to add skills support to your agent

> Source: https://agentskills.io/client-implementation/adding-skills-support

A guide for adding Agent Skills support to an AI agent or development tool.

## The core principle: progressive disclosure

Every skills-compatible agent follows the same three-tier loading strategy:

| Tier            | What's loaded               | When                             | Token cost                 |
| --------------- | --------------------------- | -------------------------------- | -------------------------- |
| 1. Catalog      | Name + description          | Session start                    | ~50-100 tokens per skill   |
| 2. Instructions | Full `SKILL.md` body        | When the skill is activated      | <5000 tokens (recommended) |
| 3. Resources    | Scripts, references, assets | When instructions reference them | Varies                     |

## Step 1: Discover skills

### Where to scan

| Scope   | Path                               | Purpose                       |
| ------- | ---------------------------------- | ----------------------------- |
| Project | `<project>/.<your-client>/skills/` | Your client's native location |
| Project | `<project>/.agents/skills/`        | Cross-client interoperability |
| User    | `~/.<your-client>/skills/`         | Your client's native location |
| User    | `~/.agents/skills/`                | Cross-client interoperability |

The `.agents/skills/` paths are a widely-adopted convention for cross-client skill sharing.

### What to scan for

Look for subdirectories containing a file named exactly `SKILL.md`:

```
~/.agents/skills/
├── pdf-processing/
│   ├── SKILL.md          <- discovered
│   └── scripts/
├── data-analysis/
│   └── SKILL.md          <- discovered
└── README.md             <- ignored
```

### Handling name collisions

Project-level skills override user-level skills. Log a warning when a collision occurs.

### Trust considerations

Consider gating project-level skill loading on a trust check to prevent untrusted repositories from silently injecting instructions.

## Step 2: Parse `SKILL.md` files

### Frontmatter extraction

1. Find opening `---` at start of file and closing `---` after it
2. Parse the YAML block between them
3. Everything after the closing `---` is the skill's body content

### Lenient validation

- Name doesn't match directory → warn, load anyway
- Description missing or empty → skip the skill, log error
- YAML unparseable → skip the skill, log error

### What to store

| Field         | Description                          |
| ------------- | ------------------------------------ |
| `name`        | From frontmatter                     |
| `description` | From frontmatter                     |
| `location`    | Absolute path to the `SKILL.md` file |

## Step 3: Disclose available skills to the model

Build a catalog from discovered skills:

```xml
<available_skills>
  <skill>
    <name>pdf-processing</name>
    <description>Extract PDF text, fill forms, merge files. Use when handling PDFs.</description>
    <location>/home/user/.agents/skills/pdf-processing/SKILL.md</location>
  </skill>
</available_skills>
```

Each skill adds ~50-100 tokens. Include behavioral instructions:

```
The following skills provide specialized instructions for specific tasks.
When a task matches a skill's description, use your file-read tool to load
the SKILL.md at the listed location before proceeding.
```

## Step 4: Activate skills

### Model-driven activation

Two patterns:

**File-read activation**: The model calls its file-read tool with the `SKILL.md` path. Simplest approach.

**Dedicated tool activation**: Register a tool (e.g., `activate_skill`) that takes a skill name and returns content. Required when the model can't read files directly.

### User-explicit activation

Users can activate skills directly via slash command (`/skill-name`) or mention syntax.

### Structured wrapping

Wrap skill content in identifying tags:

```xml
<skill_content name="pdf-processing">
# PDF Processing
[rest of SKILL.md body]

Skill directory: /home/user/.agents/skills/pdf-processing
<skill_resources>
  <file>scripts/extract.py</file>
  <file>references/pdf-spec-summary.md</file>
</skill_resources>
</skill_content>
```

## Step 5: Manage skill context over time

### Protect skill content from context compaction

Exempt skill content from pruning. Skill instructions are durable behavioral guidance — losing them mid-conversation silently degrades the agent's performance.

### Deduplicate activations

Track which skills have been activated. Skip re-injection if already in context.

### Subagent delegation (optional)

Instead of injecting into the main conversation, run the skill in a separate subagent session. Useful for complex workflows.
