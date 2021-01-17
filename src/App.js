
import React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css" //this file is under the folder node_modules
import "weather-icons/css/weather-icons.css"
import WeatherComp from './components/WeatherComp';
//api call api.openweathermap.org/data/2.5/weather?q=London&appid={API key}

const API_key = "bba35184e0fbcba66550ea1e8af36eca"

class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       city: undefined,
       country: undefined
    }
    this.getWeather()
  }
  //create a method to get weather,不理解async和await用法
  getWeather = async() => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_key}`)
    const response = await api_call.json()

    console.log(response)
  }
  render() {
    return (
      <div className="App">
        <WeatherComp></WeatherComp>
      </div>
    )
  }
}


export default App;
