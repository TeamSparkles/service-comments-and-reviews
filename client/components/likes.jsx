import React from 'react';

export default class Likes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			likecount: 0
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick () {
		this.setState((prevState, props) => ({
			likecount: prevState.likecount + 1
		}));
	}

	render() {
		console.log(this.state.likecount);
		return (
			<button className="likecount" onClick={(e) => this.handleClick(e)}>
				{this.state.likecount} likes 
			</button>
		)
	}
}