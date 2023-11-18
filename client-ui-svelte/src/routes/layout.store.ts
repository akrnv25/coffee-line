import { writable } from 'svelte/store';
import { createNotificationsStore } from '../lib/stores/notifications';

export const isLoading = writable(false);
export const notifications = createNotificationsStore();
