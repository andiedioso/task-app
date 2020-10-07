<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1> Tasks </h1>
    <section>
      <table>
        <thead>
        <th>Task Name</th>
        <th>Status</th>
        </thead>

        <tbody v-for="(task, index) in taskList" :key="index">
        <tr>
          <td> {{task.name}} </td>
          <td> {{task.status}} </td>
          <button v-if="task.status=='Pending'" @click="markAsComplete(index)">Mark as Complete</button>
          <button @click="removeTask(index)"> Remove Task </button>
        </tr>
        </tbody>

      </table>
    </section>

    <section>
      <input type="text" v-model="nameInput">

      <button v-if="isEmpty()==true" disabled>Add Task</button>
      <button v-if="isEmpty()==false" @click="addTask">Add Task</button>
      <button @click="clearInput()">Clear</button>
    </section>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data () {
    return {
      taskList: [
      ],
      nameInput: '',
      statusInput: 'Pending',
    }
  },
  methods:{
    markAsComplete(idx){
      this.taskList[idx].status = 'Completed';
    },
    addTask(){
      this.taskList.push({name:this.nameInput, status:'Pending'});
      this.nameInput = '';
    },
    removeTask(idx) {
      this.taskList.splice(idx, 1);
    },
    isEmpty(){
      if(this.nameInput==""){
        return true;
      } else{
        return false;
      }
    },
    clearInput(){
      this.nameInput = '';
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
