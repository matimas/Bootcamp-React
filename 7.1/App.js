import React from 'react';
// import Faker from 'faker';
import Increment from './components/7.1/Increment';
import './App.css';

if (module.hot) {
	module.hot.accept();
}
function App() {
	return (
		<div className='App'>
			<Increment />
		</div>
	);
}

export default App;
