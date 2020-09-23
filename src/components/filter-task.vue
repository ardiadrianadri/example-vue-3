<template>
  <form class="filter-form" @submit.prevent="onSubmit">
    <div class="fields">
      <div class="input-field description">
        <label class="input-label" for="description-input">Description</label>
        <input
          type="text"
          class="input-text"
          :value="description"
          @input="$emit('update:description', $event.target.value)"
          id="description-input"
        />
      </div>
      <div class="input-field assing">
        <label class="input-label" for="assing-input">Assing to</label>
        <input
          type="text"
          class="input-text"
          :value="assingTo"
          @input="$emit('update:assingTo', $event.target.value)"
          id="assing-input"
        />
      </div>
      <div class="input-field switch">
        <div class="input-label">
          <span v-if="filterDone">Done</span>
          <span v-else>Pending</span>
        </div>
        <Switch v-model:on="filterDone" />
      </div>
       <div class="input-field buttons">
        <button type="submit" class="button primary">Search</button>
      </div>
    </div>
  </form>
</template>
<script>
import Switch from './switch.vue';

export default {
  name: 'FilterTask',
  components: {
    Switch,
  },
  props: {
    description: {
      type: String,
      default: '',
    },
    assingTo: {
      type: String,
      default: '',
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      filterDone: false,
    };
  },
  methods: {
    onSubmit() {
      this.$emit('search');
    },
  },
  watch: {
    filterDone(newValue) {
      this.$emit('update:done', newValue);
    },
  },
  mounted() {
    this.filterDone = this.done;
  },
};
</script>
<style scoped>
  .filter-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  .fields {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .input-field {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
    margin: 20px 30px;
  }
  .buttons {
    width: 10%;
    justify-content: flex-end;
  }
  .switch {
    width: 29%;
    align-items: center;
  }
  .description {
    width: 45%;
  }
  .assing {
    width: 30%;
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
</style>
