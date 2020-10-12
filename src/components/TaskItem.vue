<template>
  <div id="task-item">
    <li>

      <div class="row">
        <!--      input if edited -->
        <div class="col-6">
          <input
              v-if="isEdited"
              v-model="task.name"
              @blur="editFalse"
              @keyup.enter="editFalse"
              v-focus
          >
          <label
              v-else
              @click="editFalse">
            {{task.name}}
          </label>

          <span
              :class="[isPending ? 'badge-warning' : 'badge-dark', 'badge badge-pill']"
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
        </div>
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
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }


}
</script>

<style scoped>
/*#task-item {*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  flex-direction: row;*/
/*  border: none;*/
/*}*/
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