<template>
  <li> {{taskName}} <strong>{{taskStatus}}</strong>
     <button v-if="taskStatus==='Pending'" @click="toggleComplete"> Mark As Completed </button>
    <button @click="removeTask"> Remove </button>
  </li>
</template>

<script>
export default {
name: 'task-item',
  props: {
    id: {
      type: String,
      required: true,
    },
    taskName: {
      type: String,
      required: true,
    },
    taskStatus: {
      type: String,
      required: true,
      default: 'Pending',
    }
  },
  methods: {
    toggleComplete(){
      this.$emit('toggle-complete', this.id)
    },
    removeTask() {
      this.$emit('remove-task', this.id);
    },
  }


}
</script>

<style scoped>

</style>