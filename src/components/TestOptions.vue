<template>
  <div class="test-options">
    <div class="row">
      <div class="option col-4 mb-3" v-bind:key="option.id" v-for="option in options">
        <div class="card" v-on:click="selectOption(option)">
          <div class="card-body">
            {{ option }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestOptions",
  props: ["options"],
  methods: {
    selectOption(option) {
      console.log(option)
    }
  }
}
</script>

<style scoped>
  .card {
    cursor: pointer;
    height: 100%;
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
</style>