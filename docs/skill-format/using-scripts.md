# Using scripts in skills

> Source: https://agentskills.io/skill-creation/using-scripts

How to run commands and bundle executable scripts in your skills.

Skills can instruct agents to run shell commands and bundle reusable scripts in a `scripts/` directory. This guide covers one-off commands, self-contained scripts with their own dependencies, and how to design script interfaces for agentic use.

## One-off commands

When an existing package already does what you need, you can reference it directly in your `SKILL.md` instructions without a `scripts/` directory. Many ecosystems provide tools that auto-resolve dependencies at runtime:

**uvx (Python):**

```bash
uvx ruff@0.8.0 check .
uvx black@24.10.0 .
```

**npx (Node.js):**

```bash
npx eslint@9 --fix .
npx create-vite@6 my-app
```

**go run (Go):**

```bash
go run golang.org/x/tools/cmd/goimports@v0.28.0 .
```

**Tips for one-off commands:**

- **Pin versions** so the command behaves the same over time.
- **State prerequisites** in your `SKILL.md`. For runtime-level requirements, use the `compatibility` frontmatter field.
- **Move complex commands into scripts** when they grow complex enough to be error-prone.

## Referencing scripts from `SKILL.md`

Use **relative paths from the skill directory root** to reference bundled files:

```markdown
## Available scripts

- **`scripts/validate.sh`** — Validates configuration files
- **`scripts/process.py`** — Processes input data
```

Then instruct the agent to run them:

````markdown
## Workflow

1. Run the validation script:

   ```bash
   bash scripts/validate.sh "$INPUT_FILE"
   ```

2. Process the results:
   ```bash
   python3 scripts/process.py --input results.json
   ```
````

## Self-contained scripts

Bundle scripts in `scripts/` that declare their own dependencies inline. The agent can run them with a single command.

**Python (PEP 723):**

```python
# /// script
# dependencies = [
#   "beautifulsoup4",
# ]
# ///

from bs4 import BeautifulSoup

html = '<html><body><h1>Welcome</h1><p class="info">This is a test.</p></body></html>'
print(BeautifulSoup(html, "html.parser").select_one("p.info").get_text())
```

Run with: `uv run scripts/extract.py`

**Deno (TypeScript):**

```typescript
#!/usr/bin/env -S deno run

import * as cheerio from 'npm:cheerio@1.0.0';

const html = `<html><body><h1>Welcome</h1><p class="info">This is a test.</p></body></html>`;
const $ = cheerio.load(html);
console.log($('p.info').text());
```

Run with: `deno run scripts/extract.ts`

## Designing scripts for agentic use

### Avoid interactive prompts

Agents operate in non-interactive shells. Accept all input via command-line flags, environment variables, or stdin:

```
# Bad: hangs waiting for input
$ python scripts/deploy.py
Target environment: _

# Good: clear error with guidance
$ python scripts/deploy.py
Error: --env is required. Options: development, staging, production.
Usage: python scripts/deploy.py --env staging --tag v1.2.3
```

### Document usage with `--help`

`--help` output is the primary way an agent learns your script's interface. Include a brief description, available flags, and usage examples.

### Write helpful error messages

Say what went wrong, what was expected, and what to try:

```
Error: --format must be one of: json, csv, table.
       Received: "xml"
```

### Use structured output

Prefer JSON, CSV, TSV over free-form text. Separate data (stdout) from diagnostics (stderr).

### Further considerations

- **Idempotency.** "Create if not exists" is safer than "create and fail on duplicate."
- **Input constraints.** Reject ambiguous input with a clear error.
- **Dry-run support.** For destructive operations, a `--dry-run` flag lets the agent preview.
- **Meaningful exit codes.** Use distinct codes for different failure types.
- **Safe defaults.** Consider requiring explicit confirmation flags for destructive operations.
- **Predictable output size.** Default to summaries or reasonable limits. Support `--offset` for pagination.
