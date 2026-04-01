<!--
	Bottom chrome — slide counter and prev/next navigation arrows.
-->
<script lang="ts">
	let {
		current = 0,
		total = 0,
		onprev,
		onnext,
	}: {
		current: number;
		total: number;
		onprev: () => void;
		onnext: () => void;
	} = $props();
</script>

<div class="shell">
	<div class="slide-counter font-mono" aria-live="polite" aria-atomic="true">
		{current + 1} / {total}
	</div>

	<nav class="slide-nav">
		<button
			class="nav-btn font-mono"
			onclick={onprev}
			disabled={current === 0}
			aria-label="Previous slide"
		>
			←
		</button>
		<button
			class="nav-btn font-mono"
			onclick={onnext}
			disabled={current === total - 1}
			aria-label="Next slide"
		>
			→
		</button>
	</nav>
</div>

<style>
	.shell {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16px 32px;
		pointer-events: none;
	}

	.slide-counter {
		font-size: 12px;
		color: var(--text-dim);
		letter-spacing: 2px;
	}

	.slide-nav {
		display: flex;
		gap: 8px;
		pointer-events: auto;
	}

	.nav-btn {
		background: var(--surface);
		border: 1px solid var(--border);
		color: var(--text-muted);
		padding: 6px 14px;
		border-radius: 4px;
		cursor: pointer;
		font-size: 14px;
		transition:
			border-color 0.2s,
			color 0.2s;
	}

	.nav-btn:hover:not(:disabled) {
		border-color: var(--pink);
		color: var(--text);
	}

	.nav-btn:disabled {
		opacity: 0.3;
		cursor: default;
	}
</style>
