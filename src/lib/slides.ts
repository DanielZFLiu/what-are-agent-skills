import type { Component } from 'svelte';
import Slide01Title from './slides/Slide01Title.svelte';
import Slide02Problem from './slides/Slide02Problem.svelte';
import Slide03TwoLayers from './slides/Slide03TwoLayers.svelte';
import Slide04TheFix from './slides/Slide04TheFix.svelte';
import Slide05InAction from './slides/Slide05InAction.svelte';
import Slide12Takeaway from './slides/Slide12Takeaway.svelte';

export interface SlideEntry {
	component: Component;
	title: string;
}

export const slides: SlideEntry[] = [
	{ component: Slide01Title, title: 'Title' },
	{ component: Slide02Problem, title: 'The Problem' },
	{ component: Slide03TwoLayers, title: 'Rules vs. Skills' },
	{ component: Slide04TheFix, title: 'The Fix' },
	{ component: Slide05InAction, title: 'See It In Action' },
	{ component: Slide12Takeaway, title: 'Takeaway' },
];
