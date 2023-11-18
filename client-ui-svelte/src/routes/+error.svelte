<script>
  import Container from '$lib/components/Container.svelte';
</script>

<Container maxWidth="640px" height="100%">
  <div class="not-found">
    <h1 class="not-found__title">404</h1>
    <div><a class="not-found__link" href="/">Home</a></div>
  </div>
</Container>

<style>
  .not-found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .not-found__title {
    color: var(--color-primary);
    font-size: 64px;
    line-height: 1;
    padding: 0;
    margin: 0 0 16px 0;
  }

  .not-found__link {
    color: var(--color-primary);
    transition: 0.2s;
  }

  .not-found__link:hover {
    color: var(--color-secondary);
  }
</style>
