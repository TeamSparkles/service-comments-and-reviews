import React from 'react';
import Avatar from './avatar.jsx';

export default class Comment extends React.Component {
  constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.comment.comment);
    return (
			<div className="card card--hasHoverShadow">
			  <span>
				  <Avatar />
				</span>
				<span className="card--name">
				  {this.props.comment.member.name}
				</span>
				<p>
				  {this.props.comment.comment}
				</p>
			</div>
		)
	}
}