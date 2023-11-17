<script>
  // todo: split component
  export let coffee;
  export let heightPx;
  export let widthPx;
</script>

<div class="product-card" style="height: {heightPx}px; width: {widthPx}px">
  <div class="product-card__container">
    <img src={coffee.image} alt="{coffee.title}" class="product-card__image">
    <div class="product-card__info">
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
    </div>
  </div>
</div>

<style>
  .product-card {
    padding: 8px;
  }

  .product-card__container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2), 0 4px 4px rgba(0,0,0,0.2);
  }

  .product-card__image {
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .product-card__info {
    padding: 8px 16px;
    flex-grow: 1;
  }

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
