const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';

const defaultState = JSON.parse(localStorage.getItem('tasks')) || { tasks: [] };

const addTaskFunc = (state, action) => {
	const newState = { ...state, tasks: [...state.tasks, action.payload] };
	localStorage.setItem('tasks', JSON.stringify(newState));
	return newState;
};
const removeTaskFunc = (state, action) => {
	const newState = {
		...state,
		tasks: state.tasks.filter(task => task !== action.payload)
	};
	localStorage.setItem('tasks', JSON.stringify(newState));
	return newState;
};
const updateTaskFunc = (state, action) => {
	let foundIndex = state.tasks.findIndex(task => task.id === action.payload.id);
	const tasks = [...state.tasks];
	tasks[foundIndex] = action.payload;
	const newState = { ...state, tasks };
	localStorage.setItem('tasks', JSON.stringify(newState));
	return newState;
};

export const tasksReducer = (state, action) => {
	switch (action.type) {
		case ADD_TASK:
			return addTaskFunc(state, action);
		case REMOVE_TASK:
			return removeTaskFunc(state, action);
		case UPDATE_TASK:
			return updateTaskFunc(state, action);
		default:
			return defaultState;
	}
};

export const addTaskAction = payload => ({ type: ADD_TASK, payload: payload });
export const updateTaskAction = payload => ({
	type: UPDATE_TASK,
	payload: payload
});
export const removeTaskAction = payload => ({
	type: REMOVE_TASK,
	payload: payload
});
