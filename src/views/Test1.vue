<template>
  <div>
    <Test v-bind="{type: type, options: options}" @sel-opt="$emit('sel-opt', $event)" />
  </div>
</template>

<script>
import Test from '@/components/Test.vue'

export default {
  name: 'test1',
  components: {
    Test
  },
  data () {
    return {
      type: 'sangat kamu banget',
    }
  },
  props: ["options"]
}
</script>