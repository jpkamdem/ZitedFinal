<template>
  <div id="home-container">
      <img src="./../../assets/home.png" alt="" class="icon">
  </div>
</template>

<script>
export default {
  name: "HomeContainer",
};
</script>

<style>
  div#home-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 9%;
    background: linear-gradient(#1b1b1b 100%, #100F0F);
    border-radius: 20px;
    margin: 0 0 2em 0;
  }
  div#home-container img.icon {
    height: 80%;
  }
</style>