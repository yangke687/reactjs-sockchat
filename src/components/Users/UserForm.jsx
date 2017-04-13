import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class UserForm extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (<div>
			<h3>Chat Login</h3>
			<form onSubmit={this.onSubmit.bind(this)}>
				<input type="text" className="form-control" ref="name" placeholder="choose user name"/>
			</form>
		</div>);
	}
	onSubmit(evt){
		evt.preventDefault();
		var name = this.refs.name.value.trim();
		this.props.setUser({name: name});
		this.props.emit('userJoined',{name: name});
		this.refs.name.value = '';
	}
}

export default UserForm;