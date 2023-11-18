<script lang="ts">
  export let maxWidth: string = '100%';
  export let height: string = 'auto';
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
