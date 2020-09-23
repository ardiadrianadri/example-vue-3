import { ref } from 'vue';
import store from '..';

function createTask() {
  const taskDescription = ref('');
  const taskAssingTo = ref('');
  const createNewTask = () => {
    const task = {
      description: taskDescription.value,
      assingTo: taskAssingTo.value,
      done: false,
    };

    store.commit('taskModule/ADD_TASK', task, { root: true });
  };

  return {
    taskDescription,
    taskAssingTo,
    createNewTask,
  };
}

export default createTask;
