import type { Component } from 'svelte';
import Slide01Title from './slides/Slide01Title.svelte';

export interface SlideEntry {
	component: Component;
	title: string;
}

export const slides: SlideEntry[] = [
	{ component: Slide01Title, title: 'Title' },
];
