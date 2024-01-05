import React from 'react';
import './styles/index.scss';
import Header from './components/Header';
import Tasks from './components/Tasks';
import CompleteTasks from './components/CompleteTasks';
import { Container, CssBaseline } from '@mui/material';

function App() {
	return (
		<div className='App'>
			<CssBaseline />
			<Header />
			<Container maxWidth={'lg'}>
				<Tasks />
				<CompleteTasks />
			</Container>
		</div>
	);
}

export default App;
