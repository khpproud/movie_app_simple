import React, { useEffect } from 'react';

const Detail = ({ location, history }) => {
	useEffect(
		() => {
			if (location.state === undefined) {
				history.push('/');
			}
		},
		[ location, history ]
	);
	return location.state ? <span>{location.state.title}</span> : null;
};

export default Detail;
