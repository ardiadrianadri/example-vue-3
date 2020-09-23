<template>
  <form class="new-task" @submit.prevent="createNewTask">
    <div class="input-field description">
      <label class="label-text" for="description-input">Description</label>
      <input
        type="text"
        class="input-text"
        :value="description"
        @input="$emit('update:description', $event.target.value)"
        id="description-input"
      />
    </div>
    <div class="input-field assing">
      <label class="label-text" for="assing-input">Assing to</label>
      <input
        type="text"
        class="input-text"
        :value="assingTo"
        @input="$emit('update:assingTo', $event.target.value)"
        id="assing-input"
      />
    </div>
    <div class="input-field buttons">
      <button type="submit" class="button primary">Add</button>
    </div>
  </form>
</template>
<script>
export default {
  name: 'AddTask',
  props: {
    description: {
      type: String,
      default: '',
    },
    assingTo: {
      type: String,
      default: '',
    },
  },
  methods: {
    createNewTask() {
      this.$emit('add-task');
    },
  },
};
</script>
<style scoped>
  .new-task {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .input-field {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0px 20px;
  }
  .input-field.buttons {
    align-items: center;
    justify-content: flex-end;
    height: 60px;
  }
  .input-label {
    color: black;
    font-size: 20px;
    margin-bottom: 10px;
  }

  .input-text {
    width: 100%;
    height: 26px;
    background-color: white;
    font-size: 16px;
    border-radius: 4px;
  }

  .button {
    width: 75px;
    height: 40px;
    border: solid 1px black;
    border-radius: 4px;
    font-size: 16px;
  }

  .primary {
    background-color: blue;
    color: white;
    font-weight: 800;
  }

  .description {
    width: 60%;
  }

  .assing {
    width: 30%;
  }

  .buttons {
    width: 10%;
  }
</style>
