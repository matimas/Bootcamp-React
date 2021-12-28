import React, { useState, useEffect } from 'react';
import './Algolia.css';
import axios from 'axios';
import UserInput from './UserInput';

export default function AlgoliaSearch() {
	const [term, setTerm] = useState('hooks');
	const [userInput, setUserInput] = useState('');
	const [results, setResults] = useState([]);

	useEffect(() => {
		const search = async () => {
			try {
				const { data } = await axios.get(
					`https://hn.algolia.com/api/v1/search?query=${term}`,
				);
				setResults(data.hits);
			} catch (error) {}
		};
		search();
	}, [term]);

	const renderedResults = results.map((hits) => {
		return (
			<div className='item' key={hits.objectID}>
				<li>{hits.title}</li>
			</div>
		);
	});
	let content = results.length > 0 ? renderedResults : <div>Loading...</div>;
	return (
		<div className='container'>
			<div className='search-container'>
				<UserInput
					userInput={userInput}
					setUserInput={setUserInput}
					setTerm={setTerm}
				/>
				<button
					onClick={(e) => {
						setResults([]);
						if (userInput !== '') setTerm(userInput);
					}}
				>
					Search
				</button>
			</div>
			<div className='content'>{content}</div>
		</div>
	);
}
