
<script>
import NavBar from "./components/NavBar.vue";
import { RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;600&display=swap");
h1,
h2 {
  color: #333;
}
::selection {
  background-color: #41b883;
  color: white;
}
#app {
  font-family: Outfit, Rubik, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>
