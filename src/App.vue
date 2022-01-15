<template>
  <div id="app">
    <section class="logo">
      <img src="./assets/logo.png">
    </section>

    <Search />
    <CurrentlyPlaying />
  </div>
</template>

<script>
import CurrentlyPlaying from './components/CurrentlyPlaying.vue';
import Search from './components/Search';

export default {
  name: 'App',
  components: {
    Search,
    CurrentlyPlaying
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background: #2D3748;
}

section.logo > img {
  width: 40%;
  height: 40%;
}

section.search {
  margin-top: 30px;
}
</style>
