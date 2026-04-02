# Best practices for skill creators

> Source: https://agentskills.io/skill-creation/best-practices

How to write skills that are well-scoped and calibrated to the task.

## Start from real expertise

A common pitfall in skill creation is asking an LLM to generate a skill without providing domain-specific context — relying solely on the LLM's general training knowledge. The result is vague, generic procedures rather than the specific API patterns, edge cases, and project conventions that make a skill valuable.

Effective skills are grounded in real expertise.

### Extract from a hands-on task

Complete a real task in conversation with an agent, providing context, corrections, and preferences along the way. Then extract the reusable pattern into a skill. Pay attention to:

- **Steps that worked** — the sequence of actions that led to success
- **Corrections you made** — places where you steered the agent's approach
- **Input/output formats** — what the data looked like going in and coming out
- **Context you provided** — project-specific facts, conventions, or constraints the agent didn't already know

### Synthesize from existing project artifacts

When you have a body of existing knowledge, you can feed it into an LLM and ask it to synthesize a skill. Good source material includes:

- Internal documentation, runbooks, and style guides
- API specifications, schemas, and configuration files
- Code review comments and issue trackers
- Version control history, especially patches and fixes
- Real-world failure cases and their resolutions

## Refine with real execution

The first draft of a skill usually needs refinement. Run the skill against real tasks, then feed the results back into the creation process.

> Read agent execution traces, not just final outputs. If the agent wastes time on unproductive steps, common causes include instructions that are too vague, instructions that don't apply to the current task, or too many options presented without a clear default.

For a more structured approach to iteration, see [Evaluating skill output quality](evaluating-skills.md).

## Spending context wisely

Once a skill activates, its full `SKILL.md` body loads into the agent's context window. Every token in your skill competes for the agent's attention with everything else in that window.

### Add what the agent lacks, omit what it knows

Focus on what the agent wouldn't know without your skill: project-specific conventions, domain-specific procedures, non-obvious edge cases, and the particular tools or APIs to use.

```markdown
<!-- Too verbose — the agent already knows what PDFs are -->

## Extract PDF text

PDF (Portable Document Format) files are a common file format...

<!-- Better — jumps straight to what the agent wouldn't know -->

## Extract PDF text

Use pdfplumber for text extraction. For scanned documents, fall back to
pdf2image with pytesseract.
```

### Design coherent units

Deciding what a skill should cover is like deciding what a function should do: you want it to encapsulate a coherent unit of work. Skills scoped too narrowly force multiple skills to load for a single task. Skills scoped too broadly become hard to activate precisely.

### Aim for moderate detail

Concise, stepwise guidance with a working example tends to outperform exhaustive documentation.

### Structure large skills with progressive disclosure

Keep `SKILL.md` under 500 lines and 5,000 tokens — just the core instructions. Move detailed reference material to separate files in `references/`. Tell the agent _when_ to load each file: "Read `references/api-errors.md` if the API returns a non-200 status code."

## Calibrating control

### Match specificity to fragility

**Give the agent freedom** when multiple approaches are valid:

```markdown
## Code review process

1. Check all database queries for SQL injection (use parameterized queries)
2. Verify authentication checks on every endpoint
3. Look for race conditions in concurrent code paths
4. Confirm error messages don't leak internal details
```

**Be prescriptive** when operations are fragile:

````markdown
## Database migration

Run exactly this sequence:

```bash
python scripts/migrate.py --verify --backup
```

Do not modify the command or add additional flags.
````

### Provide defaults, not menus

Pick a default and mention alternatives briefly rather than presenting them as equal options.

### Favor procedures over declarations

A skill should teach the agent _how to approach_ a class of problems, not _what to produce_ for a specific instance.

## Patterns for effective instructions

### Gotchas sections

The highest-value content in many skills is a list of gotchas — environment-specific facts that defy reasonable assumptions:

```markdown
## Gotchas

- The `users` table uses soft deletes. Queries must include
  `WHERE deleted_at IS NULL` or results will include deactivated accounts.
- The user ID is `user_id` in the database, `uid` in the auth service,
  and `accountId` in the billing API. All three refer to the same value.
- The `/health` endpoint returns 200 as long as the web server is running,
  even if the database connection is down. Use `/ready` to check full
  service health.
```

### Templates for output format

When you need specific output format, provide a template. Short templates can live inline; longer ones go in `assets/`.

### Checklists for multi-step workflows

```markdown
## Form processing workflow

Progress:

- [ ] Step 1: Analyze the form (run `scripts/analyze_form.py`)
- [ ] Step 2: Create field mapping (edit `fields.json`)
- [ ] Step 3: Validate mapping (run `scripts/validate_fields.py`)
- [ ] Step 4: Fill the form (run `scripts/fill_form.py`)
- [ ] Step 5: Verify output (run `scripts/verify_output.py`)
```

### Validation loops

Instruct the agent to validate its own work before moving on:

```markdown
## Editing workflow

1. Make your edits
2. Run validation: `python scripts/validate.py output/`
3. If validation fails:
   - Review the error message
   - Fix the issues
   - Run validation again
4. Only proceed when validation passes
```

### Plan-validate-execute

For batch or destructive operations, have the agent create an intermediate plan, validate it, and only then execute.

### Bundling reusable scripts

If you notice the agent independently reinventing the same logic each run, write a tested script once and bundle it in `scripts/`. See [Using scripts in skills](using-scripts.md).
