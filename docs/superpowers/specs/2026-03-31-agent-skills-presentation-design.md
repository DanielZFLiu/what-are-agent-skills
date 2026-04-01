# Agent Skills Presentation — Design Spec

## Overview

A 5-10 minute Svelte slide-deck presentation about AI agent skills, presented to colleagues at RBC who currently use Copilot and Windsurf, with Claude Code arriving soon.

**Goal:** Educate on what skills are and how to write them. Tool-agnostic, with a brief comparison at the end.

**Audience:** Primarily developers who actively use AI coding assistants daily, with a small number of non-technical attendees.

**Format:** Slide-deck Svelte app with arrow-key/click navigation, screen recordings sprinkled throughout, and a small live demo at the end.

---

## Narrative Arc: Problem-First (Approach B)

The presentation follows a problem → solution → how → try-it-yourself arc:

1. Hook with a relatable developer frustration (repeating yourself to AI)
2. Introduce skills as the fix
3. Show it working (screen recording)
4. Explain the mechanics (anatomy, invocation)
5. Teach how to write one (walkthrough + recording)
6. Brief tool comparison
7. Live demo + close

---

## Visual Design: Terminal Noir

Full design system documented in `docs/terminal-noir.md`. Summary:

- **Aesthetic:** Monokai-inspired dark theme. Terminal prompts as design elements. Scanline texture for atmosphere.
- **Typography:** Syne (display/headings), JetBrains Mono (code/terminal), IBM Plex Sans (body)
- **Palette:** Near-black backgrounds (#0d0d0d), warm white text (#f8f8f2), Monokai accents (pink #ff6188, green #a9dc76, yellow #ffd866, cyan #78dce8, purple #ab9df2, orange #fc9867)
- **Atmosphere:** Subtle scanline overlay, radial pink glow on key slides, blinking cursor on title

---

## Slide-by-Slide Spec

### Slide 1: Title

- Terminal prompt: `$ present --topic agent-skills`
- Title: "What Are **Agent Skills?**" (with "Agent Skills?" in pink accent)
- Blinking cursor after title
- Subtitle: "Teaching your AI assistant new tricks"
- Radial pink glow in background for depth

### Slide 2: The Problem

- Section tag: `// 01 — the problem`
- Heading: "You keep repeating yourself"
- Three terminal-style output blocks showing common repeated instructions:
  - "Always use conventional commits with scope..."
  - "Run the full test suite before committing..."
  - "Follow our REST naming convention: plural nouns, kebab-case..."
- Punchline text (muted): "Same instructions. Every session. Every project. Every teammate."

### Slide 3: Two Layers

- Section tag: `// 02 — two concepts`
- Heading: "Rules vs. Skills"
- Split view with two concept cards:
  - **Left card (cyan border):** "Always-on Rules" — background context the AI reads every session. Examples: CLAUDE.md, copilot-instructions.md, .windsurfrules. Caption: "Who you are and how you work."
  - **Right card (pink border):** "On-demand Skills" — specific tasks invoked when needed via `/name`. Caption: "What to do when asked."
- Footer note (dim): "We're focusing on the right side."

### Slide 4: The Fix

- Section tag: `// 03 — the fix`
- Heading: "Skills = reusable, shareable instructions"
- Three concept cards in a row:
  - **Card 1 (pink border):** "A Markdown File" — plain text instructions, not code
  - **Card 2 (green border):** "A Trigger" — invoked via `/name` or automatically by the AI
  - **Card 3 (yellow border):** "Portable" — commit to repo, share with team, works across 30+ tools
- Small note about agentskills.io open standard

### Slide 5: See It In Action

- Section tag: `// 04 — in action`
- Heading: "See it working"
- Embedded or linked screen recording of invoking a skill (e.g., `/commit`)
- The recording shows: user types the command, AI reads the skill, executes the task, produces output
- Brief caption below the video explaining what's happening
- Implementation note: use an `<iframe>` or `<video>` element. The actual recording is created separately by the presenter.

### Slide 6: Anatomy of a Skill

- Section tag: `// 05 — anatomy`
- Heading: "Anatomy of a Skill"
- Code block styled as an editor window (three dots, filename):
  ```yaml
  ---
  name: commit
  description: Smart conventional commits
  argument-hint: "[message]"
  ---

  ## Instructions
  Review staged changes and write a conventional
  commit message following the project's style.
  Run the test suite before committing.
  ```
- Three color-coded annotations below the code block:
  - Pink arrow: "frontmatter — metadata about the skill"
  - Green arrow: "name + description — how the AI finds and invokes it"
  - Yellow arrow: "prompt body — the actual instructions"

### Slide 7: How Invocation Works

- Section tag: `// 06 — invocation`
- Heading: "How it works"
- Horizontal flow diagram with four nodes and arrows:
  - **User** (cyan label) — "types `/commit`"
  - → **Agent** (pink label, active/glowing border) — "loads skill"
  - → **Skill** (green label) — "reads instructions"
  - → **Action** (yellow label) — "executes task"
- Secondary note below (dim text): "Some tools can also auto-invoke skills based on conversation context."

### Slide 8: Writing Your Own

- Section tag: `// 07 — write your own`
- Heading: "Writing your own skill"
- Vertical step progression (numbered, with connecting lines):
  1. "Create the file" — in the right location for your tool
  2. "Add frontmatter" — name, description, optional config
  3. "Write the prompt" — markdown instructions for the AI
  4. "Invoke it" — type `/your-skill` and watch it work
- Embedded screen recording showing the process
- Implementation note: steps appear with staggered animation, recording is separate content

### Slide 9: Where to Put It

- Section tag: `// 08 — file locations`
- Heading: "Where does the file go?"
- Table styled as a terminal output:

  | Tool | File Location |
  |------|---------------|
  | Copilot | `.github/prompts/name.prompt.md` |
  | Windsurf | `.windsurf/workflows/name.md` |
  | Claude Code | `.claude/skills/name/SKILL.md` |

- Note below: "All three support personal (global) and project (repo) scopes."

### Slide 10: Across Tools

- Section tag: `// 09 — comparison`
- Heading: "How the tools compare"
- Comparison table:

  | | Copilot | Windsurf | Claude Code |
  |---|---|---|---|
  | Feature name | Prompt Files | Workflows | Skills |
  | Format | `.prompt.md` | `.md` | `SKILL.md` in directory |
  | Frontmatter | description, agent, model, tools | none | name, description, allowed-tools, model, effort, agent, + more |
  | Auto-invoke? | No | No | Yes (description match) |
  | Bundled files? | No | No | Yes (scripts, templates) |

- Observation (dim text): "The core concept is the same: a markdown file with instructions, invoked via `/name`."

### Slide 11: Live Demo

- Section tag: `// 10 — live demo`
- Heading: "Let's try it"
- Minimal slide content — just the heading and a terminal-style prompt: `$ claude`
- The actual terminal IS the presentation at this point
- Demo sequence:
  1. Open a pre-built skill file, show how simple it is ("look, it's just markdown")
  2. Make a small tweak (change one line)
  3. Invoke it — audience sees the change reflected
- Implementation note: this slide is mostly a visual anchor. The presenter switches to their actual terminal.

### Slide 12: Takeaway

- No section tag
- Large quote-style text: "A skill is just a markdown file. Start with one that solves your most repeated prompt."
- Smaller text below: "Questions?"
- Terminal prompt at bottom: `$ exit`

---

## Technical Spec: Svelte Slide Deck

### Framework

- **Svelte 5** (latest) with SvelteKit for the dev server and build
- **No external slide framework** — custom slide navigation built in Svelte (simpler, full control over the Terminal Noir aesthetic)

### Navigation

- Arrow keys (left/right) to move between slides
- Click/tap navigation arrows at bottom of screen (for touchpad/mouse users)
- Keyboard shortcut display (dim, bottom-right): shows current slide number / total
- URL hash updates per slide (`#1`, `#2`, etc.) for easy jumping

### Slide Architecture

- Each slide is an individual Svelte component in `src/lib/slides/` (e.g., `Slide01Title.svelte`, `Slide02Problem.svelte`, etc.) — every slide has a unique layout, so all 12 are components
- A `slides.ts` file exports the ordered array of slide components and metadata (used by the navigation system)
- A `SlideShell.svelte` wrapper handles the Terminal Noir chrome: scanline overlay, background, slide counter
- A `Presentation.svelte` component manages navigation state and transitions

### Transitions

- Slide-to-slide: fade with slight upward translate (200ms ease-out)
- Within slides: staggered animation-delay for card rows, list items, flow nodes
- Code blocks: optional line-by-line "typing" reveal (CSS animation)

### Screen Recordings

- `<video>` elements with poster frames
- Videos stored in `static/recordings/` as `.mp4` or `.webm`
- Placeholder poster frames until actual recordings are created
- Autoplay on slide enter, pause on slide exit

### Responsive Considerations

- Optimized for 16:9 display (standard projector/screen share)
- Slides use viewport-relative sizing (`vh`, `vw`) to scale
- Font sizes scale with viewport

### Build & Deployment

- `npm run dev` for local development
- `npm run build` to produce static output
- Deployable anywhere (static HTML/CSS/JS) or presentable from `localhost`

---

## Screen Recordings Needed (created separately)

1. **Invoking a skill** — e.g., `/commit` in Claude Code or Copilot. Shows the full cycle: type command → AI processes → result. (~30 seconds)
2. **Creating a skill from scratch** — create the file, write frontmatter + prompt, invoke it. (~45 seconds)

These are pre-recorded by the presenter and placed in `static/recordings/`.

---

## Live Demo Plan

**Duration:** 1-2 minutes max

**Setup (before presentation):**
- Have a repo open with a pre-built custom skill
- Stage some changes for a realistic demo context

**Sequence:**
1. Open the skill file in the editor — "This is the whole skill. It's just markdown."
2. Point out frontmatter and prompt body
3. Make a small visible tweak (e.g., change a word in the instructions)
4. Switch to terminal, invoke the skill
5. Show the result reflects the tweak

**Fallback:** If the live demo fails, acknowledge it and say "this is why we had the recordings" — the audience already saw it work in the screen captures.
