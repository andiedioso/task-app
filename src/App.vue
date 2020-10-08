<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1> Tasks </h1>

<!--    <section>-->
<!--      <table>-->
<!--        <thead>-->
<!--        <th>Task Name</th>-->
<!--        <th>Status</th>-->
<!--        </thead>-->

<!--        <tbody v-for="(task, index) in taskList" :key="index">-->
<!--        <tr>-->
<!--          <td> {{task.name}} </td>-->
<!--          <td> {{task.status}} </td>-->
<!--          <button v-if="task.status=='Pending'" @click="markAsComplete(index)">Mark as Complete</button>-->
<!--          <button @click="removeTask(index)"> Remove Task </button>-->
<!--        </tr>-->
<!--        </tbody>-->
<!--      </table>-->
<!--      <p> {{ message }}</p>-->
<!--    </section>-->

<!--    <section>-->
<!--      <input type="text" v-model="nameInput">-->

<!--      <button v-if="isEmpty()==true" disabled>Add Task</button>-->
<!--      <button v-if="isEmpty()==false" @click="addTask">Add Task</button>-->
<!--      <button @click="clearInput()">Clear</button>-->
<!--    </section>-->
      <TaskItem></TaskItem>

  </div>
</template>

<script>
import TaskItem from './components/TaskItem.vue'

export default {
  name: 'App',
  components: {
        TaskItem
      },
  data () {
    return {
      taskList: [{
        name: 'Task A',
        status: 'Pending',
      }, {
        name: 'Task B',
        status: 'Complete',
      }, {
        name: 'Task C',
        status: 'Pending',
      }

      ],
      nameInput: '',
      statusInput: 'Pending',
    }
  },
  methods:{
    markAsComplete(idx){
      this.taskList[idx].status = 'Completed';
    },
    // addTask(){
    //   this.taskList.push({name:this.nameInput, status:'Pending'});
    //   this.nameInput = '';
    // },
    removeTask(idx) {
      this.taskList.splice(idx, 1);
    },
    // isEmpty(){
    //   if(this.nameInput===""){
    //     return true;
    //   } else{
    //     return false;
    //   }
    // },
    // clearInput(){
    //   this.nameInput = '';
    // }
  },
  computed: {
    message() {
      //you can reference other computed properties
      if (this.hasTask){
        return 'You have no tasks';
      } else if (this.taskList.some(el => el.status === 'Pending')){
        return 'You have some pending tasks';
      }
        return 'All tasks are completed.';
    },
    hasTask() {
      return this.taskList.length===0;
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
