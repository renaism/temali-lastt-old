<template>
  <div class="test">
    <TestHeader :number="number" :type="type[number]" />
    <TestOptions v-if="options.length > 0" :number="number" :options="options" @sel-opt="selectOption"/>
    <Loading v-else/>
    <h4 class="mb-3">Terpilih: {{ selectedCount[number] }} / {{ maxSelect }}</h4>
    <div class="nav-buttons mb-3">
      <button v-if="number > 1" @click="previousPage()" class="btn-lg btn-primary ml-3 mr-3">&lt;&lt; BACK</button> 
      <button v-if="number < 4 && selectedCount[number] >= minSelect" @click="nextPage()" class="btn-lg btn-primary ml-3 mr-3">NEXT &gt;&gt;</button> 
      <button v-else-if="selectedCount[number] >= minSelect" @click="submit" class="btn-lg btn-primary bg-success ml-3 mr-3">FINISH</button> 
    </div>
    <p v-if="selectedCount[number] < minSelect">Pilih minimal 5</p>
  </div>
</template>

<script>
import TestHeader from '@/components/TestHeader';
import TestOptions from '@/components/TestOptions';
import Loading from '@/components/Loading';
import axios from 'axios';
import axiosRetry from 'axios-retry';

export default {
  name: "Test",
  components: {
    TestHeader,
    TestOptions,
    Loading
  },
  data () {
    return {
      number: 1,
      type: ["", "sangat kamu banget", "lumayan kamu banget", "sangat nggak kamu banget", "lumayan nggak kamu banget"],
      options: [],
      selectedCount: {1: 0, 2: 0, 3: 0, 4: 0},
      minSelect: 5,
      maxSelect: 7
    }
  },
  methods: {
    selectOption(id) {
      const option = this.options.find(opt => opt.id === id)
      if (option.selected === 0 && this.selectedCount[this.number] < this.maxSelect) {
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
        window.scrollTo(0,0);
      }
    },
    previousPage() {
      if (this.number > 1) {
        this.number--;
        window.scrollTo(0,0);
      }
    },
    submit() {
      let sel = {1: [], 2: [], 3: [], 4: []};
      this.options.filter(opt => opt.selected != 0).forEach(opt => {
        sel[opt.selected].push(opt.id)
      });
      this.$router.push({name: 'result', params: {selectedOptions: sel}})
    }
  },
  created() {
    document.title = 'Test | Temali Light Assessment'
    axiosRetry(axios, {
      retries: 5,
      retryDelay: axiosRetry.exponentialDelay
    });
    axios.get('http://localhost:8080/options')
      .then(res => {
        this.options = res.data;
        this.options.forEach(opt => this.$set(opt, 'selected', 0));
      })
      .catch(err => console.log(err));
  }
}
</script>