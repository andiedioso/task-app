<template>
  <div id="app">

    <h2> Tasks </h2>
    <router-view></router-view>
<!--    <p> {{ message }}</p>-->
<!--    <hr>-->
<!--    <add-task @add-task="addTask"/>-->
<!--    <task-item-->
<!--        v-for="task in taskList"-->
<!--        :key="task.id"-->
<!--        :task="task"-->
<!--        @toggle-complete = "markAsComplete"-->
<!--        @remove-task="removeTask"-->
<!--    ></task-item>-->
<!--    <TaskList></TaskList>-->
  </div>
</template>

<script>
//import TaskItem from './components/TaskItem.vue'
//import AddTask from './components/AddTask.vue'
// import TaskList from "@/components/TaskList";
export default {
  name: 'App'
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




</style>
