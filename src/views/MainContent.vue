<template>
  <section id="main-content">
    <div id="zited-container">
      <img src="./../assets/photo.png" alt="zited" />
      <img src="./../assets/title.png" alt="LaVieDartiste" />
    </div>
    <router-link to="/interview">
      <div id="start-btn">
        <div id="arrow"></div>
        <span id="start">Démarrer</span>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "MainContent",
};
</script>

<style>
section#main-content {
  background: linear-gradient(#4297db, #949dad, #816888, #504f7c);
  height: 95%;
  width: 90%;
  border-radius: 20px;
  margin: 1.1% 10px 0 1%;
  flex-flow: column wrap;
}
section#main-content div#main-content {
  width: 100%;
  height: 100%;
  margin: 0 0 0 0;
  display: flex;
}
section#main-content div img[alt="zited"] {
  border-radius: 0 0 0 20px;
  width: 38%;
  margin: 0;
}
section#main-content div img[alt="LaVieDartiste"] {
  width: 50%;
  margin: 0 0 25em 0;
}
div#start-btn {
  position: absolute;
  background: #fbba16;
  border-radius: 50%;
  width: 2%;
  height: 4%;
  right: 30%;
  top: 77%;
  display: flex;
  justify-content: center;
  margin-left: 5em;
}
div#start-btn span {
  position: relative;
  top: -10%;
  left: 120%;
  font-size: 3em;
}
div#start-btn #arrow {
  width: 0;
  height: 0;
  position: relative;
  top: 20%;
  margin-left: 14.5em;
  border-top: 0.8em solid transparent;
  border-bottom: 0.8em solid transparent;
  border-left: 1em solid black;
}
span#start {
  color: #fff;
}
</style>

