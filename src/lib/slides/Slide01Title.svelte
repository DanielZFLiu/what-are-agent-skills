<div class="slide">
	<div class="glow"></div>
	<p class="prompt font-mono"><span class="dollar">$</span> present --topic agent-skills</p>
	<h1 class="font-display">
		What Are<br /><span class="accent">Agent Skills?</span><span class="cursor"></span>
	</h1>
	<p class="subtitle font-body">Teaching your AI assistant new tricks</p>
</div>

<style>
	.slide {
		width: 100%;
		max-width: 900px;
		padding: 0 48px;
		position: relative;
	}

	.glow {
		position: absolute;
		top: -200px;
		right: -100px;
		width: 500px;
		height: 500px;
		background: radial-gradient(circle, rgba(255, 97, 136, 0.06) 0%, transparent 70%);
		pointer-events: none;
	}

	.prompt {
		font-size: clamp(11px, 1.2vw, 14px);
		color: var(--text-dim);
		margin-bottom: 20px;
	}

	.dollar {
		color: var(--green);
	}

	h1 {
		font-size: clamp(36px, 5vw, 64px);
		line-height: 1.1;
		color: var(--text);
	}

	.accent {
		color: var(--pink);
	}

	.subtitle {
		font-size: clamp(14px, 1.5vw, 18px);
		color: var(--text-muted);
		margin-top: 24px;
		font-weight: 300;
		letter-spacing: 0.5px;
	}
</style>
