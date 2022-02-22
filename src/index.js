import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import QuoteBox from "./quote-box";

class Presentational extends React.Component {
	constructor(props){
       super(props);
	}
	render(){
		return(
			<div>               
        <QuoteBox />
			</div> 
		);
	}
}

ReactDOM.render(<Presentational />, document.getElementById("root"));