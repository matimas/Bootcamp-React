const Box = ({ text, checked }) => {
	return (
		<div>
			<input
				type='checkbox'
				id='scales'
				name='scales'
				defaultChecked={checked ? true : false}
			/>
			<label>{text}</label>
		</div>
	);
};

export default Box;
