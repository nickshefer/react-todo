import React from 'react';
import cs from './MyModal.module.scss';

export default function MyModal({ children, isModal, setIsModal }) {
	const clickOut = () => {
		setIsModal(false);
	};
	return (
		<div onClick={clickOut} className={cs.modal}>
			<div onClick={e => e.stopPropagation()} className={cs.modalContent}>
				{children}
			</div>
		</div>
	);
}
