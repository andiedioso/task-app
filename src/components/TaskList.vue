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
    // if(this.task){
    //   this.taskList.push(this.task);
    // }
    console.log('created');
  },
  computed: {
    ...mapGetters([
          "getList",
          "getSummary"
    ]),
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