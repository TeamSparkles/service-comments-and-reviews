import React from 'react';
import Avatar from './avatar.jsx';
import Date from './date.jsx';
import LikeCount from './likeCount.jsx';
var moment = require('moment');

export default class Replies extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
    console.log(this.props.replyInfo);
		return (
		  <div className="replies">
				<span>
					<Avatar isReply={true}/>
				</span>
				<span className="comment--name">
					{this.props.replyInfo.member.name}
				</span>
				<p className="replies--text">
					{this.props.replyInfo.comment}
				</p>
				<span>
					<Date 
						unitTimeConverter={moment(this.props.replyInfo.created).format("YYYYMMDD")}
						isReply={true}	
					/>
				</span>
        <span>
          <LikeCount likecount={this.props.replyInfo.like_count}/>
        </span>
			</div>
		)
	}
}