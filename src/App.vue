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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 10px
}
</style>
