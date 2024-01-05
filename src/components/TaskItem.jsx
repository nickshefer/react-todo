import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useDispatch } from 'react-redux';
import { updateTaskAction } from '../store/tasksReducer';
import { dateParse } from '../utils/dateParse';

export default function TaskItem({ task }) {
	const dispatch = useDispatch();
	const completeTask = task => {
		const compTask = { ...task, complete: true };
		dispatch(updateTaskAction(compTask));
	};
	const [day, month, hours, minutes] = dateParse(task.date);
	return (
		<div className='task'>
			<CheckCircleOutlineIcon
				className='complete-btn'
				fontSize='large'
				onClick={() => completeTask(task)}
			/>
			<div className='task_text'>{task.text}</div>
			<div className='task-date'>
				<div className='task-date_date'>
					{day}.{month}
				</div>
				<div className='task-date_time'>
					{hours}:{minutes}
				</div>
			</div>
		</div>
	);
}
