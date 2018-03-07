import React from 'react';
var moment = require('moment');

export default class Date extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<span className={this.props.isReply ? "replies--date" : "comment--date"}>
				{moment(this.props.unitTimeConverter).startOf("month").fromNow()}
			</span>
		)
	}
}