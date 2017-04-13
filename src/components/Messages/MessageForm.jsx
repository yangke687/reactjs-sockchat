import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MessageForm extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (<div>
			<form onSubmit={this.onSubmit.bind(this)}>
				<input type="text" className="form-control" ref="text" placeholder="Please type your message"/>
			</form>
		</div>);
	}
	onSubmit(evt){
		evt.preventDefault();
		this.props.emit('messageAdded',{
			timestamp: Date.now(),
			text: this.refs.text.value.trim()
		});

		// clear form
		this.refs.text.value = null;
	}
}

export default MessageForm;