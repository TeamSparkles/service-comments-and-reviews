import React from 'react';
import Avatar from './avatar.jsx';
import Replies from './replies.jsx';


export default class Comment extends React.Component {
  constructor(props) {
		super(props);
	}

	render() {
    return (
			<div>
			  <span>
				  <Avatar />
				</span>
				<span className="card--name">
				  {this.props.comment.member.name}
				</span>
				<p className="text">
				  {this.props.comment.comment}
				</p>
				<div className="comment--replies--block">
					<span>
						{this.props.comment.replies.map((reply, index) => 
							<Replies 
								key={index}
								reply={reply}
							/>
						)}
				</span>
				</div>
			</div>
		)
	}
}