<template>
  <Container />
  <div id="sky-bg">
    <div>
      <img src="./../assets/title.png" alt="ZitedTxt" />
      <div id="video-container">
        <video autoplay>
          <source src="./../assets/video.mp4" type="video/mp4" />
        </video>
        <ul v-if="showList">
          <router-link to="/parcours">
            <li class="btn-list">Parcours</li>
          </router-link>

          <router-link to="/musiques">
            <li class="btn-list">Musiques</li>
          </router-link>

          <router-link to="/univers">
            <li class="btn-list
            ">Univers</li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Container from "./Navbar/Container.vue";

export default {
  name: "Interview",
  components: { Container },
  data() {
    return {
      showList: true,
    };
  },
  methods: {
    showVideoList() {
      this.showList = !this.showList;
    },
  },
};
</script>

<style>
div#sky-bg {
  background: linear-gradient(#4297db, #949dad, #816888, #504f7c);
  height: 95%;
  width: 90%;
  border-radius: 20px;
  margin: 1.1% 10px 0 1%;
  flex-flow: column wrap;
}
div[id="sky-bg"] img[alt="ZitedTxt"] {
  height: 19.4%;
  margin-left: 5%;
}
div video[autoplay] {
  width: 75%;
  border-radius: 20px;
}
div#video-container {
  height: 90%;
  margin-top: 5%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
li.btn-list {
  margin: 20% 0 0 0;
  font-size: 3.5em;
  list-style-type: square;
}
li.btn-list:hover {
  color: #fbba16;
  font-size: 3.6em;
  transition: all 0.1s ease-in-out;
}
</style>