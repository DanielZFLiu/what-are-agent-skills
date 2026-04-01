<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title,
		borderColor = 'var(--pink)',
		children,
	}: {
		title: string;
		borderColor?: string;
		children: Snippet;
	} = $props();
</script>

<div class="card" style:border-left-color={borderColor}>
	<h3 class="font-mono">{title}</h3>
	<div class="body font-body">
		{@render children()}
	</div>
</div>

<style>
	.card {
		flex: 1;
		background: var(--surface);
		border: 1px solid var(--border);
		border-left: 2px solid;
		border-radius: 6px;
		padding: clamp(12px, 1.5vw, 20px);
	}

	h3 {
		font-size: clamp(11px, 1.1vw, 14px);
		font-weight: 600;
		margin-bottom: 8px;
		color: var(--text);
	}

	.body {
		font-size: clamp(10px, 1vw, 13px);
		color: var(--text-muted);
		line-height: 1.5;
	}
</style>
