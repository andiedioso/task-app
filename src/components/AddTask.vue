<template>
  <div id="taskForm">
    <form @submit.prevent="submitData">
      <label for="taskName">Task Name</label>
      <input id="taskName" type="text" v-model="enteredTaskName">
      <button :disabled="isEmpty()"> Add Task </button>
    </form>
    <button @click="clearInput"> Clear </button>
  </div>

</template>

<script>
export default {
name: "AddTask",
 emits: ['add-task'],
  data(){
    return {
      enteredTaskName: '',
      defaultStatus: 'Pending'
    };
  },
  methods: {
    clearInput(){
      this.enteredTaskName = '';
    },
    submitData(){
      this.$emit('add-task', this.enteredTaskName, this.defaultStatus);
      this.enteredTaskName = '';
    },

    //isEmpty could be a computed property
    isEmpty(){
      return this.enteredTaskName==="";
    },
  }
}
</script>

<style scoped>

</style>