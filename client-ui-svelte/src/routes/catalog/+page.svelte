<script>
  import { onMount } from 'svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';
  import Container from '$lib/components/Container.svelte';
  import Button from '$lib/components/Button.svelte';
  import Coffee from './Coffee.svelte';
  import { coffeeItems } from './store';

  onMount(() => {
    fetchCoffee();
  });

  function fetchCoffee() {
    const id = $coffeeItems.length + 1;
    fetch(`http://localhost:3200/api/coffee/${id}`)
      .then(response => response.json())
      .then(coffee => {
        coffeeItems.update((coffeeItems) => ([...coffeeItems, coffee]));
      })
      .catch(error => {
        console.log(error);
      });
  }
</script>

<Container maxWidth="640px">
  <div class="catalog">
    {#each $coffeeItems as coffee (coffee.id)}
      <ProductCard image={coffee.image} height="420px" width="320px">
        <Coffee coffee="{coffee}"></Coffee>
      </ProductCard>
    {/each}
    <Button title="+" on:click={fetchCoffee} />
  </div>
</Container>

<style>
  .catalog {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
