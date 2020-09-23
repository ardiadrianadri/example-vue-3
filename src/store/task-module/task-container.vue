<template>
  <h1>Example Vue 3</h1>
  <h3>Filter task</h3>
    <FilterTask
      v-model:description="descriptionFilter"
      v-model:assingTo="assingToFilter"
      v-model:done="doneFilter"
    />
  <h3>Add task</h3>
  <AddTask
    v-model:description="taskDescription"
    v-model:assingTo="taskAssingTo"
    @add-task="createNewTask"
  />
  <TaskList
    :taskList="listTask"
    @on-state-change="updateState"
  />
</template>
<script>
import AddTask from '@/components/add-task.vue';
import FilterTask from '@/components/filter-task.vue';
import TaskList from '@/components/task-list.vue';

import createTask from './create-task';
import readTask from './read-tasks';
import updateTask from './update-task';

export default {
  name: 'TaskContainer',
  components: {
    AddTask,
    FilterTask,
    TaskList,
  },
  setup() {
    const createSetUp = createTask();
    const readSetUp = readTask();
    const updateSetUp = updateTask();

    return {
      ...createSetUp,
      ...readSetUp,
      ...updateSetUp,
    };
  },
};
</script>
