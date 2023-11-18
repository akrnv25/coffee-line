<script lang="ts">
  export let items: string[] = [];
</script>

<div class="tag-list">
  {#each items as item}
    <div class="tag-list__item tag-list__item_primary">{item}</div>
  {/each}
</div>

<style>
  .tag-list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: auto;
    padding-bottom: 16px;
  }

  .tag-list__item {
    padding: 6px 12px;
    font-size: 12px;
    line-height: 1;
    margin-right: 6px;
    margin-bottom: 6px;
    white-space: nowrap;
    border-radius: 4px;
  }

  .tag-list__item_primary {
    color: var(--color-white);
    background: var(--color-primary);
  }

  .tag-list__item:last-child {
    margin-right: 0;
  }
</style>
