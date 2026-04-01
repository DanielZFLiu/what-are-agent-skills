<script lang="ts">
	let { src, poster = '', visible = false }: {
		src: string;
		poster?: string;
		visible?: boolean;
	} = $props();

	let videoEl: HTMLVideoElement | undefined = $state();

	$effect(() => {
		if (!videoEl) return;
		if (visible) {
			videoEl.currentTime = 0;
			videoEl.play().catch(() => {});
		} else {
			videoEl.pause();
		}
	});
</script>

<div class="video-container">
	<video
		bind:this={videoEl}
		{src}
		{poster}
		muted
		playsinline
		controls
	>
		<track kind="captions" />
	</video>
	{#if !src}
		<div class="placeholder font-mono">
			<p>Screen recording placeholder</p>
			<p class="hint">Place .mp4/.webm in static/recordings/</p>
		</div>
	{/if}
</div>

<style>
	.video-container {
		width: 100%;
		aspect-ratio: 16 / 9;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 6px;
		overflow: hidden;
		position: relative;
	}

	video {
		width: 100%;
		height: 100%;
		object-fit: contain;
		background: #000;
	}

	.placeholder {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: var(--text-dim);
		font-size: 14px;
		gap: 8px;
	}

	.hint {
		font-size: 11px;
		opacity: 0.5;
	}
</style>
