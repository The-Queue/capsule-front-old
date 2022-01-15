<template>
  <div id="app">
    <section v-if="$route.name === 'search'" v-on:click="toQueue" class="logo">
      <img src="./assets/logo.png">
    </section>

    <router-view></router-view>
    <CurrentlyPlaying v-on:click="toQueue" />
  </div>
</template>

<script>
import CurrentlyPlaying from './components/CurrentlyPlaying.vue';

export default {
  name: 'App',

  components: {
    CurrentlyPlaying
  },

  methods: {
    toQueue() {
      return this.$router.push({ name: 'queue' });
    }
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
  padding: 0;
  margin: 0;
  box-sizing: border-box;
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
