# What Are Agent Skills?

A slide-deck presentation about agent skills: the open standard for extending AI coding assistants with reusable, shareable instructions. Learn more about the standard at [agentskills.io](https://agentskills.io).

---

## Running locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Building for deployment

```bash
npm run build
```

The static site is output to `build/`. Serve it with any static host or preview it locally:

```bash
npm run preview
```

The project uses `@sveltejs/adapter-static` with `fallback: 'index.html'`, so it works as a single-page app on any static host.

---

## Adding screen recordings

1. Place your `.mp4` or `.webm` file in `static/recordings/`.
2. Open the relevant video slide component (e.g. `src/lib/slides/Slide05InAction.svelte`, `src/lib/slides/Slide08WriteYourOwn.svelte`).
3. Set the `src` prop on `<VideoPlayer>` to the path of your file:

```svelte
<VideoPlayer src="/recordings/your-recording.mp4" />
```

When `src` is empty the component renders a placeholder — the recording slot is intentionally left blank so the file can be dropped in without touching any other code.

---

## Navigation

| Action                     | Effect                   |
| -------------------------- | ------------------------ |
| `ArrowRight` / `ArrowDown` | Next slide               |
| `ArrowLeft` / `ArrowUp`    | Previous slide           |
| Click the on-screen arrows | Next / previous slide    |
| URL hash (e.g. `#3`)       | Jump directly to a slide |

The URL hash stays in sync with the current slide, so links to specific slides and browser back/forward navigation both work.

---

## Tech stack

| Layer         | Technology                                                             |
| ------------- | ---------------------------------------------------------------------- |
| Framework     | [SvelteKit](https://kit.svelte.dev) 2 + [Svelte](https://svelte.dev) 5 |
| Deployment    | `@sveltejs/adapter-static`                                             |
| Build tool    | Vite 6                                                                 |
| Language      | TypeScript                                                             |
| Design system | Terminal Noir (Monokai-inspired dark theme, defined in `src/app.css`)  |
| Formatting    | Prettier + `prettier-plugin-svelte`                                    |
