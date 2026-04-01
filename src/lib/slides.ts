import type { Component } from 'svelte';
import Slide01Title from './slides/Slide01Title.svelte';
import Slide12Takeaway from './slides/Slide12Takeaway.svelte';

export interface SlideEntry {
	component: Component;
	title: string;
}

export const slides: SlideEntry[] = [
	{ component: Slide01Title, title: 'Title' },
	{ component: Slide12Takeaway, title: 'Takeaway' },
];
