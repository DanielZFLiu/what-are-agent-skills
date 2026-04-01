<script>
	import SectionTag from '$lib/components/SectionTag.svelte';
	import CodeBlock from '$lib/components/CodeBlock.svelte';
</script>

<div class="slide">
	<SectionTag number="05" label="anatomy" color="var(--orange)" />
	<h2 class="font-heading">Anatomy of a Skill</h2>

	<div class="layout">
		<div class="tree font-mono">
			<div class="line"><span class="dir">commit/</span></div>
			<div class="line">├── <span class="file">SKILL.md</span> <span class="ann">← the skill</span></div>
			<div class="line">├── <span class="dim">scripts/</span> <span class="ann">← optional</span></div>
			<div class="line">└── <span class="dim">references/</span> <span class="ann">← optional</span></div>
		</div>

		<CodeBlock filename="SKILL.md">
			<div class="line"><span class="ln">1</span><span class="key">---</span></div>
			<div class="line"><span class="ln">2</span><span class="prop">name</span><span class="key">:</span> <span class="str">commit</span></div>
			<div class="line"><span class="ln">3</span><span class="prop">description</span><span class="key">:</span> <span class="str">></span></div>
			<div class="line"><span class="ln">4</span>  <span class="str">Smart conventional commits. Use when</span></div>
			<div class="line"><span class="ln">5</span>  <span class="str">the user wants to commit staged changes.</span></div>
			<div class="line"><span class="ln">6</span><span class="key">---</span></div>
			<div class="line"><span class="ln">7</span></div>
			<div class="line"><span class="ln">8</span><span class="heading">## Instructions</span></div>
			<div class="line"><span class="ln">9</span><span class="body">Review staged changes and write a</span></div>
			<div class="line"><span class="ln">10</span><span class="body">conventional commit message following</span></div>
			<div class="line"><span class="ln">11</span><span class="body">the project's style.</span></div>
		</CodeBlock>
	</div>

	<div class="annotations">
		<span class="ann-item"><span class="arrow" style="color: var(--pink)">↑</span> frontmatter — YAML metadata (name + description required)</span>
		<span class="ann-item"><span class="arrow" style="color: var(--green)">↑</span> description — how the AI decides when to activate</span>
		<span class="ann-item"><span class="arrow" style="color: var(--yellow)">↑</span> body — markdown instructions the AI follows</span>
	</div>

	<p class="note font-mono">
		Optional fields: license, compatibility, metadata, allowed-tools
	</p>
</div>

<style>
	.slide {
		width: 100%;
		max-width: 900px;
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

	.tree {
		flex-shrink: 0;
		font-size: clamp(11px, 1.1vw, 13px);
		line-height: 1.8;
		padding: 16px;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 6px;
	}

	.tree .dir { color: var(--cyan); font-weight: 600; }
	.tree .file { color: var(--pink); }
	.tree .dim { color: var(--text-dim); }
	.tree .ann { color: var(--text-dim); font-size: 0.85em; }

	.line { white-space: pre; }
	.ln { color: var(--text-dim); display: inline-block; width: 24px; text-align: right; margin-right: 16px; user-select: none; }
	.key { color: var(--pink); }
	.prop { color: var(--cyan); }
	.str { color: var(--yellow); }
	.heading { color: var(--green); font-weight: 600; }
	.body { color: var(--text-muted); }

	.annotations {
		display: flex;
		gap: 20px;
		margin-top: 14px;
	}

	.ann-item {
		font-family: 'JetBrains Mono', monospace;
		font-size: clamp(9px, 0.9vw, 11px);
		color: var(--text-dim);
	}

	.arrow { font-size: 14px; }

	.note {
		font-size: clamp(9px, 0.9vw, 11px);
		color: var(--text-dim);
		margin-top: 14px;
	}
</style>
