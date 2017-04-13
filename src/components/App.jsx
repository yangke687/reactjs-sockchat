import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MessageList from './Messages/MessageList.jsx';
import MessageForm from './Messages/MessageForm.jsx';
import UserList from './Users/UserList.jsx';
import UserForm from './Users/UserForm.jsx';
import io from 'socket.io-client';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}

	componentWillMount(){
		this.socket = io('http://localhost:3000');
		this.socket.on('connect',this.connect.bind(this));
	}

	connect(){
		this.setState({status:'connected'});
		console.log('connected:'+this.socket.id);
	}

	render(){
		return(
			<div className="row">
				<div className="col-md-4">
					<UserList />
				</div>
				<div className="col-md-8">
					<MessageList />
					<MessageForm />
				</div>
			</div>
		)
	}
}

export default App