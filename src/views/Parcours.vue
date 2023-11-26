<template>
  <Container />
  <div id="sky-bg">
    <div>
      <img src="./../assets/title.png" alt="ZitedMusic" />
    </div>
    <div class="ariane-line">
      <span>Parcours</span>
    </div>
    <section id="parcours-content"> 
      <h1>Title</h1>
      <h2>Lorem Ipsum.</h2>
      <p>Ut ipsam consequatur expedita fugiat omnis laudantium neque facilis facere earum odit quasi debitis ad cupiditate dignissimos velit dolorem adipisci aspernatur quos, provident aut explicabo exercitationem! Sunt expedita tempore repudiandae nemo, doloremque magnam quibusdam nulla distinctio at quas. Doloribus neque sapiente non provident culpa quo vel dolorem quae animi facilis sunt ratione enim deleniti doloremque est, sint, ad iure quibusdam? Quae rerum sint doloremque explicabo nisi aliquid sit tempora dolorem quasi, tempore ea vitae dicta est repudiandae vel facilis ipsa tenetur doloribus, quos, veritatis minus. Consectetur, iusto quis obcaecati amet ut nihil.</p>
      <p>Consequatur aliquam natus, fugiat incidunt quas dolor itaque voluptas aliquid repellendus molestiae laborum quidem iste minima veniam doloribus facilis. Quas incidunt saepe numquam officiis, aliquid explicabo ab ad cupiditate vel neque quisquam excepturi. Repudiandae itaque dignissimos, reprehenderit quia rerum tempora quas facilis vero, dicta temporibus fuga culpa perferendis iste, cupiditate nobis? Animi autem enim fugit itaque dolores eligendi labore non provident, aliquam asperiores. Omnis est illo eum distinctio ipsam ex quas officiis laboriosam maxime ipsa ad, aliquam aut similique perferendis earum, ipsum totam accusamus veritatis. Eos iste aspernatur ut voluptatibus eaque blanditiis.</p>
      <div class="content-flex-layout">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi neque accusamus ipsum suscipit reprehenderit. Placeat ipsam tempore iste ex similique rem quaerat commodi ad fugiat libero. Magni dicta eos quibusdam necessitatibus! Inventore accusantium nisi aperiam harum quaerat blanditiis fugiat quod libero architecto modi laborum cumque nobis totam, impedit beatae unde? Modi, ipsum. Maxime, provident sunt blanditiis quas minus minima sint unde fugiat rerum illo hic quae aperiam necessitatibus.</p>
        <img src="../assets/photo.png" alt="">
      </div>
    </section>
  </div>
</template>

<script>
import Container from "./Navbar/Container.vue";

export default {
  name: "Parcours",
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
img[alt="ZitedMusic"] {
  height: 17.9%;
  margin: 1% 0 0 5%;
}
div.ariane-line {
  width: 90%;
  height: 20px;
  margin-left: 5%;
  border-bottom: 1px solid black;
  text-align: center
}
div.ariane-line span {
  font-size: 1.3vw;
  font-weight: bolder;
  background: linear-gradient(#C8C8C8, #6D6D6D);
  padding: 1vw 1.8vw;
}

section#parcours-content {
  height: 67%;
  width: 70%;
  margin: 5% auto;
  padding: 0 3%;
  overflow-y: scroll;
}

section#parcours-content p {
  font-size: 1.3em;
  line-height: 1.7em;
  text-align: justify;
}
div.content-flex-layout {
  display: flex;
  align-items: center;
}
div.content-flex-layout img {
  border-radius: 10px;
}
</style>