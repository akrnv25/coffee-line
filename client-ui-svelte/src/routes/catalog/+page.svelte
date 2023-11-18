<script>
  import { afterUpdate, getContext, onDestroy, onMount } from 'svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';
  import { fade } from 'svelte/transition';
  import Container from '$lib/components/Container.svelte';
  import Button from '$lib/components/Button.svelte';
  import { coffeeCollection } from '$lib/api/coffee/collection';
  import Coffee from './Coffee.svelte';
  import { coffeeItems } from './catalog.store';
  import { isLoading } from '../layout.store';

  const layoutContext = getContext('layout');
  const coffeeGettingTimeout = 30000;
  let coffeeGettingTimeoutId = null;
  let isFirstCoffeeGetting = true;

  onMount(async () => {
    await oneMoreCoffee();
    isFirstCoffeeGetting = false;
  });
  afterUpdate(() => layoutContext.scrollToBottom());
  onDestroy(() => {
    clearCoffeeGettingTimeout();
    coffeeItems.set([]);
  })

  async function oneMoreCoffee() {
    isLoading.set(true);
    clearCoffeeGettingTimeout();
    const id = $coffeeItems.length + 1;
    return coffeeCollection.getById(id)
      .then(res => {
        if (res.error) {
          console.log(res.error);
          isLoading.set(false);
          return;
        }
        coffeeItems.update((coffeeItems) => ([...coffeeItems, res.data]));
        isLoading.set(false);
      })
      .catch(err => {
        console.log(err);
        isLoading.set(false);
      })
      .finally(() => {
        coffeeGettingTimeoutId = setTimeout(oneMoreCoffee, coffeeGettingTimeout);
      });
  }

  function clearCoffeeGettingTimeout() {
    if (coffeeGettingTimeoutId) {
      clearTimeout(coffeeGettingTimeoutId);
      coffeeGettingTimeoutId = null;
    }
  }
</script>

<Container maxWidth="640px">
  <div class="catalog">
    {#if (!$coffeeItems.length && !isFirstCoffeeGetting)}
      <div class="catalog__empty-message" transition:fade>
        Please, click the button to add the first product to the catalog.
      </div>
    {/if}
    {#each $coffeeItems as coffee (coffee.id)}
      <div class="catalog__item" transition:fade>
        <ProductCard image={coffee.image} height="420px" width="320px">
          <Coffee coffee="{coffee}" />
        </ProductCard>
      </div>
    {/each}
    {#if !isFirstCoffeeGetting}
      <div class="catalog__actions" transition:fade>
        <Button title="+" on:click={oneMoreCoffee} disabled={$isLoading} />
      </div>
    {/if}
  </div>
</Container>

<style>
  .catalog {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .catalog__empty-message {
    margin: 8px 0;
  }

  .catalog__item {
    margin: 4px 0;
  }

  .catalog__actions {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 8px 0;
  }
</style>
