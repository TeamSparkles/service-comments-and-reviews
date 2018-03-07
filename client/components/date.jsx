import React from 'react';
var moment = require('moment');

export default class Date extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<span>{moment(this.props.unitTimeConverter).startOf("month").fromNow()}</span>
		)
	}
}