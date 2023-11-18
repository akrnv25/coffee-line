<script lang="ts">
  import { lazyLoad } from '$lib/actions/lazy-load';

  export let height: string;
  export let width: string;
  export let image: { src: string; alt: string; };
</script>

<div class="product-card" style:height style:width>
  <div class="product-card__container">
    <img
      use:lazyLoad={image?.src || ''} alt={image?.alt || ''}
      class="product-card__image"
    >
    <div class="product-card__content">
      <slot/>
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
    box-shadow: 0 2px 4px var(--color-dark-shadow), 0 4px 4px var(--color-dark-shadow);
  }

  .product-card__image {
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .product-card__content {
    padding: 8px 16px;
    flex-grow: 1;
  }
</style>
