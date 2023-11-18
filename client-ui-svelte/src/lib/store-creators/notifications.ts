import { NotificationEvent } from '$lib/enums/notification-event';
import type { Notification } from '$lib/interfaces/notification';
import type { NotificationsState } from '$lib/interfaces/notifications-state';
import { writable, derived } from 'svelte/store';

export function createNotificationsStore () {
  const timeout = 4000;
  const state = writable<NotificationsState>({ items: [], event: null });
  function send(text: string) {
    state.update((s: NotificationsState) => {
      const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
      return { items: [...s.items, { text, id }], event: NotificationEvent.MOUNTED }
    });
  }
  const { subscribe } = derived(state, ($state, set: (value: Notification[]) => void) => {
    set($state.items);
    if ($state.event === NotificationEvent.MOUNTED) {
      setTimeout(() => {
        state.update((s: NotificationsState) => {
          return { items: s.items.slice(1, s.items.length), event: NotificationEvent.DESTROYED };
        })
      }, timeout);
    }
  })
  return { subscribe, send };
}
