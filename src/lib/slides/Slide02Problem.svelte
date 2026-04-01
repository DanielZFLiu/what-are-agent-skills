<script>
	import SectionTag from '$lib/components/SectionTag.svelte';
</script>

<div class="slide">
	<SectionTag number="01" label="the problem" />
	<h2 class="font-heading">You keep repeating yourself</h2>

	<div class="terminal-blocks">
		<div class="block">
			<span class="prompt font-mono"><span class="dollar">$</span></span>
			<span class="text font-mono">"Always use conventional commits with scope..."</span>
		</div>
		<div class="block">
			<span class="prompt font-mono"><span class="dollar">$</span></span>
			<span class="text font-mono">"Run the full test suite before committing..."</span>
		</div>
		<div class="block">
			<span class="prompt font-mono"><span class="dollar">$</span></span>
			<span class="text font-mono"
				>"Follow our REST naming convention: plural nouns, kebab-case..."</span
			>
		</div>
	</div>

	<p class="punchline font-body">
		Same instructions. Every session. Every project. Every teammate.
	</p>
</div>

<style>
	.slide {
		width: 100%;
		max-width: 800px;
		padding: 0 48px;
	}

	h2 {
		font-size: clamp(24px, 3.5vw, 40px);
		color: var(--text);
		margin-bottom: 32px;
	}

	.terminal-blocks {
		display: flex;
		flex-direction: column;
		gap: 12px;
		margin-bottom: 32px;
	}

	.block {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 6px;
		padding: 12px 16px;
		display: flex;
		align-items: baseline;
		gap: 12px;
	}

	.dollar {
		color: var(--green);
	}

	.prompt {
		font-size: clamp(11px, 1.1vw, 13px);
		color: var(--text-dim);
		flex-shrink: 0;
	}

	.text {
		font-size: clamp(11px, 1.1vw, 13px);
		color: var(--yellow);
		font-style: italic;
	}

	.punchline {
		font-size: clamp(13px, 1.3vw, 16px);
		color: var(--text-muted);
		font-weight: 300;
	}
</style>
