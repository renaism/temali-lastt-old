<template>
  <div id="app">
    <Header />
    <div class="container mb-5">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  components: {
    Header
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 10px
}
</style>
