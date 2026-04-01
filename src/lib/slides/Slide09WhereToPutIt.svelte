<script lang="ts">
	import SectionTag from '$lib/components/SectionTag.svelte';

	type Tool = 'claude' | 'copilot' | 'windsurf';
	let activeTool: Tool = $state('claude');

	const tools: { id: Tool; label: string; project: string; personal: string }[] = [
		{
			id: 'claude',
			label: 'Claude Code',
			project: '<repo>/.claude/skills/<name>/SKILL.md',
			personal: '~/.claude/skills/<name>/SKILL.md',
		},
		{
			id: 'copilot',
			label: 'Copilot',
			project: '<repo>/.github/skills/<name>/SKILL.md',
			personal: '~/.github/skills/<name>/SKILL.md',
		},
		{
			id: 'windsurf',
			label: 'Windsurf',
			project: '<repo>/.windsurf/skills/<name>/SKILL.md',
			personal: '~/.codeium/windsurf/skills/<name>/SKILL.md',
		},
	];

	let current = $derived(tools.find((t) => t.id === activeTool)!);
</script>

<div class="slide">
	<SectionTag number="08" label="file locations" color="var(--cyan)" />
	<h2 class="font-heading">Where does the file go?</h2>

	<div class="tool-tabs">
		{#each tools as tool}
			<button
				class="tab font-mono"
				class:active={activeTool === tool.id}
				onclick={() => (activeTool = tool.id)}
			>
				{tool.label}
			</button>
		{/each}
	</div>

	<div class="paths">
		<div class="path-group">
			<span class="scope-label font-mono" style="color: var(--green)">Project scope</span>
			<p class="scope-hint font-body">Shared with your team via git</p>
			<div class="path-box">
				<code class="font-mono">{current.project}</code>
			</div>
		</div>

		<div class="path-group">
			<span class="scope-label font-mono" style="color: var(--purple)">Personal scope</span>
			<p class="scope-hint font-body">Available across all your projects</p>
			<div class="path-box">
				<code class="font-mono">{current.personal}</code>
			</div>
		</div>
	</div>

	<p class="note font-mono">
		Same SKILL.md format across all tools — only the directory path differs.
	</p>
</div>

<style>
	.slide {
		width: 100%;
		max-width: 850px;
		padding: 0 48px;
	}

	h2 {
		font-size: clamp(24px, 3.5vw, 40px);
		color: var(--text);
		margin-bottom: 24px;
	}

	/* ── Tool toggle tabs ────────────────────────────────────── */

	.tool-tabs {
		display: flex;
		gap: 6px;
		margin-bottom: 24px;
	}

	.tab {
		background: var(--surface);
		border: 1px solid var(--border);
		color: var(--text-dim);
		padding: 8px 20px;
		border-radius: 4px;
		cursor: pointer;
		font-size: clamp(10px, 1.1vw, 13px);
		transition:
			border-color 0.2s,
			color 0.2s;
	}

	.tab:hover {
		border-color: var(--pink);
		color: var(--text-muted);
	}

	.tab.active {
		border-color: var(--pink);
		color: var(--pink);
		background: var(--surface-2);
	}

	/* ── Path groups ─────────────────────────────────────────── */

	.paths {
		display: flex;
		gap: 16px;
		margin-bottom: 24px;
	}

	.path-group {
		flex: 1;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 6px;
		padding: 16px 20px;
	}

	.scope-label {
		font-size: clamp(10px, 1vw, 12px);
		font-weight: 600;
	}

	.scope-hint {
		font-size: clamp(10px, 0.9vw, 12px);
		color: var(--text-dim);
		margin-top: 4px;
		margin-bottom: 12px;
	}

	.path-box {
		background: var(--bg);
		border: 1px solid var(--border);
		border-radius: 4px;
		padding: 10px 14px;
	}

	.path-box code {
		font-size: clamp(10px, 1vw, 12px);
		color: var(--text-muted);
		word-break: break-all;
	}

	/* ── Footer note ─────────────────────────────────────────── */

	.note {
		font-size: clamp(9px, 0.9vw, 11px);
		color: var(--text-dim);
	}
</style>
