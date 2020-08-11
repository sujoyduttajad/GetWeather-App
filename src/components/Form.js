import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="Your City Name"/>
		<button className="setbutton">Search</button>
	</form>
);

export default Form;