<template>
  <div id="task-items">
    <p>{{getSummary}}</p>
    <button
        class="btn btn-success"
        @click="linkToAdd">Add a Task</button>
    <task-item
        v-for="task in getList"
        :key="task.id"
        :task="task"
        @toggle-complete = "markAsComplete(task.id)"
        @remove-task="removeTask"
        @edit-task="editTask(task.id)"
    ></task-item>
  </div>
</template>

<script>
import TaskItem from "@/components/TaskItem";
import {ROUTE_NAME_ADD} from "@/route-names";
import {mapGetters, mapActions} from 'vuex';
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
      taskList: [{
          id: '1',
          name: 'Task A',
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
    ...mapGetters([
          "getList",
          "getSummary"
    ]),
    //
    // message() {
    //   //you can reference other computed properties
    //   if (this.hasTask){
    //     return 'You have no tasks';
    //   } else if (this.taskList.some(el => el.status === 'Pending')){
    //     return 'You have some pending tasks';
    //   }
    //   return 'All tasks are completed.';
    // },
    // hasTask() {
    //   return this.taskList.length===0;
    // }
  },
  methods: {
    linkToAdd(){
      this.$router.push(
          {name: ROUTE_NAME_ADD}
      );
    },
    ...mapActions([
          "markAsComplete",
          "removeTask"
    ]),
  },
}
</script>

<style scoped>

</style>