
import React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css" //this file is under the folder node_modules, this project uses bootstrap
import "weather-icons/css/weather-icons.css" // this project uses weather icon, import this to use className
import WeatherComp from './components/WeatherComp'; // import child component
import Form from './components/Form'


const API_key = "bba35184e0fbcba66550ea1e8af36eca"

class App extends React.Component{
  //设置静态数据
  constructor(props) {
    super(props)
    this.state = {
       city: undefined,
       country: undefined,
       icon: undefined,
       celsius: undefined,
       temp_max: undefined,
       temp_min: undefined,
       description: "",
       error: false
       //  main: undefined,
    }
  

    this.weatherIcon = { //不同的key，对应的className的value不同，静态
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }
  }

  //create a method to get weather,不理解async和await用法
  getWeather = async(e) => {
    e.preventDefault()

    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    if(city) {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`)
    const response = await api_call.json() //把获得的数据转为JSON格式

    console.log(response) //在console看到获取的所有数据
    
    this.setState({
      city: response.name,
      country: response.sys.country,
      celsius: this.calCelsius(response.main.temp),
      temp_max: this.calCelsius(response.main.temp_max),
      temp_min: this.calCelsius(response.main.temp_min),
      description: response.weather[0].description
    })
    this.getWeatherIcon(this.weatherIcon,response.weather[0].id)
    } else {
      this.setState({
        error: true
      })
    }
    
  }
  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15)
    return cell
  }

  getWeatherIcon(icons,rangeID) {
    switch(true){
      case rangeID >= 200 && rangeID <= 232: 
        this.setState({
          icon: this.weatherIcon.Thunderstorm
        });
        break;
      case rangeID >= 300 && rangeID <= 321:
        this.setState({
          icon: this.weatherIcon.Drizzle        
        });
        break;
      case rangeID >= 500 && rangeID <= 531:
        this.setState({
          icon: this.weatherIcon.Rain        
        });
        break;
      case rangeID >= 600 && rangeID <= 622:
        this.setState({
          icon: this.weatherIcon.Snow        
        });
        break;
      case rangeID >= 701 && rangeID <= 781:
        this.setState({
          icon: this.weatherIcon.Atmosphere        
        });
        break;
      case rangeID === 800:
        this.setState({
          icon: this.weatherIcon.Clear        
        });
        break;
      case rangeID >= 801 && rangeID <= 804:
        this.setState({
          icon: this.weatherIcon.Clouds        
        });
        break;
      default:
        this.setState({
          icon: this.weatherIcon.Clouds
        })
      
    }
  }
  

  //获取数据并且处理完后，渲染
  render() {
    const {city, country, celsius, temp_max,temp_min, description, icon } = this.state
    return (
      <div className="App">
        <Form loadweather = {this.getWeather} error = {this.state.error}></Form> 
        <WeatherComp 
        city = {city} 
        country = {country}
        celsius = {celsius}
        temp_max = {temp_max}
        temp_min = {temp_min}
        description = {description}
        icon = {icon}></WeatherComp>
      </div>
    )
  }
}


export default App;
