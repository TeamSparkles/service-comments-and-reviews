import React from 'react';

export default class Avatar extends React.Component {
  constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<span className={this.props.isReply ? "avatar--small" : "avatar"}/>
		);
	}
}