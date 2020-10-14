<template>
  <div id="taskEditForm">
    <form>
      <input
          id="taskName"
          type="text"
          v-model="enteredTaskName">
      <button
          @click.prevent="submitData"
          class="btn btn-light"
          :disabled="isEmpty"> Add</button>
      <button
          class="btn btn-light"
          @click.prevent="clearInput"> Clear </button>
    </form>
    <p>{{enteredTaskName}}</p>
  </div>
</template>

<script>
export default {
name: "EditTask"
}
</script>

<style scoped>

</style>