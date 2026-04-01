<script>
	import SectionTag from '$lib/components/SectionTag.svelte';
	import ConceptCard from '$lib/components/ConceptCard.svelte';
</script>

<div class="slide">
	<SectionTag number="03" label="the fix" />
	<h2 class="font-heading">Skills = reusable, shareable instructions</h2>

	<div class="cards">
		<ConceptCard title="A Folder" borderColor="var(--pink)">
			<p>A directory with a <code class="font-mono">SKILL.md</code> file, plus optional scripts and references.</p>
		</ConceptCard>
		<ConceptCard title="A Trigger" borderColor="var(--green)">
			<p>Invoked via <code class="font-mono">/name</code> or automatically when the AI matches the skill's description.</p>
		</ConceptCard>
		<ConceptCard title="An Open Standard" borderColor="var(--yellow)">
			<p>One format across 30+ tools. Write once, use in Copilot, Windsurf, Claude Code, Cursor, Codex, and more.</p>
		</ConceptCard>
	</div>

	<p class="note font-body">
		Originally developed by Anthropic, now an open standard adopted across the industry.
		<span class="font-mono link">agentskills.io</span>
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
		margin-bottom: 28px;
	}

	.cards {
		display: flex;
		gap: 16px;
	}

	code {
		background: var(--surface-2);
		padding: 1px 5px;
		border-radius: 3px;
		font-size: 0.9em;
	}

	.note {
		font-size: clamp(12px, 1.2vw, 14px);
		color: var(--text-muted);
		margin-top: 24px;
		font-weight: 300;
	}

	.link {
		color: var(--cyan);
		font-size: 0.9em;
	}
</style>
