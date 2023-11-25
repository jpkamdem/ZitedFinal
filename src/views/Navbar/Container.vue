<template>
  <nav>
    <HomeContainer />
    <AppContainer />
  </nav>
</template>

<script>
import HomeContainer from "./HomeContainer.vue";
import AppContainer from "./AppContainer.vue";

export default {
  name: "Container",
  components: { HomeContainer, AppContainer }
};
</script>

<style>
nav {
  margin: 1.1% 10px 0 1%;
  width: 7%;
  min-width: 6em;
  height: 95.6%;
}
</style>