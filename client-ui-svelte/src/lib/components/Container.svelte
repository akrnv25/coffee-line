<script>
  export let maxWidth = '100%';
  export let height = 'auto';
</script>

<div class="container" style:max-width={maxWidth} style:height >
  <slot/>
</div>

<style>
  .container {
    padding: 16px;
    width: 100%;
    margin: 0 auto;
  }
</style>
