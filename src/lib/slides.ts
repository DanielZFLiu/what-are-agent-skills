import type { Component } from 'svelte';
import Slide01Title from './slides/Slide01Title.svelte';
import Slide02Problem from './slides/Slide02Problem.svelte';
import Slide03TwoLayers from './slides/Slide03TwoLayers.svelte';
import Slide04TheFix from './slides/Slide04TheFix.svelte';
import Slide05InAction from './slides/Slide05InAction.svelte';
import Slide06Anatomy from './slides/Slide06Anatomy.svelte';
import Slide07Invocation from './slides/Slide07Invocation.svelte';
import Slide08WriteYourOwn from './slides/Slide08WriteYourOwn.svelte';
import Slide09WhereToPutIt from './slides/Slide09WhereToPutIt.svelte';
import Slide10Adoption from './slides/Slide10Adoption.svelte';
import Slide11Takeaway from './slides/Slide11Takeaway.svelte';

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
	{ component: Slide06Anatomy, title: 'Anatomy' },
	{ component: Slide07Invocation, title: 'Progressive Disclosure' },
	{ component: Slide08WriteYourOwn, title: 'Write Your Own' },
	{ component: Slide09WhereToPutIt, title: 'Where to Put It' },
	{ component: Slide10Adoption, title: 'One Standard, Many Tools' },
	{ component: Slide11Takeaway, title: 'Takeaway' },
];
