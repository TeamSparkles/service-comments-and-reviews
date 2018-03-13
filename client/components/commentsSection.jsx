import React from 'react';
import ReactDOM from 'react-dom'; 
import $ from 'jquery';
import Comment from './comment.jsx';
import Replies from './replies.jsx';

export default class CommentsSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			event_id: 241049102,
			commentsArray: [],
			loaded: false
		}
	}

	componentDidMount() {
	  $.ajax({
			type: "GET",
			url: "http://localhost:3000/events/" + this.state.event_id + "/comments",
			datatype: "json",
			contentType: "application/json",
			success: (data) => {
				this.setState({
					commentsArray: data.comments,
					loaded: true
				}); 
			}
		});	

	}

	render() {
		if (this.state.loaded) {
      return (
        <div className="card card--hasHoverShadow">
				  <h2>Discussions ({this.state.commentsArray.length})</h2>
				    {this.state.commentsArray.map((item, index) => 
					    <Comment 
							  key={index}
						    commentInfo={item}
					    />
					  )}
				</div>
		  )
	  } else {
			return (
			  <div>
				  <h5>loading data</h5>
				</div>
			)
		}
	}
}


