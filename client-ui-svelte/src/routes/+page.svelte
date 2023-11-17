<script>
  // todo: check styles import
  import '../normalize.css';
  import { onMount } from 'svelte';
  import { coffeeItems } from './page.store.js';
  import CoffeeCard from '../components/CoffeeCard.svelte';
  import Button from '../components/Button.svelte';

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

<div class="container">
  {#each $coffeeItems as coffee (coffee.id)}
    <CoffeeCard coffee="{coffee}" heightPx="420" widthPx="320" />
  {/each}
  <Button title="+" on:click={fetchCoffee} />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
