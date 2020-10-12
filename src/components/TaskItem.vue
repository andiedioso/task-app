<template>
  <div id="task-item">
    <li>

      <div class="row">
        <!--      input if edited -->
        <input
            v-if="isEdited"
            v-model="task.name"
            @blur="editFalse"
            @keyup.enter="editFalse"
        >
        <label
            v-else
            @click="editFalse">
          {{task.name}}
        </label>

        <span
            :class="[isPending ? 'badge-warning' : 'badge-dark', 'badge badge-pill']"
        > {{task.status}} </span>

        <span class="container">
          <button
              class="btn btn-light"
              v-if="isPending"
              @click="toggleComplete">
          Mark as Complete </button>
          <button
              class="btn btn-light"
              @click="removeTask">
          Remove </button>
        </span>
      </div>

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
    editFalse(){
      this.task.edit = !this.task.edit;
      console.log(this.task);
    }
  },
  computed: {
    isPending() {
      return this.task.status === 'Pending';
    },
    isEdited(){
      return this.task.edit;
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

label, .badge {
  padding: inherit;
}

.buttons {
  justify-content: flex-end;
}

.btn {
  font-size: small;
}

</style>