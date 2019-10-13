<template>
  <div class="test">
    <TestHeader v-bind:type="type" />
    <TestOptions v-bind:options="options" />
  </div>
</template>

<script>
import TestHeader from './TestHeader.vue'
import TestOptions from './TestOptions'

export default {
  name: "Test",
  components: {
    TestHeader,
    TestOptions
  },
  props: ["type", "options"]
}
</script>