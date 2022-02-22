import React from "react";

class TweetMe extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<a id="tweet-quote" href={this.props.tweetQuote} target="_blank"><button id="tweet-me">Tweet quote</button></a>
			)
	}
}
export default TweetMe;