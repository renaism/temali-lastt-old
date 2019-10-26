<template>
  <div id="result">
    <h1 class="text-center mb-5">Hasil Light Assessment</h1>
    <h3>Peran-Peran Kuat</h3>
    <hr>
    <div v-if="Object.keys(result).length > 0">
      <div class="row">
        <div class="col-6 mb-3" :key="item.id" v-for="item in result['very_fit']">
          <h5 class="mb-3">{{ item.result }}</h5>
          <p class="text-justify">{{ item.exp_pos}}</p>
        </div>
      </div>
      <h3 class="mt-5">Peran-Peran Lemah</h3>
      <hr>
      <div class="row">
        <div class="col-4 mb-3" :key="item.id" v-for="item in result['very_not_fit']">
          <h5>{{ item.result }}</h5>
          <p>{{ item.exp_pos}}</p>
        </div>
      </div>
      <button class="btn-lg btn-success d-block mx-auto my-3">Download PDF</button> 
    </div>
    <Loading v-else/>
    <router-link to="/test">
      <button class="btn-lg btn-primary d-block mx-auto my-3">Test Lagi</button> 
    </router-link>
  </div>
</template>

<script>
import Loading from '@/components/Loading';
import axios from 'axios';
import axiosRetry from 'axios-retry';

export default {
  name: 'Result',
  props: ['selectedOptions'],
  components: {
    Loading
  },
  data () {
    return {
      result: {}
    }
  },
  created () {
    document.title = 'Result | Temali Light Assessment'
    axiosRetry(axios, {
      retries: 5,
      retryDelay: axiosRetry.exponentialDelay
    });
    axios.post('http://localhost:8080/result', {
      selectedOptions: this.selectedOptions
    })
    .then(res => {
        this.result = res.data;
    })
    .catch(err => console.log(err));
  }
}
</script>

<style scoped>
#result {
  text-align: left;
}

h1, h3, h5 {
  font-weight: bold;
}

#result p {
  white-space: pre-line;
}
</style>