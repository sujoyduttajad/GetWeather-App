import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "./App.css";
import moment from 'moment';
import {API_KEY} from "./lib/API_KEY"

const KEY = API_KEY; 

class App extends React.Component {

  //Initializing the state 
  state = {
    temperature: undefined,
    icon: undefined,
    city: undefined,
    country: undefined,
    date: undefined,
    feels_like: undefined,
    temp_min: undefined,
    temp_max: undefined,
    wind_speed: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  
  //#---------Using the getWeather function fetching the API and parsing it with JSON---------- 
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`);
    const data = await api_call.json();
    
    console.log(data);
    //#------------Using Moment.js - a framework that lets you play with date and time, here it is used to show the local Date & Time-------------  
    const day = moment().format('LLLL');
     
    //#----------Using setState to conditionally render the data---------------------
    if (city && data.cod !== 404) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        date: day,
        icon: data.weather[0].icon,
        feels_like: data.main.feels_like,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        wind_speed: data.wind.speed,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        date: undefined,
        icon: undefined,
        feels_like: undefined,
        temp_min: undefined,
        temp_max: undefined,
        wind_speed: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5 col-sm-12 col-xs-12 title-container">
                  <Titles />
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature = {this.state.temperature} 
                    date = {this.state.date}
                    icon = {this.state.icon}
                    city = {this.state.city}
                    country = {this.state.country}
                    feels_like = {this.state.feels_like}
                    min = {this.state.temp_min}
                    max = {this.state.temp_max}
                    humidity = {this.state.humidity}
                    wind = {this.state.wind_speed}
                    description = {this.state.description}
                    error = {this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;