<script>
  import { fly } from 'svelte/transition';
  import { flip } from "svelte/animate";

  export let notifications = [];
</script>

<div class="notification-list">
  {#each notifications as notification (notification.id)}
    <div
      class="notification-list__item"
      animate:flip
      transition:fly={{ y: 200 }}
    >{notification.text}</div>
  {/each}
</div>

<style>
  .notification-list {
    display: flex;
    flex-direction: column;
  }
  .notification-list__item {
    width: 200px;
    padding: 8px;
    border-radius: 4px;
    background: #2A3759;
    color: #FFFFFF;
    opacity: 0.4;
    font-size: 12px;
    margin-bottom: 4px;
  }

  .notification-list__item:last-child {
    margin-bottom: 0;
  }
</style>
