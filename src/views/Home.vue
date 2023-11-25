<template>
  <Container />
  <MainContent />
</template>

<script>
import Container from "./Navbar/Container.vue";
import MainContent from "./MainContent.vue";

export default {
  name: "Home",
  components: { Container, MainContent },
};
</script>
