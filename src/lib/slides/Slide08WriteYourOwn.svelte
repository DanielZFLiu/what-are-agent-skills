<script>
	import SectionTag from '$lib/components/SectionTag.svelte';
	import VideoPlayer from '$lib/components/VideoPlayer.svelte';
</script>

<div class="slide">
	<SectionTag number="07" label="write your own" color="var(--orange)" />
	<h2 class="font-heading">Writing your own skill</h2>

	<div class="layout">
		<div class="steps">
			{#each [
				{ num: '1', cmd: 'mkdir .agents/skills/my-skill/', label: 'Create the folder' },
				{ num: '2', cmd: 'Write SKILL.md', label: 'Add name, description, and instructions' },
				{ num: '3', cmd: 'scripts/ references/', label: 'Bundle resources (optional)' },
				{ num: '4', cmd: '/my-skill', label: 'Invoke it and watch it work' },
			] as step}
				<div class="step">
					<div class="step-num font-mono">{step.num}</div>
					<div class="step-content">
						<p class="step-label font-body">{step.label}</p>
						<code class="font-mono">{step.cmd}</code>
					</div>
				</div>
			{/each}
		</div>

		<div class="video-side">
			<VideoPlayer src="" visible={true} />
			<p class="hint font-mono">Screen recording of creating a skill</p>
		</div>
	</div>
</div>

<style>
	.slide {
		width: 100%;
		max-width: 950px;
		padding: 0 48px;
	}

	h2 {
		font-size: clamp(22px, 3vw, 36px);
		color: var(--text);
		margin-bottom: 24px;
	}

	.layout {
		display: flex;
		gap: 24px;
		align-items: flex-start;
	}

	.steps {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.step {
		display: flex;
		gap: 12px;
		align-items: flex-start;
	}

	.step-num {
		width: 28px;
		height: 28px;
		border-radius: 50%;
		background: var(--surface);
		border: 1px solid var(--border);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 12px;
		color: var(--pink);
		flex-shrink: 0;
	}

	.step-content {
		flex: 1;
	}

	.step-label {
		font-size: clamp(12px, 1.2vw, 14px);
		color: var(--text);
		font-weight: 400;
		margin-bottom: 4px;
	}

	code {
		font-size: clamp(10px, 1vw, 12px);
		color: var(--text-dim);
		background: var(--surface);
		padding: 2px 6px;
		border-radius: 3px;
	}

	.video-side {
		flex: 1.2;
	}

	.hint {
		font-size: 10px;
		color: var(--text-dim);
		margin-top: 8px;
		text-align: center;
	}
</style>
