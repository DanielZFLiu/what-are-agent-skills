<script lang="ts">
	let { number, label, color = 'var(--cyan)' }: {
		number: string;
		label: string;
		color?: string;
	} = $props();
</script>

<p class="section-tag font-mono" style:color={color}>
	// {number} — {label}
</p>

<style>
	.section-tag {
		font-size: clamp(9px, 1vw, 11px);
		letter-spacing: 3px;
		text-transform: uppercase;
		opacity: 0.7;
		margin-bottom: 12px;
	}
</style>
