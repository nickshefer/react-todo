import React from 'react';
import cs from './AddIcon.module.scss';

export default function AddIcon({ size, addTask }) {
	return (
		<div style={{ width: size, height: size }} className={cs.addIcon}>
			<span></span>
		</div>
	);
}
