import React from 'react';
import reactDOM from 'react-dom';
//import { Icon, Button, Popover } from 'antd';
// import 'antd/dist/antd.css'; 
import Popup from 'reactjs-popup';

export default class MoreOptions extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			hasPopUp: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			hasPopUp: true
		}));
	}

	render() {
		return(
			<Popup trigger={
				<button className="moreOptions--popup" onClick={(e) => this.handleClick(e)}>
					<svg className="svg--moreOptions--icon" width="20" height="20" viewBox="0 0 500 500">
						<path d="M41.013,228.825C18.396,228.825,0,210.438,0,187.818c0-22.608,18.396-41.007,41.013-41.007     
						c22.617,0,41.013,18.398,41.013,41.007C82.025,210.438,63.63,228.825,41.013,228.825z"/>
						<path d="M185.513,228.825c-22.617,0-41.013-18.387-41.013-41.007c0-22.608,18.396-41.007,41.013-41.007     
						c22.613,0,41.013,18.398,41.013,41.007C226.525,210.438,208.126,228.825,185.513,228.825z"/>
						<path d="M334.623,228.825c-22.613,0-41.013-18.387-41.013-41.007c0-22.608,18.399-41.007,41.013-41.007     
						c22.614,0,41.013,18.398,41.013,41.007C375.636,210.438,357.237,228.825,334.623,228.825z"/>
					</svg>
			  </button>}>
				<div>Report</div>
			</Popup>
		)
	}
}


			

	