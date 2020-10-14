<template>
  <div id="task-item">
    <li>

      <div class="row">
        <div class="col-6">
          <label>
            {{task.name}}
          </label>

          <span
              class="badge badge-pill"
              :class="badgeIcon"
          > {{task.status}} </span>
        </div>


        <div class="col-6" id="task-item-btn">
          <button
              class="btn btn-light"
              v-if="isPending"
              @click="toggleComplete">
          Mark as Complete </button>
          <button
              class="btn btn-light"
              @click="removeTask">
          Remove </button>
          <button
            class="btn btn-light"
            @click="linkToEdit">
            Edit</button>
        </div>
      </div>
    </li>

  </div>

</template>


<script>
import {ROUTE_NAME_EDIT} from "@/route-names";
export default {
name: 'task-item',
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleComplete(){
      this.$emit('toggle-complete', this.task.id)
    },
    removeTask() {
      this.$emit('remove-task', this.task.id);
    },
    linkToEdit(){
      this.$router.push(
          {name: ROUTE_NAME_EDIT}
      );
    }
  },
  computed: {
    isPending() {
      return this.task.status === 'Pending';
    },
    badgeIcon(){
      return this.isPending ? 'badge-warning' : 'badge-dark';
    }
  },
}
</script>

<style scoped>

#task-item-btn{
  display: flex;
  justify-content: flex-end;
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
button {
  border: solid 1px white;
  padding: 10px;
  margin: 10px;
  outline: none;
  border-radius: 5px;
  transition: all 0.5s ease;
}

label {
  padding: 15px;
}

.buttons {
  justify-content: flex-end;
}

.btn {
  font-size: small;
}




</style>