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
import TestHeader from '@/components/TestHeader';
import TestOptions from '@/components/TestOptions';
import axios from 'axios';

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
      options: [],
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
    axios.get('http://localhost:8080/options')
      .then(res => this.options = res.data)
      .catch(err => console.log(err));
  }
}
</script>