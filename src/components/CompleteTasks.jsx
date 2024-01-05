import React from 'react';
import { useSelector } from 'react-redux';
import CompleteTaskItem from './CompleteTaskItem';

export default function CompleteTasks() {
	const tasks = useSelector(store => store.tasks);
	const completedTasks = tasks.filter(task => task.complete === true);
	return (
		<div className='complete-tasks'>
			<h2 className='h2-title'>Completed</h2>
			<div
				style={{ height: completedTasks.length == 0 && '36px' }}
				className='complete-tasks_block'
			>
				{tasks &&
					completedTasks.map(task => (
						<CompleteTaskItem key={task.id} task={task} />
					))}
			</div>
		</div>
	);
}
