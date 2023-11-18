import { writable, derived } from "svelte/store"

export function createNotificationsStore () {
  const timeout = 4000;
  const state = writable<{ items: any[], event: any }>({ items: [], event: null });
  function send(text) {
    state.update(s => {
      const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
      return { items: [...s.items, { text, id }], event: 'mounted' }
    });
  }
  const { subscribe } = derived(state, ($state, set) => {
    set($state.items);
    if ($state.event === 'mounted') {
      setTimeout(() => {
        state.update(s => {
          return { items: s.items.slice(1, s.items.length), event: 'destroyed' };
        })
      }, timeout);
    }
  })
  return { subscribe, send };
}
