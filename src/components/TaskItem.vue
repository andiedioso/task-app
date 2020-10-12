<template>
  <div id="task-item">
    <li>
      {{task.name}}
      <span
        v-if="isPending"
        :class="[isPending ? 'badge-warning' : 'badge-dark', 'badge badge-pill']"
      >{{task.status}}</span>

      <button class="btn btn-light" v-if="isPending" @click="toggleComplete">
        Mark as Complete </button>
      <button class="btn btn-light" @click="removeTask">
        Remove </button>
    </li>

  </div>

</template>


<script>
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
  },
  computed: {
    isPending(){
      return this.task.status==='Pending';
    }
  }


}
</script>

<style scoped>
#task-item {
  display: flex;
  justify-content: center;
  flex-direction: row;
  border: none;
}

button {
  border: solid 1px white;
  padding: 10px;
  margin: 10px;
  outline: none;
  border-radius: 5px;
  transition: all 0.5s ease;
}

#buttons {
  background-color: #34495E;
}

.btn {
  font-size: small;
}
</style>