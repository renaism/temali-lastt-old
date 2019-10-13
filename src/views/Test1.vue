<template>
  <div>
    <Test v-bind="{type: type, options: options}"/>
  </div>
</template>

<script>
import Test from '@/components/Test.vue'

export default {
  name: 'home',
  components: {
    Test
  },
  data () {
    return {
      type: 'sangat kamu banget',
      options: [
        "Senang bersahabat dan membangun jaringan dengan klien",
        "Teratur, rapi, segala sesuatunya harus direncanakan",
        "Suka menganalisis data dan angka. Lebih percaya asumsi jika ada datanya",
        "Suka mengatur penempatan atau penugasan orang",
        "Dapat merasakan perasaan orang lain tanpa orang tersebut memberitahu",
        "Berani menghadapi orang empat mata, keras kepala, berani mengambil alih situasi",
        "Senang mengkomunikasikan sesuatu dengan cara yang mudah dimengerti",
        "Punya banyak imajinasi dan ide baik modifikasi dari yang lama maupun baru sama sekali",
        "Dapat menterjemahkan ide menjadi sebuah rancangan berkonsep",
        "Selalu berpikir 'pasti ada jalan atau cara yang lebih baik' dan seringkali menemukannya",
        "Selalu ingin memajukan orang lain dan senang melihat kemajuan orang",
        "Teliti, suka mengumpulkan dan mempelajari informasi terkait nilai, mutu, kepentingan, dan kondisi",
        "Senang mempelajari latar belakang sesuatu, mengolah pikiran, dan menyendiri",
        "Senang menjelaskan arti atau makna dari sesuatu",
        "Suka mengumpulkan dan menyusun informasi secara teratur untuk dipublikasikan",
        "Senang merencanakan strategi agar sesuatu dapat diketahui sekumpulan orang",
        "Berusaha mencari titik tengah dan mengusahakan perdamaian dalam konflik",
        "Senang memberi semangat kepada orang lain"
      ]
    }
  }
}
</script>