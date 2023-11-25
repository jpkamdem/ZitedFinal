<template>
  <Container />
  <div id="sky-bg">
    <div>
      <img src="./../assets/title.png" alt="ZitedTxt" />
      <div id="video-container">
        <video autoplay @ended="showVideoList">
          <source src="./../assets/video.mp4" type="video/mp4" />
        </video>
        <ul v-if="showList">
          <li class='btn-list'>Parcours</li>
          <li class='btn-list'>Univers</li>
          <li class='btn-list'>Musiques</li>
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
      showList: false,
    };
  },
  methods: {
    showVideoList() {
      this.showList = !this.showList
    }
  }
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
  width: 65%;
  height: 30%;
  border-radius: 20px;
}
div#video-container {
  height: 90%;
  margin-top: 5%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
li.btn-list{
  margin: 20% 0 0 0;
  font-size: 4em;
  list-style-type: square;
}
li.btn-list:hover {
  color: #fbba16;
  font-size: 4.1em;
  transition: all .1s ease-in-out;
}
</style>