<template>
  <Container />
  <div id="sky-bg">
    <div>
      <img src="./../assets/title.png" alt="ZitedMusic" />
    </div>
    <div class="ariane-line">
      <span>Musiques</span>
    </div>
    
  </div>
</template>

<script>
import Container from "./Navbar/Container.vue";

export default {
  name: "Musiques",
  components: { Container },
};
</script>

<style>
div#sky-bg {
  background: linear-gradient(#4297db, #949dad, #816888, #504f7c);
  height: 95%;
  width: 90%;
  border-radius: 20px;
  margin: 1.1% 10px 0 1%;
}
</style>