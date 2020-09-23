<template>
  <TaskContainer />
</template>

<script>
import TaskContainer from '@/store/task-module/task-container.vue';

export default {
  name: 'Home',
  components: {
    TaskContainer,
  },
};
</script>
