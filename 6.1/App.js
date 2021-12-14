// import React from 'react';
// import './App.css';
// import WrapperCard from './WrapperCard';
// import RefactorCard from './RefactorCard';
// import Faker from 'faker';

// if (module.hot) {
// 	module.hot.accept();
// }
// const data = [
// 	{
// 		id: 0,
// 		url: 'https://picsum.photos/250/260',
// 		title: Faker.name.title(),
// 		description: Faker.lorem.text(),
// 	},
// 	{
// 		id: 1,
// 		url: 'https://picsum.photos/250/262',
// 		title: Faker.name.title(),
// 		description: Faker.lorem.text(),
// 	},
// 	{
// 		id: 2,
// 		url: 'https://picsum.photos/250/261',
// 		title: Faker.name.title(),
// 		description: Faker.lorem.text(),
// 	},
// ];

// class App extends React.Component {
// 	render() {
// 		return (
// 			<div className='App'>
// 				{data.map((card) => {
// 					return (
// 						<WrapperCard key={card.id} url={card.url}>
// 							<RefactorCard
// 								key={card.id}
// 								url={card.url}
// 								title={card.title}
// 								description={card.description}
// 							/>
// 						</WrapperCard>
// 					);
// 				})}
// 			</div>
// 		);
// 	}
// }
// export default App;
