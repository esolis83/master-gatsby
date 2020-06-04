<template>
  <v-app id="inspire">
    <v-card class="overflow-hidden" tile>
      <v-app-bar
        absolute
        color="primary"
        dark
        shrink-on-scroll
        prominent
        scroll-target="#scrolling-techniques"
        tile
      >
        <router-link to="/">
          <v-img
            :src="require('./assets/es-logo.svg')"
            class="col logo-img"
            contain
            transition="scale-transition"
            height="150"
          />
        </router-link>

        <v-spacer></v-spacer>

        <v-btn router-link to="/about" text color="secondary">
          <span class="mr-2">About</span>
        </v-btn>
        <v-btn router-link to="/contact" text color="secondary">
          <span class="mr-2">Contact</span>
        </v-btn>
      </v-app-bar>
      
      <v-content>
        <router-view></router-view>
      </v-content>
      <v-sheet
        id="scrolling-techniques"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 1000px;"></v-container>
      </v-sheet>
    </v-card>
    <Hero />
  </v-app>
</template>

<script>
import Hero from "@/components/Hero.vue";
export default {
  
  name: "App",
  components: {
    // HelloWorld
    Hero
  },
  data: () => ({
    //
  })
};
</script>
