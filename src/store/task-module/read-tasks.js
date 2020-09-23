import { ref, computed } from 'vue';
import store from '..';

function readTask() {
  const descriptionFilter = ref('');
  const assingToFilter = ref('');
  const doneFilter = ref(false);

  const listTask = computed(() => store.getters['taskModule/filterTask']({
    description: descriptionFilter.value,
    assinedTo: assingToFilter.value,
    done: doneFilter.value,
  }));

  return {
    descriptionFilter,
    assingToFilter,
    doneFilter,
    listTask,
  };
}

export default readTask;
