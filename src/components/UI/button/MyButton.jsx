import React from 'react';
import cs from './MyButton.module.scss';

export default function MyButton({ children, ...props }) {
	return (
		<button {...props} className={cs.btn}>
			{children}
		</button>
	);
}
