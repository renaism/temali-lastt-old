<template>
  <div class="test">
    <TestHeader :type="type" />
    <TestOptions :options="options" @sel-opt="$emit('sel-opt', $event)"/>
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