import React from 'react';
import Avatar from './avatar.jsx';
import Replies from './replies.jsx';
var moment = require('moment');

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
				<span className="comment--name">
				  {this.props.commentInfo.member.name}
				</span>
				<p className="comment--text">
				  {this.props.commentInfo.comment}
				</p>
				<span>
					{moment(moment(this.props.commentInfo.created)
						.format("YYYYMMDD"))
						.startOf("month")
						.fromNow()}
				</span>
				<div className="comment--replies--block">
					<span>
						{this.props.commentInfo.replies.map((reply, index) => 
							<Replies 
								key={index}
								replyInfo={reply}
							/>
						)}
				</span>
				</div>
			</div>
		)
	}
}
