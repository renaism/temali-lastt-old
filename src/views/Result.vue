<template>
  <div>
    <p>
        {{ selectedOptions }}
        Hehe
    </p>
    <router-link to="/test">
      <button class="btn-lg btn-primary">LAGI</button> 
    </router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Result',
  props: ['selectedOptions'],
  components: {
    
  },
  created () {
    axios.post('http://localhost:8080/result', {
      selectedOptions: this.selectedOptions
    })
    .then(res => {
        console.log(res.data);
    })
    .catch(err => console.log(err));
  }
}
</script>
