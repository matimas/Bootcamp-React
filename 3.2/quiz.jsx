import React from 'react';
import './quizContainer.css';
import QuizTitle from './quizTitle';
import Q1 from './q1';
import Q2 from './q2';

const Quiz = () => {
	return (
		<div className='quiz'>
			<QuizTitle />
			<Q1 />
			<Q2 />
		</div>
	);
};

export default Quiz;
