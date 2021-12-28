import React, { useState, useEffect } from 'react';
import axios from 'axios';

const APIKEY = '74125df8392fa3238eed0fc1d1acfc28';

export default function Countries() {
	const [countriesData, setData] = useState([]);
	const [countries, setCountries] = useState([]);
	const [term, setTerm] = useState('');

	const getData = async () => {
		const url = 'http://api.countrylayer.com/v2/all';
		const { data } = await axios.get(url, {
			params: {
				access_key: APIKEY,
			},
		});
		setData(data);
		setCountries(data);
	};

	const userFilter = (e) => {
		setTerm(e);
		const filterdCountries = countriesData.filter((country) => {
			return country.name.includes(e);
		});
		console.log(filterdCountries);
		if (e === '') {
			setCountries(countriesData);
		}
		setCountries(filterdCountries);
	};

	useEffect(() => {
		getData();
	}, []);
	useEffect(() => {
		if (countries.length === 0) {
			setCountries(countriesData);
		}
	}, [countries]);

	const renderCountries = countries.map((country) => {
		return <div key={country.name}>{country.name}</div>;
	});

	return (
		<div>
			<form>
				<div>
					<label>Search Country</label>
					<input
						value={term}
						onChange={(e) => userFilter(e.target.value)}
						type='text'
					/>
				</div>
			</form>
			<div>{renderCountries}</div>
		</div>
	);
}
