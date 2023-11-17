<div class="home">
  <div class="home__container">
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
</div>

<style>
  .home {
    width: 100%;
    height: 100%;
  }

  .home__container {
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
    padding: 16px;
  }

  .home__title {
    color: #2A3759;
    font-size: 24px;
    line-height: 1;
    padding: 0;
    margin: 32px 0 16px 0;
  }
</style>
