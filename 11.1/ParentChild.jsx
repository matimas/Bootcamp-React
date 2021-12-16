import React, { Component } from 'react';
import Child from './Child';

const btnColors = [
	{ color: 'red', id: 1 },
	{ color: 'blue', id: 2 },
	{ color: 'green', id: 3 },
	{ color: 'black', id: 4 },
];
class ParentChild extends Component {
	constructor(props) {
		super(props);

		this.state = {
			btnText: '',
		};
	}

	getInfoFromChild = (e) => {
		this.setState((prevStart) => {
			return { btnText: e.target.value };
		});
	};
	render() {
		return (
			<div>
				<div className={'title'}>
					<h1>This is the color:{this.state.btnText}</h1>
				</div>
				{btnColors.map((btn) => {
					return (
						<Child
							callback={this.getInfoFromChild}
							bColor={btn.color}
							key={btn.id}
							id={btn.id}
						/>
					);
				})}
			</div>
		);
	}
}

export default ParentChild;
