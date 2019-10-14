<template>
  <div class="test-options">
    <div class="row">
      <div class="option col-4 mb-3" :key="option.id" v-for="(option, idx) in options">
        <div class="card" @click="$emit('sel-opt', idx)" :class="{selected: option.selected !== 0}">
          <div class="card-body">
            {{ option.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestOptions",
  props: ["options"]
}
</script>

<style scoped>
  .card {
    cursor: pointer;
    height: 100%;
    border-width: 5px;
    border-color: rgba(0, 0, 0, 0);
  }

  .option:nth-child(odd) .card {
    background-color: #51A5A8;
    color: #FFF;
  }

  .option:nth-child(even) .card {
    background-color: #FFE06B;
    color: #000;
  }

  .option:nth-child(odd) .card:hover {
    background-color: #3A7C80;
  }

  .option:nth-child(even) .card:hover {
    background-color: #DBBA3B;
  }

  .option .selected {
    border-color: #333;
    border-style: solid;
  }
</style>