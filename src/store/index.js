import { createStore } from 'redux';
import { tasksReducer } from './tasksReducer';

export const store = createStore(tasksReducer);
