import React from "react";

const Form = props => (
	
	<form onSubmit={props.getWeather}>
		<div className="input-group mb-3">
				<input className="input-color form-control" type="text" name="city" placeholder="Your City Name"/>
			<div className="input-group-append">
				<button className="btn setbutton">Search</button>	
			</div>
		</div>	
	</form>
	
);

export default Form;