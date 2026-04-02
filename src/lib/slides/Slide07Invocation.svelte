<script lang="ts">
	import SectionTag from '$lib/components/SectionTag.svelte';
</script>

<div class="slide">
	<SectionTag number="06" label="invocation" color="var(--green)" />
	<h2 class="font-heading">How it works: progressive disclosure</h2>

	<div class="tiers">
		<div class="tier tier-cyan">
			<div class="tier-label font-mono" style="color: var(--cyan)">Tier 1 — Discovery</div>
			<div class="tier-body font-body">
				At startup, agent loads only <strong>name + description</strong> of all skills.
			</div>
			<div class="tier-cost font-mono">~50–100 tokens per skill</div>
		</div>
		<div class="tier tier-pink">
			<div class="tier-label font-mono" style="color: var(--pink)">Tier 2 — Activation</div>
			<div class="tier-body font-body">
				When a task matches, agent loads the <strong>full SKILL.md body</strong>.
			</div>
			<div class="tier-cost font-mono">&lt;5000 tokens recommended</div>
		</div>
		<div class="tier tier-yellow">
			<div class="tier-label font-mono" style="color: var(--yellow)">Tier 3 — Resources</div>
			<div class="tier-body font-body">
				Agent loads <strong>scripts, references, assets</strong> only when instructions reference them.
			</div>
			<div class="tier-cost font-mono">varies</div>
		</div>
	</div>

	<p class="insight font-body">
		The agent knows about all installed skills but only pays the token cost for the ones it actually
		uses.
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
		margin-bottom: 24px;
	}

	/* ── Tier cards ──────────────────────────────────────────── */

	.tiers {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-bottom: 24px;
	}

	.tier {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 6px;
		padding: 14px 20px;
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.tier-cyan {
		border-left: 3px solid var(--cyan);
	}

	.tier-pink {
		border-left: 3px solid var(--pink);
	}

	.tier-yellow {
		border-left: 3px solid var(--yellow);
	}

	.tier-label {
		font-size: clamp(10px, 1vw, 12px);
		font-weight: 600;
		white-space: nowrap;
		min-width: 160px;
	}

	.tier-body {
		flex: 1;
		font-size: clamp(12px, 1.2vw, 14px);
		color: var(--text-muted);
		font-weight: 300;
	}

	.tier-body strong {
		color: var(--text);
		font-weight: 500;
	}

	.tier-cost {
		font-size: clamp(9px, 0.9vw, 11px);
		color: var(--text-dim);
		white-space: nowrap;
	}

	/* ── Footer ──────────────────────────────────────────────── */

	.insight {
		font-size: clamp(12px, 1.2vw, 14px);
		color: var(--text-dim);
		font-weight: 300;
		text-align: center;
	}
</style>
