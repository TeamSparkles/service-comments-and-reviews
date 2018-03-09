import React from 'react';
import Avatar from './avatar.jsx';
import Replies from './replies.jsx';
import Date from './date.jsx';
import Likes from './likes.jsx';
var moment = require('moment');

export default class Comment extends React.Component {
  constructor(props) {
		super(props);
	}

	render() {
		{console.log(this.props.commentInfo.like_count)}
    return (
			<div className="comment">
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
					<Date unitTimeConverter={moment(this.props.commentInfo.created).format("YYYYMMDD")}/>
				</span>
				<span>
					<Likes likecount={this.props.commentInfo.like_count}/>		
				</span>
				<div className="replies--block">
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
