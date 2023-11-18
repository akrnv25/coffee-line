<script lang="ts">
  export let top: number = 0;
</script>

<div class="progress-bar progress-bar_primary" style:top>
  <div class="progress-bar__value"></div>
</div>

<style>
  .progress-bar {
    overflow: hidden;
    height: 2px;
    width: 100%;
    z-index: 1000;
  }

  .progress-bar__value {
     width: 100%;
     height: 100%;
     animation: indeterminateAnimation 1s infinite ease-in;
     transform-origin: 0 50%;
   }

  .progress-bar_primary {
    background: var(--color-secondary);
  }
  .progress-bar_primary .progress-bar__value {
    background: var(--color-primary);
  }

  @keyframes indeterminateAnimation {
    0% {
      transform:  translateX(0) scaleX(0);
    }
    40% {
      transform:  translateX(0) scaleX(0.4);
    }
    100% {
      transform:  translateX(100%) scaleX(0.6);
    }
  }
</style>
