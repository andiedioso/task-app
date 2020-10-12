<template>
  <div id="taskForm">
    <form>
      <input
          id="taskName"
          type="text"
          v-model="enteredTaskName">
      <button
          @click.prevent="submitData"
          class="btn btn-light"
          :disabled="isEmpty()"> Add</button>
      <button
          class="btn btn-light"
          @click.prevent="clearInput"> Clear </button>
    </form>

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
form {
  display: flex;
  justify-content: center;
  flex-direction: row;
  border: none;
}

input{
  margin-top: 3vh;
  padding: 10px;
  width: 60%;
  outline: none;
  border-radius: 5px;
  max-height: 50px;
}


button {
  border: solid 1px white;
  padding: 10px;
  margin: 3vh 1vw 0 1vw;
  background: transparent;
  outline: none;
  border-radius: 5px;
  transition: all 0.5s ease;
  color: white;
}

.btn {
  font-size: small;
}
</style>