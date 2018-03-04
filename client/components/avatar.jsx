import React from 'react';

export default class Avatar extends React.Component {
	constructor(props) {
    super(props);
	}
	
	render() {
		return(
			<span className="avatar avatar--person"></span>
		) 
	}
}