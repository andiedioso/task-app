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
          :disabled="isEmpty"> Add</button>
      <button
          class="btn btn-light"
          @click.prevent="clearInput"> Clear </button>
    </form>

  </div>

</template>

<script>
import {ROUTE_NAME_HOME} from "@/route-names";

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
      // this.$emit('add-task', this.enteredTaskName, this.defaultStatus);
      this.$router.push({
            name: ROUTE_NAME_HOME,
            params: {
              task: {
                id: this.uuidv4(),
                name: this.enteredTaskName,
                status: 'Pending',
                edit: false,
              },
            }
          }
      );
      this.enteredTaskName = '';
    },
    uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
  },
  computed: {
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
  padding: 12px;
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