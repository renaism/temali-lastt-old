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
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 10px
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
}

.intro-line {
    margin: 20px 0 50px 0;
    width: 100px;
    color: #FFDE58;
    border-width: 10px;
    border-style: solid;
    border-top: none;

}
</style>
