import { writable } from 'svelte/store';
import { createNotificationsStore } from '../lib/store-creators/notifications';

export const isLoading = writable(false);
export const notifications = createNotificationsStore();
