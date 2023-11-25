<template>
  <div id="app-container">
    <div id="burger-menu"></div>
    <div id="icons-container">
      <a :href="spotify" target="_blank"
        ><img src="./../../assets/spotify.png" alt="ArtistLink" class="icon"
      /></a>
      <a :href="ytb" target="_blank"
        ><img src="./../../assets/youtube.png" alt="ArtistLink" class="icon"
      /></a>
      <a :href="ig" target="_blank"
        ><img src="./../../assets/instagram.png" alt="ArtistLink" class="icon"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppContainer",
  data() {
    return {
      ig: "https://www.instagram.com/zzited/",
      ytb: "https://www.youtube.com/@zzitedd",
      spotify:
        "https://open.spotify.com/intl-fr/artist/1GvRoYvF2CUlTiViXRBDE1?si=XhElRf-7RsGS_slu792ZKg",
    };
  },
};
</script>

<style>
div#app-container {
  background: linear-gradient(#1b1b1b, #141414);
  height: calc(100% - 9% - 2em);
  border-radius: 20px;
}
div#burger-menu {
  height: 10%;
  background: red;
}
div#icons-container {
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
}
div#icons-container img {
  height: 50%;
}
div#icons-container a img {
  height: 4em;
}
</style>