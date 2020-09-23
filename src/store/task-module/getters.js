const getteres = {
  filterTask(state) {
    return (taskFilter) => {
      let result = state.taskList
        .map((item) => ({ ...item }));

      if (taskFilter && Object.keys(taskFilter).length > 0) {
        result = result.filter((item) => {
          const description = taskFilter.description === '' || item.description === taskFilter.description;
          const assinedTo = taskFilter.assinedTo === '' || item.assinedTo === taskFilter.assinedTo;
          const done = taskFilter.done === item.done;

          return description && assinedTo && done;
        });
      }

      return result;
    };
  },
};

export default getteres;
