import React from "react";


class Weather extends React.Component{	


	render(){
		
		return(
		<div className="weather__info">
	 {	
	 	this.props.city && this.props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { this.props.city }, { this.props.country }</span>
	 	</p> 
	 }
	 { 	
	 	this.props.temperature && <p className="weather__key"> Temperature: 
	 		<span className="weather__value"> { this.props.temperature }	</span>
	 	</p> 
	 }
	 { 	
	 	this.props.humidity && <p className="weather__key"> Humidity: 
	 		<span className="weather__value"> { this.props.humidity } </span>
	 	</p> 
	 }
	 { 	
	 	this.props.description && <p className="weather__key"> Conditions: 
	 		<span className="weather__value"> { this.props.description } </span>
	 </p> 
	 }

	 { 
	 	this.props.error && <p className="weather__error">{ this.props.error }</p>  
	 }
	</div>
	);
}
componentDidUpdate(){
	const condition = this.props.description === 'clear sky';

	if(condition){
		document.getElementsByClassName("title-container")[0].style.background = "url(\"https://www.studereducation.com/wp-content/uploads/2014/07/clear-sky-over-green-grass-wallpaper.jpg\") center center repeat";
		}
}

}


export default Weather;
