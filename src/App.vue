<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <div class="container">
      <router-view v-bind:options="options" v-on:sel-opt="selectOption"/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        {
          label: "Senang bersahabat dan membangun jaringan dengan klien",
          trait: "AMB",
          selected: 0
        },
        {
          label: "Teratur, rapi, segala sesuatunya harus direncanakan",
          trait: "ADM",
          selected: 0
        },
        {
          label: "Suka menganalisis data dan angka. Lebih percaya asumsi jika ada datanya",
          trait: "ANA",
          selected: 0
        },
      ]
      //   "Suka mengatur penempatan atau penugasan orang",
      //   "Dapat merasakan perasaan orang lain tanpa orang tersebut memberitahu",
      //   "Berani menghadapi orang empat mata, keras kepala, berani mengambil alih situasi",
      //   "Senang mengkomunikasikan sesuatu dengan cara yang mudah dimengerti",
      //   "Punya banyak imajinasi dan ide baik modifikasi dari yang lama maupun baru sama sekali",
      //   "Dapat menterjemahkan ide menjadi sebuah rancangan berkonsep",
      //   "Selalu berpikir 'pasti ada jalan atau cara yang lebih baik' dan seringkali menemukannya",
      //   "Selalu ingin memajukan orang lain dan senang melihat kemajuan orang",
      //   "Teliti, suka mengumpulkan dan mempelajari informasi terkait nilai, mutu, kepentingan, dan kondisi",
      //   "Senang mempelajari latar belakang sesuatu, mengolah pikiran, dan menyendiri",
      //   "Senang menjelaskan arti atau makna dari sesuatu",
      //   "Suka mengumpulkan dan menyusun informasi secara teratur untuk dipublikasikan",
      //   "Senang merencanakan strategi agar sesuatu dapat diketahui sekumpulan orang",
      //   "Berusaha mencari titik tengah dan mengusahakan perdamaian dalam konflik",
      //   "Senang memberi semangat kepada orang lain"
      // ]
    }
  },
  methods: {
    selectOption(idx) {
      let current = this.options[idx].selected;
      this.options[idx].selected = current === 0 ? 1 : 0;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
