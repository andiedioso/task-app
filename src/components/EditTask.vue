<template>
  <div id="taskEditForm">
    <form>
      <input
          id="taskName"
          type="text"
          v-model="editTaskName">
      <button
          @click.prevent="handleEditBtnClick"
          class="btn btn-light"
          :disabled="isEmpty">Edit</button>
    </form>
    <p>{{editTaskName}}</p>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import {ROUTE_NAME_HOME} from "@/route-names";

export default {
name: "EditTask",
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      editTaskName: this.task.name,
    }
  },
  computed: {
    isEmpty(){
      return this.editTaskName==="";
    },
  },
  methods: {
    handleEditBtnClick(){
      this.editTask({
        id: this.task.id,
        name: this.editTaskName
      })
      this.$router.push(ROUTE_NAME_HOME);
    },
    ...mapActions ({
          editTask: "editTask"
    }
    )
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
</style>