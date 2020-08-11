import React from "react";

const Weather = props => (
	<div className="weather__info">
	 {	
	 	props.city && <h2 className="weather__key"> 
	 		<span> { props.city }, { props.country }</span>
	 	</h2> 
	 }
	 {	
	 	props.date && <h5 className="date"> 
	 		<span> { props.date }</span>
	 	</h5> 
	 }
	 <div>
	 { 	
	 	props.temperature && <h1 className="temp">{ Math.round(props.temperature) }<sup>o</sup>C </h1> 
	 }
	 {
		 props.icon && <img className="img-fluid" src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="weather-img"/>
	 }
	 </div>
	 <div>
			{ 	
				props.feels_like && <p className="pad"><strong>Feels_like:</strong> { Math.round(props.feels_like) }<sup>o</sup>C</p> 
			}
			{ 	
				props.min && <p className="pad"><strong>Min Temp:</strong> { Math.round(props.min) }<sup>o</sup>C</p> 
			}
			{ 	
				props.max && <p className="pad"><strong>Max Temp:</strong> { Math.round(props.max) }<sup>o</sup>C</p> 
			}
	 </div>
	 { 	
	 	props.description && props.humidity && props.wind &&  
		 	<div className="contains">Conditions:
				 <ul>
					<li> Humidity: { props.humidity }% </li>
					<li> Wind Speed: { props.wind } meter/sec </li> 
					<li> Description: { props.description } </li>
				 </ul>
			 </div> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);

export default Weather;