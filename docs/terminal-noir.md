# Terminal Noir — Design System

## Aesthetic Direction

**Terminal Noir**: Monokai-inspired dark theme where code and terminal aesthetics ARE the design language. The medium matches the message — a presentation about coding tools that feels like it lives in the developer's world. Not a gimmick; the terminal is elevated into a refined visual identity.

Atmosphere comes from restraint: subtle scanline textures, radial glows for depth, blinking cursors for life. The palette is rich and saturated against near-black backgrounds. Every slide should feel like a beautifully crafted terminal session.

---

## Typography

Three fonts, each with a distinct role:

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Display / Headings | **Syne** | 700–800 | Slide titles, section headings. Bold, geometric, slightly unconventional. |
| Code / Terminal | **JetBrains Mono** | 400–600 | Code blocks, terminal prompts, labels, annotations, section tags. |
| Body | **IBM Plex Sans** | 300–500 | Descriptive text, subtitles, card descriptions. Clean with a technical heritage. |

### Google Fonts import

```
Syne:wght@400;600;700;800
JetBrains+Mono:wght@400;500;600;700
IBM+Plex+Sans:wght@300;400;500;600
```

### Sizing guidance

- Display text (slide titles): 36–48px, Syne 800
- Section headings: 20–24px, Syne 700
- Code / terminal: 11–14px, JetBrains Mono 500
- Body text: 14–16px, IBM Plex Sans 300–400
- Labels / tags: 9–10px, JetBrains Mono, uppercase, letter-spacing 3px
- Annotations: 9–10px, JetBrains Mono, muted color

---

## Color Palette — Monokai Noir

### Backgrounds & Surfaces

| Name | Hex | Usage |
|------|-----|-------|
| bg | `#0d0d0d` | Slide background, page background |
| surface | `#161616` | Cards, code blocks, elevated elements |
| surface-2 | `#1e1e1e` | Code block headers, nested surfaces |
| border | `#2a2a2a` | All borders, dividers |

### Text

| Name | Hex | Usage |
|------|-----|-------|
| text | `#f8f8f2` | Primary text (warm white) |
| text-muted | `#939293` | Secondary text, descriptions |
| text-dim | `#5a5a5a` | Line numbers, annotations, labels |

### Accents

| Name | Hex | Syntax Role | Semantic Role |
|------|-----|-------------|---------------|
| pink | `#ff6188` | Keywords, operators | Primary accent, emphasis, active states |
| green | `#a9dc76` | Functions, strings | Success, terminal prompts, positive |
| yellow | `#ffd866` | Strings, values | Highlights, warnings, attention |
| cyan | `#78dce8` | Types, properties | Information, links, secondary accent |
| purple | `#ab9df2` | Keywords, constants | Tertiary accent, special elements |
| orange | `#fc9867` | Numbers, parameters | Section tags, warm accent |

### Usage rules

- **Pink** is the dominant accent — use it for the most important element on each slide (title accents, active states, hover borders, the blinking cursor).
- **Green** is for terminal prompt markers (`$` signs, section tags).
- Other accent colors support and differentiate — avoid using more than 3 accents on a single slide.
- Text on dark backgrounds should be `text` (#f8f8f2) or `text-muted` (#939293), never pure white (#ffffff).

---

## CSS Variables

```css
:root {
  --bg: #0d0d0d;
  --surface: #161616;
  --surface-2: #1e1e1e;
  --border: #2a2a2a;
  --text: #f8f8f2;
  --text-muted: #939293;
  --text-dim: #5a5a5a;
  --pink: #ff6188;
  --green: #a9dc76;
  --yellow: #ffd866;
  --cyan: #78dce8;
  --purple: #ab9df2;
  --orange: #fc9867;
}
```

---

## Texture & Atmosphere

### Scanline overlay

A full-page overlay that gives a subtle CRT monitor feel. Always present, never distracting:

```css
body::after {
  content: '';
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(255,255,255,0.008) 2px,
    rgba(255,255,255,0.008) 4px
  );
  pointer-events: none;
  z-index: 1000;
}
```

### Radial glow

Used on the title slide and key moments for depth. Pink glow, very subtle:

```css
.element::before {
  content: '';
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255,97,136,0.06) 0%, transparent 70%);
  pointer-events: none;
}
```

### Blinking cursor

Used on the title slide and anywhere that benefits from a sense of "liveness":

```css
@keyframes blink {
  50% { opacity: 0; }
}
.cursor {
  display: inline-block;
  width: 14px;
  height: 28px;
  background: var(--pink);
  animation: blink 1s step-end infinite;
}
```

---

## Slide Patterns

### Terminal prompt as section marker

Each slide opens with a terminal-style prompt that frames the content:

```
$ present --topic agent-skills       (title slide)
// 01 — the basics                   (section tag)
// 02 — anatomy                      (section tag)
```

- Title slide uses `$ command` format in JetBrains Mono, with green `$`
- Content slides use `// NN — label` format in JetBrains Mono, uppercase, with accent color

### Code blocks

Styled as editor windows with:
- Window chrome (three dots) in the header
- Filename in dim text
- Line numbers in `text-dim`
- Syntax highlighting using the accent colors
- Annotations below the block pointing to key parts

### Concept cards

Row of 2–4 cards with:
- Colored left border (2px, using accent colors)
- Dark surface background
- Monospace title (JetBrains Mono, 11px, weight 600)
- Muted body text (IBM Plex Sans or JetBrains Mono, 10px)

### Flow diagrams

Horizontal flow with:
- Nodes as bordered boxes on surface background
- Arrow characters (`→`) in dim text between nodes
- Active/highlighted node gets a pink border + subtle box-shadow glow
- Labels in colored JetBrains Mono, descriptions in dim text

---

## Interaction & Motion

### Hover states

- Slide previews / cards: border transitions to `var(--pink)` on hover
- Transition: `border-color 0.3s ease`

### Slide transitions (for the actual presentation)

- Fade-in with slight upward translate for content
- Staggered animation-delay for card rows and list items
- Code blocks: lines can appear sequentially for a "typing" effect

### Keep restrained

- No bouncing, no 3D transforms, no parallax
- Motion should feel like a terminal rendering output: precise, purposeful, fast
