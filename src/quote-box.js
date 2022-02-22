import React from "react";
import {quotes} from "./quotes";
import Button from "./button";
import TweetMe from "./tweet-me";



class QuoteBox extends React.Component{
	constructor(props){
	super(props);
		this.state = {
			randNum: Math.round(Math.random() * (quotes.length - 1))
		}
		this.handleClick = this.handleClick.bind(this);		
	}
	handleClick(){
		this.setState({
       		randNum: Math.round(Math.random() * (quotes.length - 1))
		});	
		console.log(this.state.randNum);
	};
	
	render(){
	  const tweetQuote = "https://twitter.com/intent/tweet?text=" + quotes[this.state.randNum].quote + " - " + quotes[this.state.randNum].author;		
		return(
			<div id="quote-box">
        <h1 id="text">{quotes[this.state.randNum].quote}</h1>
        <div id="toolbar">
        	<h3 id="author">{quotes[this.state.randNum].author}</h3>          
        	<Button handleClick={this.handleClick} />
        	<TweetMe tweetQuote={tweetQuote} /> 
        </div>        
      </div>
		)
	}
}
export default QuoteBox;