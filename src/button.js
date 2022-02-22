import React from "react";

class Button extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<button id="new-quote" onClick={this.props.handleClick}>New quote</button>
			)
	}
}
export default Button;