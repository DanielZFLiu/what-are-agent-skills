<script lang="ts">
	import SectionTag from '$lib/components/SectionTag.svelte';
</script>

<div class="slide">
	<SectionTag number="01" label="the problem" />
	<h2 class="font-heading">Your AI agent has limits</h2>

	<div class="problems">
		<div class="problem">
			<div class="problem-icon font-mono" style="color: var(--pink)">01</div>
			<div class="problem-content">
				<h3 class="font-mono">You keep repeating yourself</h3>
				<p class="font-body">
					Same instructions every session — commit conventions, test commands, naming rules.
				</p>
			</div>
		</div>
		<div class="problem">
			<div class="problem-icon font-mono" style="color: var(--yellow)">02</div>
			<div class="problem-content">
				<h3 class="font-mono">It doesn't know what you know</h3>
				<p class="font-body">
					Your team's deployment process, your API quirks, your domain-specific workflows — the
					agent can't learn these on its own.
				</p>
			</div>
		</div>
		<div class="problem">
			<div class="problem-icon font-mono" style="color: var(--cyan)">03</div>
			<div class="problem-content">
				<h3 class="font-mono">Knowledge stays in your head</h3>
				<p class="font-body">
					Your best prompts and workarounds don't transfer to teammates. Everyone reinvents the
					wheel.
				</p>
			</div>
		</div>
	</div>
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

	.problems {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	.problem {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 6px;
		padding: 16px 20px;
		display: flex;
		align-items: flex-start;
		gap: 16px;
	}

	.problem-icon {
		font-size: clamp(12px, 1.2vw, 14px);
		font-weight: 700;
		flex-shrink: 0;
		width: 28px;
		text-align: center;
		margin-top: 2px;
	}

	.problem-content h3 {
		font-size: clamp(12px, 1.2vw, 14px);
		font-weight: 600;
		color: var(--text);
		margin-bottom: 4px;
	}

	.problem-content p {
		font-size: clamp(11px, 1.1vw, 13px);
		color: var(--text-muted);
		line-height: 1.5;
	}
</style>
