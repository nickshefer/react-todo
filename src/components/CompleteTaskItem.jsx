import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTaskAction } from '../store/tasksReducer';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export default function CompleteTaskItem({ task }) {
	const dispatch = useDispatch();
	return (
		<div className='complete-task'>
			<CheckBoxIcon fontSize='large' htmlColor='teal' />
			<div className='complete-task_text'>{task.text}</div>
			<DeleteIcon
				fontSize='large'
				className='remove-btn'
				onClick={() => dispatch(removeTaskAction(task))}
			/>
		</div>
	);
}
