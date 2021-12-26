import React, { useState } from 'react';
import './Time.css';
export default function Time() {
	const [minutes, setMinutes] = useState('');
	const [secondes, setSecondes] = useState('');
	const [hours, setHours] = useState('');
	const setChangeTime = (value, time) => {
		// if (time === 'Minutes') {
		// 	setSecondes(value * 60);
		// 	setMinutes(value);
		// 	setHours(value / 60);
		// }
		switch (time) {
			case 'Secondes':
				setSecondes(value);
				setMinutes(value / 60);
				setHours(value / 3600);
				break;
			case 'Minutes':
				setSecondes(value * 60);
				setMinutes(value);
				setHours(value / 60);
				break;
			case 'Hours':
				setSecondes(value * 3600);
				setMinutes(value * 60);
				setHours(value);
				break;
		}
	};
	return (
		<div className='container'>
			<div>
				<label htmlFor='Secondes'>Secondes</label>
				<input
					name='Secondes'
					value={secondes}
					onChange={(e) => setChangeTime(e.target.value, e.target.name)}
					type='number'
				/>
			</div>
			<div>
				<label htmlFor='Minutes'>Minutes</label>
				<input
					name='Minutes'
					value={minutes}
					onChange={(e) => setChangeTime(e.target.value, e.target.name)}
					type='number'
				/>
			</div>
			<div>
				<label htmlFor='Hours'>Hours</label>
				<input
					name='Hours'
					value={hours}
					onChange={(e) => setChangeTime(e.target.value, e.target.name)}
					type='number'
				/>
			</div>
		</div>
	);
}
