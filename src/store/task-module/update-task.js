import store from '..';

function updateTask() {
  const updateState = (event) => {
    store.commit('taskModule/UPDATE_TASK', { taskIndex: event.index }, { root: true });
  };

  return {
    updateState,
  };
}

export default updateTask;
