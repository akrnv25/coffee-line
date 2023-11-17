<script>
  import TagList from '$lib/components/TagList.svelte'

  export let coffee;
</script>

<div class="coffee">
  <div class="coffee__source">{coffee.location} ({coffee.country})</div>
  <h5 class="coffee__name">{coffee.blendName}</h5>
  <div class="coffee__extra-data">Variety: {coffee.variety}</div>
  <div class="coffee__extra-data">Intensifier: {coffee.intensifier}</div>
  <div class="coffee__notes"><TagList items={coffee.notes} /></div>
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
    color: #778FD2;
  }

  .coffee__extra-data {
    margin: 4px 0 2px 0;
    font-size: 14px;
    font-weight: 400;
  }

  .coffee__notes {
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
  }
</style>
