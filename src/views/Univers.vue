<template>
  <Container />
  <div id="sky-bg">
    <div>
      <img src="./../assets/title.png" alt="ZitedMusic" />
    </div>
    <div class="ariane-line">
      <span>Univers</span>
    </div>

    <section id="grid-garden">
      <div class="one">1</div>
      <div class="two">2</div>
      <div class="three">3</div>
      <div class="four">4</div>
      <div class="five">5</div>
      <div class="six">6</div>
      <div class="seven">7</div>
      <div class="eight">8</div>
      <div class="nine">9</div>
      <div class="ten">10</div>
      <div class="eleven">11</div>
      <div class="twelve">12</div>
    </section>
      <article id="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quod laudantium culpa ex blanditiis illum, veritatis, vitae nostrum fuga consequuntur, itaque numquam nulla minus at quos mollitia pariatur recusandae corporis ab. Qui voluptatibus eligendi possimus tempore delectus optio libero modi itaque sed eveniet iure nemo magnam, atque alias. Excepturi, officiis tenetur. Asperiores esse dolores alias eos reiciendis perspiciatis dolorum molestiae, fugiat similique harum dignissimos atque commodi, temporibus voluptate sunt ab modi. Eum provident harum modi repudiandae.
      </article>
  </div>
</template>

<style>
div#sky-bg {
  background: linear-gradient(#4297db, #949dad, #816888, #504f7c);
  height: 95%;
  width: 90%;
  border-radius: 20px;
  margin: 1.1% 10px 0 1%;
  overflow-y: scroll;
}
section#grid-garden {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(9, 100px);
  grid-gap: 1em;
  max-width: 960px;
  margin: 5% auto;
  padding: 0 3%;
  text-align: center;
}

section#grid-garden div {
  background: #3bbced;
  padding: 2em;
}

section#grid-garden div:nth-child(even) {
  background: #777;
}

.one {
  grid-column: 1 / 4;
  grid-row: 1 / 3;
}
.two {
  grid-column: 4 / 6;
  grid-row: 1 / 3;
}
.three {
  grid-column: 6 / 8;
  grid-row: 1 / 6;
}
.four {
  grid-column: 4 / 6;
  grid-row: 3 / 4;
}
.five {
  grid-column: 1 / 4;
  grid-row: 3 / 4;
}
.six {
  grid-column: 1 / 6;
  grid-row: 4 / 5;
}
.seven {
  grid-column: 1 / 3;
  grid-row: 5 / 7;
}
.eight {
  grid-column: 3 / 5;
  grid-row: 5 / 7;
}
.nine {
  grid-column: 5 / 6;
  grid-row: 5 / 6;
}
.ten {
  grid-column: 5 / 8;
  grid-row: 6 / 7;
}
.eleven {
  grid-column: 7 / 8;
  grid-row: 7 / 10;
}
.twelve {
  grid-column: 1 / 7;
  grid-row: 7 / 10;
}
article#text {
  margin: 1% 19%;
  font-size: 1.3em;
  line-height: 1.7em;
  text-align: justify;
}
</style>

<script>
import Container from "./Navbar/Container.vue";

export default {
  name: "Univers",
  components: { Container },
};
</script>