<script>
  export let title;
</script>

<button class="button button_primary" on:click>{title}</button>

<style>
  .button {
    display: inline-block;
    outline: 0;
    cursor: pointer;
    text-align: center;
    border: 0;
    padding: 8px 16px;
    min-height: 36px;
    min-width: 36px;
    border-radius: 4px;
    font-weight: 600;
    font-size: 14px;
    transition: background-color 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s;
    box-shadow: 0 0.6px 1.2px rgba(0, 0, 0, 0.2), 0 1.2px 1.2px rgba(0, 0, 0, 0.2);
  }

  .button_primary {
    color: #ffffff;
    background: #2A3759;
  }

  .button_primary:hover {
    background: #778FD2;
  }
</style>
