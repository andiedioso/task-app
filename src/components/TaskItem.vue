<template>
  <li> {{task.name}} <strong>{{task.status}}</strong>
     <button v-if="task.status==='Pending'" @click="toggleComplete"> Mark As Completed </button>
    <button @click="removeTask"> Remove </button>
  </li>
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
  }


}
</script>

<style scoped>

</style>