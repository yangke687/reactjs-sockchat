import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.jsx';

class MessageList extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (<div className="well">
			<h3>Messages</h3>
			{
				this.props.messages.map((message,idx)=>{
					return (
						<Message message={message} key={idx} />
					);
				})
			}
		</div>);
	}
}

export default MessageList;