<script>
	import SectionTag from '$lib/components/SectionTag.svelte';

	const tools = [
		['GitHub Copilot', 'VS Code', 'Claude Code', 'Cursor'],
		['OpenAI Codex', 'Gemini CLI', 'Windsurf', 'Junie (JetBrains)'],
		['Kiro (AWS)', 'Databricks', 'Goose (Block)', 'Roo Code'],
	];
</script>

<div class="slide">
	<SectionTag number="09" label="adoption" color="var(--yellow)" />
	<h2 class="font-heading">One format. 30+ tools.</h2>

	<div class="center-block">
		<div class="skill-icon font-mono">SKILL.md</div>

		<div class="grid">
			{#each tools as row}
				<div class="row">
					{#each row as tool}
						<div class="tool font-mono">{tool}</div>
					{/each}
				</div>
			{/each}
			<div class="row more">
				<span class="font-mono">and many more...</span>
			</div>
		</div>
	</div>

	<p class="message font-body">
		Write a skill once. It works in every tool your team uses — today and tomorrow.
	</p>

	<p class="attribution font-mono">
		Open standard at agentskills.io — originally developed by Anthropic.
	</p>
</div>

<style>
	.slide {
		width: 100%;
		max-width: 900px;
		padding: 0 48px;
		text-align: center;
	}

	h2 {
		font-size: clamp(28px, 4vw, 48px);
		color: var(--text);
		margin-bottom: 28px;
	}

	.center-block {
		margin-bottom: 24px;
	}

	.skill-icon {
		display: inline-block;
		background: var(--surface);
		border: 2px solid var(--pink);
		border-radius: 8px;
		padding: 10px 24px;
		font-size: clamp(14px, 1.5vw, 18px);
		color: var(--pink);
		font-weight: 600;
		margin-bottom: 20px;
		box-shadow: 0 0 24px rgba(255, 97, 136, 0.1);
	}

	.grid {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.row {
		display: flex;
		gap: 8px;
		justify-content: center;
	}

	.tool {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 4px;
		padding: 8px 14px;
		font-size: clamp(10px, 1vw, 12px);
		color: var(--text-muted);
	}

	.more {
		margin-top: 4px;
	}

	.more span {
		font-size: clamp(10px, 1vw, 12px);
		color: var(--text-dim);
	}

	.message {
		font-size: clamp(14px, 1.5vw, 18px);
		color: var(--text);
		font-weight: 400;
		margin-bottom: 12px;
	}

	.attribution {
		font-size: clamp(9px, 0.9vw, 11px);
		color: var(--text-dim);
	}
</style>
