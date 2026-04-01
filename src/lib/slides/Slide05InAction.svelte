<script>
	import SectionTag from '$lib/components/SectionTag.svelte';
	import VideoPlayer from '$lib/components/VideoPlayer.svelte';
</script>

<div class="slide">
	<SectionTag number="04" label="in action" color="var(--green)" />
	<h2 class="font-heading">See it working</h2>

	<VideoPlayer src="" />

	<p class="caption font-mono">
		User invokes <span class="cmd">/commit</span> → AI loads skill → reads instructions → executes task
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
		margin-bottom: 20px;
	}

	.caption {
		font-size: clamp(10px, 1vw, 12px);
		color: var(--text-dim);
		margin-top: 16px;
		text-align: center;
	}

	.cmd {
		color: var(--pink);
	}
</style>
