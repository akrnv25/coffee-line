import { writable } from 'svelte/store';
import type { Coffee } from '$lib/api/coffee/coffee';

export const coffeeItems = writable<Coffee[]>([]);
