<template>
  <v-app id="inspire">
    <Hero />
  </v-app>
</template>


<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Hero from "@/components/Hero.vue";

export default {
  title: "Enrique Solis Portfolio - Home",
  name: "Home",
  components: {
    // HelloWorld
    Hero
  }
};
</script>
