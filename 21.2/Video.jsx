import React from 'react';

const Video = React.forwardRef((props, ref) => {
	return (
		<div style={{ width: '500px', height: '350px' }}>
			<video ref={ref} controls>
				<source
					src='http://techslides.com/demos/sample-videos/small.mp4'
					type='video/mp4'
				/>
			</video>
		</div>
	);
});

export default Video;
