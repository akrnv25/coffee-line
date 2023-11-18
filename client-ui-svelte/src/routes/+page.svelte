<script>
  import Container from '$lib/components/Container.svelte';
</script>

<Container maxWidth="640px">
  <div class="home">
    <h1 class="home__title">Home page</h1>
    <div>
      {#each [0, 1, 2, 4] as item (item)}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Animi aperiam, architecto asperiores eligendi fugit illo inventore
          laboriosam libero magnam magni minima nam natus quos recusandae repellendus velit
          veritatis voluptatibus voluptatum.
        </p>
      {/each}
    </div>
  </div>
</Container>

<style>
  .home__title {
    color: var(--color-primary);
    font-size: 24px;
    line-height: 1;
    padding: 0;
    margin: 32px 0 16px 0;
  }
</style>
