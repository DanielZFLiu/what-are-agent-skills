<script>
	import SectionTag from '$lib/components/SectionTag.svelte';
</script>

<div class="slide">
	<SectionTag number="10" label="live demo" color="var(--pink)" />
	<h2 class="font-heading">Let's try it</h2>
	<p class="prompt font-mono"><span class="dollar">$</span> claude<span class="cursor"></span></p>
</div>

<style>
	.slide {
		width: 100%;
		max-width: 800px;
		padding: 0 48px;
		text-align: center;
	}

	h2 {
		font-size: clamp(36px, 5vw, 64px);
		color: var(--text);
		margin-bottom: 40px;
	}

	.prompt {
		font-size: clamp(18px, 2.5vw, 28px);
		color: var(--text-muted);
	}

	.dollar {
		color: var(--green);
	}
</style>
