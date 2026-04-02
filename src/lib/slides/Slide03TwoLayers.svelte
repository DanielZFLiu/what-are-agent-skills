<script lang="ts">
	import SectionTag from '$lib/components/SectionTag.svelte';
	import ConceptCard from '$lib/components/ConceptCard.svelte';
</script>

<div class="slide">
	<SectionTag number="02" label="two concepts" />
	<h2 class="font-heading">Rules vs. Skills</h2>

	<div class="split">
		<ConceptCard title="Always-on Rules" borderColor="var(--cyan)">
			<p>Background context the AI reads every session.</p>
			<p class="examples">CLAUDE.md, copilot-instructions.md, .windsurfrules</p>
			<p class="caption">"Who you are and how you work."</p>
		</ConceptCard>
		<ConceptCard title="On-demand Skills" borderColor="var(--pink)">
			<p>
				Loaded when needed — via <code class="font-mono">/name</code> or automatically when the task matches.
			</p>
			<p class="examples">SKILL.md files in your tool's skills directory</p>
			<p class="caption">"What to do when needed."</p>
		</ConceptCard>
	</div>

	<p class="footer font-mono">We're focusing on the right side. →</p>
</div>

<style>
	.slide {
		width: 100%;
		max-width: 900px;
		padding: 0 48px;
	}

	h2 {
		font-size: clamp(24px, 3.5vw, 40px);
		color: var(--text);
		margin-bottom: 28px;
	}

	.split {
		display: flex;
		gap: 16px;
	}

	.examples {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.85em;
		color: var(--text-dim);
		margin-top: 8px;
	}

	.caption {
		font-style: italic;
		margin-top: 8px;
		color: var(--text-muted);
	}

	code {
		background: var(--surface-2);
		padding: 1px 5px;
		border-radius: 3px;
		font-size: 0.9em;
	}

	.footer {
		font-size: clamp(10px, 1vw, 12px);
		color: var(--text-dim);
		margin-top: 24px;
	}
</style>
