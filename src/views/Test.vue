<template>
  <div class="test">
    <TestHeader :number="number" :type="type[number]" />
    <TestOptions :number="number" :options="options" @sel-opt="selectOption"/>
    <h4 class="mb-3">Terpilih: {{ selectedCount[number] }} / 7</h4>
    <div class="nav-buttons mb-3">
      <button v-if="number > 1" @click="previousPage()" class="btn-lg btn-primary ml-3 mr-3">&lt;&lt; BACK</button> 
      <button v-if="number < 4 && selectedCount[number] > 0" @click="nextPage()" class="btn-lg btn-primary ml-3 mr-3">NEXT &gt;&gt;</button> 
      <router-link v-else-if="selectedCount[number] > 0" :to="'/'" replace>
        <button class="btn-lg btn-primary ml-3 mr-3">FINISH</button> 
      </router-link>
    </div>
    <p v-if="selectedCount[number] < 1">Pilih minimal 5</p>
  </div>
</template>

<script>
import TestHeader from '@/components/TestHeader'
import TestOptions from '@/components/TestOptions'

export default {
  name: "Test",
  components: {
    TestHeader,
    TestOptions
  },
  data () {
    return {
      number: 1,
      type: ["", "sangat kamu banget", "lumayan kamu banget", "sangat nggak kamu banget", "lumayan nggak kamu banget"],
      options: [
        {
          label: "Senang bersahabat dan membangun jaringan dengan klien",
          trait: "AMB", selected: 0
        },
        {
          label: "Teratur, rapi, segala sesuatunya harus direncanakan",
          trait: "ADM", selected: 0
        },
        {
          label: "Suka menganalisis data dan angka. Lebih percaya asumsi jika ada datanya",
          trait: "ANA", selected: 0
        },
        {
          label: "Suka mengatur penempatan atau penugasan orang",
          trait: "ARA", selected: 0
        },
        {
          label: "Dapat merasakan perasaan orang lain tanpa orang tersebut memberitahu",
          trait: "CAR", selected: 0
        },
        {
          label: "Berani menghadapi orang empat mata, keras kepala, berani mengambil alih situasi",
          trait: "CMD", selected: 0
        },
      ],
      selectedCount: {1: 0, 2: 0, 3: 0, 4: 0}
    }
  },
  methods: {
    selectOption(id) {
      const option = this.options.find(opt => opt.id === id)
      if (option.selected === 0 && this.selectedCount[this.number] < 3) {
        option.selected = this.number;
        this.selectedCount[this.number]++;
      }
      else if (option.selected !== 0) {
        option.selected = 0;
        this.selectedCount[this.number]--;
      }
    },
    nextPage() {
      if (this.number < 4) {
        this.number++;
      }
    },
    previousPage() {
      if (this.number > 1) {
        this.number--;
      }
    }
  },
  created() {
    let id = 0
    for (const option of this.options) {
      option["id"] = id++;
    }
  }
}
</script>