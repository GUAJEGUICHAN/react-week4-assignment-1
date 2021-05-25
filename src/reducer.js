export const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  const { newId, tasks, taskTitle } = state;

  switch (action.type) {
  case ('tasks/updateTitle'):
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };

  case ('tasks/addNewTask'):
    if (taskTitle === '') {
      return state;
    }
    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };

  case ('tasks/deleteTask'):
    return {
      ...state,
      tasks: tasks.filter((task) => task.id !== action.payload.id),
    };

  default:
    return state;
  }
}
