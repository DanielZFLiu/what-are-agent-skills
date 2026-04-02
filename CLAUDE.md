# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Code Style

See `docs/code-style.md` for full guide. Key points:

- Prettier for formatting — run `npm run format` before committing
- Indentation: tabs (four spaces)
- File headers: brief JSDoc comment when filename alone isn't sufficient
- Section dividers: `// ── Section Name ────────────────────────────────────────────────────────────`
- Comments explain "why" not "what" — don't over-comment readable code
- JSDoc only for public APIs and non-obvious behavior

## Commit Conventions

See `docs/commit-conventions.md` for full guide. Symbol prefix format:

| Symbol | Meaning                | Example                              |
| ------ | ---------------------- | ------------------------------------ |
| `+`    | New feature/addition   | `+ user authentication`              |
| `-`    | Removal                | `- deprecated search endpoint`       |
| `~`    | Small change/tweak     | `~ swap test runner to vitest`       |
| `>`    | Normal to large change | `> refactor source reconciliation`   |
| `!`    | Bug fix                | `! fix off-by-one in search scoring` |
| `@`    | Documentation/config   | `@ update README with conventions`   |

Rules: each line of the message should be lowercase, no period, short, scope with parentheses when useful (e.g., `+ (editor) block parser`). Verify code behavior before committing. DO NOT PUT THE "COAUTHORED" LINE IN. It is advisable to not make small commits (e.g. 10 lines of change for a small fix), but to bundle edits into medium sized changes and then commit them. Remember, commit messges can be multi-line, with several changes. e.g.

```
+ (editor) undo/redo
! (editor) editor now editable when empty
```

## Mottos to Live By

- Think in long term, don't be shortsighted.
- Organization and clean code saves the day.
- Plan before acting - always.
