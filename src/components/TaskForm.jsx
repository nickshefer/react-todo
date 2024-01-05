import React, { useEffect, useRef, useState } from 'react';
import MyButton from './UI/button/MyButton';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addTaskAction } from '../store/tasksReducer';

export default function TaskForm({ isModal, setIsModal }) {
	const dispatch = useDispatch();
	const [taskText, setTaskText] = useState('');
	const input = useRef();
	useEffect(() => {
		input.current.focus();
	}, []);

	const onChange = e => {
		if (input.current.classList.contains('error')) {
			input.current.classList.remove('error');
		}
		setTaskText(e.target.value);
	};

	const submit = e => {
		e.preventDefault();
		if (!taskText) {
			input.current.classList.add('error');
			input.current.focus();
			return;
		}
		const task = {
			id: v4(),
			text: taskText,
			date: Date.now(),
			complete: false
		};
		dispatch(addTaskAction(task));
		setIsModal(false);
		setTaskText('');
	};
	return (
		<form className='task-form' onSubmit={submit}>
			<input
				ref={input}
				className='task-form_input'
				type='text'
				value={taskText}
				onChange={onChange}
				placeholder='Введите задачу'
			/>
			<MyButton style={{ marginTop: 20 }}>Добавить</MyButton>
		</form>
	);
}
