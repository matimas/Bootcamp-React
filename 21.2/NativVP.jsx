import React, { useState, useEffect, useRef } from 'react';
import Video from './Video';

export default function NativVP() {
	const [btnPlayer, setbtnPlayer] = useState(false);
	const vidRef = useRef();

	useEffect(() => {
		console.log('renderong');
		if (btnPlayer) {
			vidRef.current.play();
		} else {
			vidRef.current.pause();
		}
	}, [btnPlayer]);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Video ref={vidRef} />
			<button onClick={(e) => setbtnPlayer(!btnPlayer)}>
				{btnPlayer ? <span>&#9208;</span> : <span>&#9654;</span>}
			</button>
		</div>
	);
}
