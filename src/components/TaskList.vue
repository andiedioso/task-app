<template>
  <div id="task-items">
    <router-link to="/add">Add task</router-link>
    <button @click="linkToAdd">Add</button>
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
import TaskItem from "@/components/TaskItem";
import {ROUTE_NAME_ADD} from "@/route-names";
export default {
name: "TaskList",
  components: {TaskItem},
  props: {
    task:{
      type: Object,
    }
  },
  data () {
    return {
      taskList: [
        {
          id: '1',
          name: 'Task A',
          status: 'Pending',
          edit: false,
        }, {
          id: '2',
          name: 'Task B',
          status: 'Pending',
          edit: false,
        }, {
          id: '3',
          name: 'Task C',
          status: 'Pending',
          edit: false,
        }
      ],
    }
  },
  created(){
    if(this.task){
      this.taskList.push(this.task);
    }
    console.log('created');
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
  },
  methods: {
    linkToAdd(){
      this.$router.push(
          {name: ROUTE_NAME_ADD}
      );
    },
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
  },
}
</script>

<style scoped>

</style>