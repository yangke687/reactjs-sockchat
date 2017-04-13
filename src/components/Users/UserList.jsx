import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class UserList extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (<div>
			<h3>Users {this.props.users.length}</h3>
			<ul className="list-group">
				{
					this.props.users.map((user,idx)=>{
						return (
							<li className="list-group-item" user={user} key={idx}>
								{user.name}
							</li>
						);
					})
				}
			</ul>
		</div>);
	}
}

export default UserList;