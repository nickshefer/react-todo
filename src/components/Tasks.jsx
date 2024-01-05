import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MyModal from './UI/modal/MyModal';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import AddTask from './AddTask';

export default function Tasks() {
	const [isModal, setIsModal] = useState(false);
	const tasks = useSelector(store => store.tasks);
	const unComplitedTasks = tasks.filter(task => task.complete != true);
	return (
		<div className='tasks'>
			<h2 className='h2-title'>Tasks</h2>
			<div className='tasks_block'>
				{unComplitedTasks.map(task => (
					<TaskItem key={task.id} task={task} />
				))}
				<AddTask setIsModal={setIsModal} />
				{isModal && (
					<MyModal isModal={isModal} setIsModal={setIsModal}>
						<TaskForm setIsModal={setIsModal} isModal={isModal} />
					</MyModal>
				)}
			</div>
		</div>
	);
}
