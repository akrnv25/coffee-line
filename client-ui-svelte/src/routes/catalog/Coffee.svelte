<script>
  export let coffee;
</script>

<div class="coffee">
  <div class="coffee__source">{coffee.location} ({coffee.country})</div>
  <h5 class="coffee__name">{coffee.blendName}</h5>
  <div class="coffee__extra-data">Variety: {coffee.variety}</div>
  <div class="coffee__extra-data">Intensifier: {coffee.intensifier}</div>
  <div class="coffee__notes">
    {#each coffee.notes as note (note)}
      <div class="coffee__notes-item">{note}</div>
    {/each}
  </div>
</div>

<style>
  .coffee {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .coffee__name {
    margin: 2px 0 4px 0;
    font-size: 16px;
    font-weight: 600;
  }

  .coffee__source {
    margin: 4px 0 2px 0;
    font-size: 14px;
    font-weight: 400;
    font-style: italic;
    color: #908f8f;
  }

  .coffee__extra-data {
    margin: 4px 0 2px 0;
    font-size: 14px;
    font-weight: 400;
  }

  .coffee__notes {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: auto;
    margin: 8px 0 4px 0;
    align-items: center;
    border-radius: 4px;
  }

  .coffee__notes-item {
    padding: 6px 12px;
    background: antiquewhite;
    font-size: 12px;
    line-height: 1;
    margin-right: 6px;
    margin-bottom: 6px;
    white-space: nowrap;
  }

  .coffee__notes-item:last-child {
    margin-right: 0;
  }
</style>
