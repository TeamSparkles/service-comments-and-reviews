import React from 'react';
import Avatar from './avatar.jsx';

export default class Replies extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		console.log(this.props)
		return (
		  <div>
				<span>
						<Avatar 
						  isReply={true}
					/>
				</span>
				<span className="card--name">
					{this.props.reply.member.name}
				</span>
				<p className="text">
					{this.props.reply.comment}
				</p>
			</div>
		)
	}
}