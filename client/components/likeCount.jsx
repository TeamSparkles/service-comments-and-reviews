import React from 'react';
import LikeIcon from './likeIcon.jsx';

export default class LikeCount extends React.Component {
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
				<LikeIcon />
				{this.state.likecount} likes 
			</button>
		)
	}
}
