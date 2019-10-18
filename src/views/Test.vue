<template>
  <div class="test">
    <TestHeader :number="number" :type="type" />
    <TestOptions :number="number" :options="options" @sel-opt="selectOption"/>
    <h4 class="mb-3">Terpilih: {{ selectedCount[number] }} / 7</h4>
    <div class="nav-buttons mb-3">
      <router-link v-if="number > 1" :to="'/test/'+(number-1)">
        <button class="btn-lg btn-primary ml-3 mr-3">&lt;&lt; BACK</button> 
      </router-link>
      <router-link v-if="number < 4 && selectedCount[number] > 0" :to="'/test/'+(number+1)">
        <button class="btn-lg btn-primary ml-3 mr-3">NEXT &gt;&gt;</button> 
      </router-link>
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
  props: ["number", "type", "options", "selectedCount"],
  methods: {
    selectOption(id) {
      const data = {
        number: this.number,
        id: id,
      }
      this.$emit('sel-opt', data)
    }
  },
}
</script>