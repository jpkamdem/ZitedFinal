<template>
  <div id="app-container">
    <div class="burger">
      <label class="burger" for="burger">
        <input type="checkbox" id="burger" />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
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
div.burger {
  height: 10%;
  position: relative;
  width: 40px;
  height: 30px;
  background: transparent;
  cursor: pointer;
  display: block;
}

.burger input {
  display: none;
}

.burger span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: white;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

.burger span:nth-of-type(1) {
  top: 0px;
  transform-origin: left center;
}

.burger span:nth-of-type(2) {
  top: 50%;
  transform: translateY(-50%);
  transform-origin: left center;
}

.burger span:nth-of-type(3) {
  top: 100%;
  transform-origin: left center;
  transform: translateY(-100%);
}

.burger input:checked ~ span:nth-of-type(1) {
  transform: rotate(45deg);
  top: 0px;
  left: 5px;
}

.burger input:checked ~ span:nth-of-type(2) {
  width: 0%;
  opacity: 0;
}

.burger input:checked ~ span:nth-of-type(3) {
  transform: rotate(-45deg);
  top: 28px;
  left: 5px;
}

div#icons-container {
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
}
div#icons-container a img {
  height: 3em;
}
</style>
