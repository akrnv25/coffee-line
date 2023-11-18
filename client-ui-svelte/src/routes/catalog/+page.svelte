<script>
  import { afterUpdate, getContext, onMount } from 'svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';
  import Container from '$lib/components/Container.svelte';
  import Button from '$lib/components/Button.svelte';
  import { coffeeCollection } from '$lib/api/coffee/collection';
  import Coffee from './Coffee.svelte';
  import { coffeeItems } from './catalog.store';
  import { isLoading } from '../layout.store';

  let catalog;
  let layoutContext = getContext('layout');

  onMount(() => oneMoreCoffee());
  afterUpdate(() => layoutContext.scrollToBottom());

  function oneMoreCoffee() {
    isLoading.set(true);
    const id = $coffeeItems.length + 1;
    coffeeCollection.getById(id)
      .then(res => {
        if (res.error) {
          console.log(res.error);
          isLoading.set(false);
          return;
        }
        coffeeItems.update((coffeeItems) => ([...coffeeItems, res.data]));
        isLoading.set(false);
      })
      .catch(error => {
        console.log(error);
        isLoading.set(false);
      });
  }
</script>

<Container maxWidth="640px">
  <div class="catalog">
    {#each $coffeeItems as coffee (coffee.id)}
      <ProductCard image={coffee.image} height="420px" width="320px">
        <Coffee coffee="{coffee}" />
      </ProductCard>
    {/each}
    <div class="catalog__actions">
      <Button title="+" on:click={oneMoreCoffee} disabled={$isLoading} />
    </div>
  </div>
</Container>

<style>
  .catalog {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .catalog__actions {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 16px 0;
  }
</style>
