<script lang="ts">
	import SectionTag from '$lib/components/SectionTag.svelte';
	import CodeBlock from '$lib/components/CodeBlock.svelte';
</script>

<div class="slide">
	<SectionTag number="05" label="anatomy" color="var(--orange)" />
	<h2 class="font-heading">Anatomy of a Skill</h2>

	<div class="layout">
		<div class="sidebar">
			<div class="tree font-mono">
				<div class="tree-line"><span class="dir">commit/</span></div>
				<div class="tree-line">
					├── <span class="file">SKILL.md</span>
					<span class="ann">← required</span>
				</div>
				<div class="tree-line">
					├── <span class="dim">scripts/</span>
					<span class="ann">← runnable code</span>
				</div>
				<div class="tree-line">
					├── <span class="dim">references/</span>
					<span class="ann">← extra docs</span>
				</div>
				<div class="tree-line">
					└── <span class="dim">assets/</span>
					<span class="ann">← templates, data</span>
				</div>
			</div>

			<div class="fields">
				<p class="fields-title font-mono">Frontmatter fields</p>
				<div class="field">
					<span class="field-name font-mono req">name</span>
					<span class="field-desc font-body">identifier, must match directory</span>
				</div>
				<div class="field">
					<span class="field-name font-mono req">description</span>
					<span class="field-desc font-body">when to use this skill (max 1024 chars)</span>
				</div>
				<div class="field">
					<span class="field-name font-mono opt">license</span>
					<span class="field-desc font-body">license name or file reference</span>
				</div>
				<div class="field">
					<span class="field-name font-mono opt">compatibility</span>
					<span class="field-desc font-body">environment requirements</span>
				</div>
				<div class="field">
					<span class="field-name font-mono opt">metadata</span>
					<span class="field-desc font-body">arbitrary key-value pairs</span>
				</div>
				<div class="field">
					<span class="field-name font-mono opt">allowed-tools</span>
					<span class="field-desc font-body">pre-approved tools (experimental)</span>
				</div>
			</div>
		</div>

		<CodeBlock filename="SKILL.md">
			<div class="code-line">
				<span class="ln">1</span><span class="key">---</span><span class="inline-ann"
					>← frontmatter start</span
				>
			</div>
			<div class="code-line">
				<span class="ln">2</span><span class="prop">name</span><span class="key">:</span>
				<span class="str">commit</span>
			</div>
			<div class="code-line">
				<span class="ln">3</span><span class="prop">description</span><span class="key">:</span>
				<span class="str">></span><span class="inline-ann">← when to use this skill</span>
			</div>
			<div class="code-line">
				<span class="ln">4</span>
				<span class="str"> Smart conventional commits. Use</span>
			</div>
			<div class="code-line">
				<span class="ln">5</span>
				<span class="str"> when the user wants to commit</span>
			</div>
			<div class="code-line">
				<span class="ln">6</span>
				<span class="str"> staged changes.</span>
			</div>
			<div class="code-line">
				<span class="ln">7</span><span class="key">---</span><span class="inline-ann"
					>← frontmatter end</span
				>
			</div>
			<div class="code-line"><span class="ln">8</span></div>
			<div class="code-line">
				<span class="ln">9</span><span class="heading">## Instructions</span><span
					class="inline-ann">← body starts here</span
				>
			</div>
			<div class="code-line">
				<span class="ln">10</span><span class="body">Review staged changes and write</span>
			</div>
			<div class="code-line">
				<span class="ln">11</span><span class="body">a conventional commit message.</span>
			</div>
			<div class="code-line"><span class="ln">12</span></div>
			<div class="code-line">
				<span class="ln">13</span><span class="heading">## Gotchas</span>
			</div>
			<div class="code-line">
				<span class="ln">14</span><span class="body">- Run tests before committing</span>
			</div>
		</CodeBlock>
	</div>
</div>

<style>
	.slide {
		width: 100%;
		max-width: 960px;
		padding: 0 48px;
	}

	h2 {
		font-size: clamp(22px, 3vw, 36px);
		color: var(--text);
		margin-bottom: 20px;
	}

	.layout {
		display: flex;
		gap: 20px;
		align-items: flex-start;
	}

	.sidebar {
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		gap: 14px;
		min-width: 240px;
	}

	/* ── Directory tree ──────────────────────────────────────── */

	.tree {
		font-size: clamp(10px, 1vw, 12px);
		line-height: 1.8;
		padding: 12px 14px;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 6px;
	}

	.tree .dir {
		color: var(--cyan);
		font-weight: 600;
	}
	.tree .file {
		color: var(--pink);
	}
	.tree .dim {
		color: var(--text-dim);
	}
	.tree .ann {
		color: var(--text-dim);
		font-size: 0.85em;
	}

	.tree-line {
		white-space: pre;
	}

	/* ── Frontmatter fields reference ────────────────────────── */

	.fields {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 6px;
		padding: 10px 14px;
	}

	.fields-title {
		font-size: clamp(8px, 0.8vw, 10px);
		color: var(--text-dim);
		letter-spacing: 2px;
		text-transform: uppercase;
		margin-bottom: 8px;
	}

	.field {
		display: flex;
		align-items: baseline;
		gap: 8px;
		padding: 2px 0;
	}

	.field-name {
		font-size: clamp(9px, 0.9vw, 11px);
		flex-shrink: 0;
		min-width: 100px;
	}

	.field-name.req {
		color: var(--pink);
	}

	.field-name.opt {
		color: var(--text-dim);
	}

	.field-desc {
		font-size: clamp(9px, 0.85vw, 10px);
		color: var(--text-dim);
	}

	/* ── Code block content ──────────────────────────────────── */

	.code-line {
		white-space: pre;
	}
	.ln {
		color: var(--text-dim);
		display: inline-block;
		width: 24px;
		text-align: right;
		margin-right: 16px;
		user-select: none;
	}
	.key {
		color: var(--pink);
	}
	.prop {
		color: var(--cyan);
	}
	.str {
		color: var(--yellow);
	}
	.heading {
		color: var(--green);
		font-weight: 600;
	}
	.body {
		color: var(--text-muted);
	}

	/* ── Inline annotations ──────────────────────────────────── */

	.inline-ann {
		color: var(--text-dim);
		font-size: 0.85em;
		font-style: italic;
		margin-left: 16px;
		opacity: 0.7;
	}
</style>
