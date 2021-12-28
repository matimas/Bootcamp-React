import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CancelToken() {
	const [data, setData] = useState('');
	const [btnTogle, setTogle] = useState(true);

	useEffect(() => {
		const CancelToken = axios.CancelToken;
		const source = CancelToken.source();
		const getData = async () => {
			const proxy = 'https://intense-mesa-62220.herokuapp.com/';
			const { data } = await axios.get(
				proxy + 'https://swapi.dev/api/films/1/',
				{
					cancelToken: source.token,
				},
			);
			setData(data.opening_crawl);
		};
		if (btnTogle) {
			getData();
		} else {
			setData('');
		}
		return () => {
			source.cancel();
		};
	}, [btnTogle]);
	return (
		<div
			style={{
				display: 'flex',
				flexFlow: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div style={{ width: '500px', height: '500px' }}>
				<button onClick={(e) => setTogle(!btnTogle)}>
					{btnTogle ? 'Hidden' : 'Show'}
				</button>
				<div>{data}</div>
			</div>
		</div>
	);
}
