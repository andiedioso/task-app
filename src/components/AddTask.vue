<template>
  <form @submit.prevent="submitData">
    <label>Task Name</label>
    <input type="text" v-model="enteredTaskName">
    <button :disabled="isEmpty()"> Add Task </button>
<!--    <button @click="clearInput"> Clear </button>-->
  </form>
</template>

<script>
export default {
name: "AddTask",
  // emits: ['add-task'],
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
    },
    isEmpty(){
      return this.enteredTaskName===""
    },
  }
}
</script>

<style scoped>

</style>