<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		filename,
		children,
	}: {
		filename: string;
		children: Snippet;
	} = $props();
</script>

<div class="code-block">
	<div class="code-header">
		<div class="dots">
			<span></span><span></span><span></span>
		</div>
		<span class="filename font-mono">{filename}</span>
	</div>
	<div class="code-body font-mono">
		{@render children()}
	</div>
</div>

<style>
	.code-block {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 6px;
		overflow: hidden;
		width: 100%;
	}

	.code-header {
		padding: 8px 14px;
		border-bottom: 1px solid var(--border);
		display: flex;
		align-items: center;
		gap: 10px;
		background: var(--surface-2);
	}

	.dots {
		display: flex;
		gap: 5px;
	}

	.dots span {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--border);
	}

	.filename {
		font-size: clamp(9px, 0.9vw, 11px);
		color: var(--text-dim);
	}

	.code-body {
		padding: 16px 20px;
		font-size: clamp(11px, 1.1vw, 14px);
		line-height: 1.7;
		overflow-x: auto;
	}
</style>
