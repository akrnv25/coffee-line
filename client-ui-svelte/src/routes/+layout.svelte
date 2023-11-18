<script>
  import '../normalize.css';
  import { setContext } from 'svelte';
  import ProgressBar from '$lib/components/ProgressBar.svelte';
  import { isLoading, notifications } from './layout.store';
  import NotificationList from '$lib/components/NotificationList.svelte';

  let navItems = [
    { title: 'Home', href: '/' },
    { title: 'Catalog', href: '/catalog' }
  ];
  let container;
  const scrollToBottom = () => container.scroll({ top: container.scrollHeight, behavior: 'smooth' });
  const isScrollAtBottom = () => container.scrollHeight - container.clientHeight === container.scrollTop;
  setContext('layout', { scrollToBottom, isScrollAtBottom });
</script>

<div class="layout">
  {#if $isLoading}<div class="layout__progress-bar"><ProgressBar /></div>{/if}
  <div class="layout__toast">
    <NotificationList notifications={$notifications} />
  </div>
  <div class="layout__header">
    <div class="logo">Dear Svelte</div>
    <nav class="nav">
      {#each navItems as navItem (navItem.href)}
        <a class="nav__item" href={navItem.href}>{navItem.title}</a>
      {/each}
    </nav>
  </div>
  <div class="layout__container" bind:this={container}>
    <slot/>
  </div>
</div>

<style>
  * {
    box-sizing: border-box;
    font-family: Verdana, sans-serif;
    font-size: 16px;
    color: #2A3759;
  }

  .layout {
    position: relative;
    width: 100vw;
    height: 100vh;
  }

  .layout__progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .layout__toast {
    position: absolute;
    top: 56px;
    right: 8px;
  }

  .layout__header {
    height: 48px;
    padding: 8px 32px;
    background: #778FD2;
    display: flex;
    overflow: hidden;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .layout__container {
    width: 100%;
    height: calc(100% - 48px);
    background: #FFFFFF;
    overflow: auto;
  }

  .logo {
    color: #2A3759;
    font-size: 24px;
    font-weight: 600;
    font-family: Georgia, serif;
    font-style: italic;
  }

  .nav {
  }

  .nav__item {
    color: #FFFFFF;
    text-decoration: none;
    display: inline-block;
    margin-right: 16px;
    transition: 0.2s;
  }

  .nav__item:hover {
    color: #2A3759;
  }

  .nav__item:last-child {
    margin-right: 0;
  }
</style>
