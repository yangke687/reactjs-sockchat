import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Message extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const {message} = this.props;
		var formattedTime = this.formatTime(message.timestamp);
		return (<div className="message">
			<strong>{message.user}</strong> { formattedTime } - { message.text }
		</div>);
	}
	formatTime(timestamp){
		console.log(timestamp);
		var dt = new Date();
        dt.setTime(timestamp);
		var hours = dt.getHours();
		var mins = dt.getMinutes();
		var secs = dt.getSeconds();
		if(hours<10){
			hours = '0' + hours;
		}
		if(mins<10){
			mins = '0' + mins;
		}
		if(secs<10){
			secs = '0' + secs;
		}
		return hours + ':' + mins + ':' + secs;
	}
}

export default Message;