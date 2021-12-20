import React from 'react';
import data from './data';
import Names from './Names';
import Card from './Card';

class DataMassaging extends React.Component {
	state = { names: [], bornAfter1990: [] };
	getNames = () => {
		return data.map((person) => {
			return person.name;
		});
	};
	filterByYear = (year) => {
		return data.filter((person) => {
			return parseInt(person.birthday.slice(-4)) > year;
		});
	};
	setData = () => {
		this.setState({
			names: this.getNames(),
			bornAfter1990: this.filterByYear(1990),
		});
	};
	componentDidMount = () => {
		this.setData();
	};
	render() {
		return (
			<div className='container'>
				<Names names={this.state.names} />
				<Card humans={this.state.bornAfter1990} />
			</div>
		);
	}
}

export default DataMassaging;
