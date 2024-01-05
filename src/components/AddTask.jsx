import React from 'react';
import AddIcon from './UI/addIcon/AddIcon';

export default function AddTask({ setIsModal }) {
	return (
		<div className='add-task'>
			<div onClick={() => setIsModal(true)} className='add-task_button'>
				<AddIcon size={20} />
				<div className='add-task_text'>Add task</div>
			</div>
		</div>
	);
}
