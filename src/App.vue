<template>
  <div id="app">
    <h2> Tasks </h2>
    <p> {{ message }}</p>
    <hr>
    <add-task @add-task="addTask"/>
    <task-item
        v-for="task in taskList"
        :key="task.id"
        :task="task"
        @toggle-complete = "markAsComplete"
        @remove-task="removeTask"
    ></task-item>

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

      ],
    }
  },
  methods:{
    markAsComplete(id){
      //find() returns a value that satisfies the condition
      const taskPicked = this.taskList.find(
          (el) => el.id === id
      );
      //console.log(taskPicked.status);
      taskPicked.status = "Complete";
    },
    addTask(newTaskName,pendingStat){
      console.log(newTaskName);
      const newTask = {
        id: this.uuidv4(),
        name: newTaskName,
        status: pendingStat,
        edit: false,
      }
      console.log(newTask);
      this.taskList.push(newTask);
    },
    removeTask(id){
      this.taskList = this.taskList.filter(
          (friend) => friend.id !== id
      );
    },
    uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
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
  color: white;
  background-color: #42b883;
  margin: 5vh auto;
  padding: 3vh 0;
  width: 70vw;
  max-width: 800px;
  border-radius: 10px;
}


hr{
  border-color: white;
  background-color: white;
  border-top: none;
  width: 75%;
}

li {
  background-color: #89e8bd;
  padding: 10px;
  margin: 15px;
  text-align: left;
  color: #34495E;
  width: 95%;
  border-radius: 5px;
  list-style-type: none;
}



</style>
