<script lang="ts">
	import SectionTag from '$lib/components/SectionTag.svelte';

	type Tool = 'claude' | 'copilot' | 'windsurf';
	let activeTool: Tool = $state('claude');

	const paths: Record<Tool, { label: string; project: string; personal: string }> = {
		claude: {
			label: 'Claude Code',
			project: '.claude/skills/<name>/SKILL.md',
			personal: '~/.claude/skills/<name>/SKILL.md',
		},
		copilot: {
			label: 'Copilot / VS Code',
			project: '.github/skills/<name>/SKILL.md',
			personal: '~/.agents/skills/<name>/SKILL.md',
		},
		windsurf: {
			label: 'Windsurf',
			project: '.windsurf/skills/<name>/SKILL.md',
			personal: '~/.codeium/windsurf/skills/<name>/SKILL.md',
		},
	};

	const tools: Tool[] = ['claude', 'copilot', 'windsurf'];
</script>

<div class="slide">
	<SectionTag number="08" label="file locations" color="var(--cyan)" />
	<h2 class="font-heading">Where does the file go?</h2>

	<div class="tool-tabs">
		{#each tools as tool}
			<button
				class="tab font-mono"
				class:active={activeTool === tool}
				onclick={() => (activeTool = tool)}
			>
				{paths[tool].label}
			</button>
		{/each}
	</div>

	<div class="paths">
		<div class="path-row">
			<span class="scope-label font-mono" style="color: var(--green)">Project</span>
			<code class="path font-mono">{paths[activeTool].project}</code>
		</div>
		<div class="path-row">
			<span class="scope-label font-mono" style="color: var(--purple)">Personal</span>
			<code class="path font-mono">{paths[activeTool].personal}</code>
		</div>
	</div>

	<div class="cross-client">
		<p class="cross-client-label font-mono">Cross-client standard (works everywhere)</p>
		<div class="path-row">
			<span class="scope-label font-mono" style="color: var(--cyan)">Project</span>
			<code class="path font-mono standard">.agents/skills/&lt;name&gt;/SKILL.md</code>
		</div>
		<div class="path-row">
			<span class="scope-label font-mono" style="color: var(--cyan)">Personal</span>
			<code class="path font-mono standard">~/.agents/skills/&lt;name&gt;/SKILL.md</code>
		</div>
	</div>

	<p class="note font-mono">
		All three tools scan <span style="color: var(--cyan)">.agents/skills/</span> in addition to their
		native paths.
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
		margin-bottom: 20px;
	}

	.tab {
		background: var(--surface);
		border: 1px solid var(--border);
		color: var(--text-dim);
		padding: 8px 18px;
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

	/* ── Path rows ───────────────────────────────────────────── */

	.paths {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-bottom: 20px;
	}

	.path-row {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 6px;
		padding: 10px 16px;
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.scope-label {
		font-size: clamp(10px, 1vw, 12px);
		font-weight: 600;
		white-space: nowrap;
		min-width: 70px;
	}

	.path {
		font-size: clamp(11px, 1.2vw, 14px);
		color: var(--text-muted);
		background: none;
		padding: 0;
	}

	.path.standard {
		color: var(--cyan);
	}

	/* ── Cross-client section ────────────────────────────────── */

	.cross-client {
		margin-bottom: 16px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.cross-client-label {
		font-size: clamp(8px, 0.85vw, 10px);
		color: var(--text-dim);
		letter-spacing: 2px;
		text-transform: uppercase;
	}

	.cross-client .path-row {
		border-color: rgba(120, 220, 232, 0.2);
	}

	.note {
		font-size: clamp(9px, 0.9vw, 11px);
		color: var(--text-dim);
	}
</style>
