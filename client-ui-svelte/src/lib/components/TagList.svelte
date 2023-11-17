<script>
  export let items = [];
</script>

<div class="tag-list">
  {#each items as item (item)}
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
    background: antiquewhite;
    font-size: 12px;
    line-height: 1;
    margin-right: 6px;
    margin-bottom: 6px;
    white-space: nowrap;
    border-radius: 4px;
  }

  .tag-list__item_primary {
    color: #ffffff;
    background: #2A3759;
  }

  .tag-list__item:last-child {
    margin-right: 0;
  }
</style>
