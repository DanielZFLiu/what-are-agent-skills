<script>
	import SectionTag from '$lib/components/SectionTag.svelte';
</script>

<div class="slide">
	<SectionTag number="08" label="file locations" color="var(--cyan)" />
	<h2 class="font-heading">Where does the file go?</h2>

	<div class="primary-path font-mono">
		your-project/<span class="highlight">.agents/skills/</span>my-skill/<span class="highlight">SKILL.md</span>
	</div>
	<p class="primary-caption font-body">
		The <code class="font-mono">.agents/skills/</code> directory is the cross-client standard. Every compatible tool scans it.
	</p>

	<div class="scopes">
		<div class="scope">
			<span class="scope-label font-mono" style="color: var(--green)">Project scope</span>
			<span class="scope-desc font-body"><code class="font-mono">.agents/skills/</code> in your repo root — shared with the team via git</span>
		</div>
		<div class="scope">
			<span class="scope-label font-mono" style="color: var(--purple)">Personal scope</span>
			<span class="scope-desc font-body"><code class="font-mono">~/.agents/skills/</code> in your home directory — available across all your projects</span>
		</div>
	</div>

	<p class="note font-mono">
		Each tool also has its own native path (e.g., .claude/skills/, .github/prompts/), but .agents/skills/ works everywhere.
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
		margin-bottom: 28px;
	}

	.primary-path {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 6px;
		padding: 16px 24px;
		font-size: clamp(13px, 1.4vw, 17px);
		color: var(--text-muted);
		text-align: center;
	}

	.highlight {
		color: var(--pink);
		font-weight: 600;
	}

	.primary-caption {
		font-size: clamp(12px, 1.2vw, 14px);
		color: var(--text-muted);
		margin-top: 12px;
		margin-bottom: 28px;
		font-weight: 300;
	}

	code {
		background: var(--surface-2);
		padding: 1px 5px;
		border-radius: 3px;
		font-size: 0.9em;
	}

	.scopes {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-bottom: 24px;
	}

	.scope {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 6px;
		padding: 12px 20px;
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.scope-label {
		font-size: clamp(10px, 1vw, 12px);
		font-weight: 600;
		white-space: nowrap;
		min-width: 120px;
	}

	.scope-desc {
		font-size: clamp(12px, 1.2vw, 14px);
		color: var(--text-muted);
		font-weight: 300;
	}

	.note {
		font-size: clamp(9px, 0.9vw, 11px);
		color: var(--text-dim);
	}
</style>
