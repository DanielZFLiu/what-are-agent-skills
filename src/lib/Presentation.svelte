<script lang="ts">
	import { slides } from './slides.js';
	import SlideShell from './SlideShell.svelte';

	let current = $state(0);

	function goto(index: number) {
		if (index >= 0 && index < slides.length) {
			current = index;
			window.location.hash = `#${index + 1}`;
		}
	}

	function prev() {
		goto(current - 1);
	}

	function next() {
		goto(current + 1);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
			e.preventDefault();
			next();
		} else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
			e.preventDefault();
			prev();
		}
	}

	function syncFromHash() {
		const hash = window.location.hash;
		if (hash) {
			const num = parseInt(hash.slice(1), 10);
			if (num >= 1 && num <= slides.length) {
				current = num - 1;
			}
		}
	}

	// Read initial hash and listen for browser back/forward navigation
	$effect(() => {
		syncFromHash();
		window.addEventListener('hashchange', syncFromHash);
		return () => window.removeEventListener('hashchange', syncFromHash);
	});

	// Keyboard navigation — separate from hash handling
	$effect(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});
</script>

<div
	class="presentation"
	role="region"
	aria-label="Slide presentation"
	aria-roledescription="presentation"
>
	{#each slides as slide, i}
		<div class="slide-wrapper" class:active={i === current}>
			{#if i === current}
				<slide.component />
			{/if}
		</div>
	{/each}

	<SlideShell {current} total={slides.length} onprev={prev} onnext={next} />
</div>

<style>
	.presentation {
		width: 100vw;
		height: 100vh;
		position: relative;
		overflow: hidden;
	}

	.slide-wrapper {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: opacity 0.2s ease-out;
		pointer-events: none;
	}

	.slide-wrapper.active {
		opacity: 1;
		pointer-events: auto;
	}
</style>
