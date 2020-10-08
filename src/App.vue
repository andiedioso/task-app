<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1> Tasks </h1>
    <TaskItem
        v-for="task in taskList"
        :key="task.id"
        :id="task.id"
        :taskName = "task.name"
        :taskStatus = "task.status"
        @toggle-complete = "markAsComplete"
        @remove-task="removeTask"
    ></TaskItem>
    <p> {{ message }}</p>
    <add-task @add-task="addTask"></add-task>

  </div>
</template>

<script>
import TaskItem from './components/TaskItem.vue'
import AddTask from './components/AddTask.vue'

export default {
  name: 'App',
  components: {
        TaskItem,
        AddTask
      },
  data () {
    return {
      taskList: [
      //     {
      //   id: '1',
      //   name: 'Task A',
      //   status: 'Pending',
      // }, {
      //   id: '2',
      //   name: 'Task B',
      //   status: 'Complete',
      // }, {
      //   id: '3',
      //   name: 'Task C',
      //   status: 'Pending',
      // }, {
      //   id: '4',
      //   name: 'Task D',
      //   status: 'Complete',
      // }
      ],
    }
  },
  methods:{
    markAsComplete(id){
      //find() returns a value that satisfies the condition
      const taskPicked = this.taskList.find(
          (el) => el.id === id
      );
      taskPicked.status = "Complete";
    },
    addTask(newTaskName,pendingStat){
      console.log(newTaskName);
      const newTask = {
        id: new Date().toISOString(),
        name: newTaskName,
        status: pendingStat,
      }
      //console.log(newTask);
      this.taskList.push(newTask);
    },
    removeTask(id){
      this.taskList = this.taskList.filter(
          (friend) => friend.id !== id
      );
    }
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
