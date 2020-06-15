import React from 'react';
import './App.css';
import Weather from './Component/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Form from './Component/form';

//OpenWeatherMap API Key
//Kindly replace the key with your API key from openweathermap website
const API_KEY = '2345b6b9a94b99293c96e0ab1c16618e';

class App extends React.Component{
    //declaring states
    state = {
        city:undefined,
        country:undefined,
        temp:undefined,
        humidity:undefined,
        tempMin:undefined,
        tempMax:undefined,
        description:'',
        icon: undefined,
        bgs: '',
        error:undefined
    }

    //fetching data from API and updating states
    //default behaviour is prevented to avoid refreshing of the page while submiting the form
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();

        //if city and country is obtained from form component
        if (city && country){
            //if city is not found in the OpenWeatherMap directory
            // eslint-disable-next-line (ignores warning)
            if (data.cod == 404){
                this.setState({
                    city:undefined,
                    country:undefined,
                    temp:undefined,
                    tempMin:undefined,
                    tempMax:undefined,
                    humidity:undefined,
                    error:'City not found'
                })
            }
            //if data is fetched from api properly,
            else {
                this.setState({
                    city: data.name,
                    country: data.sys.country,
                    temp: data.main.temp,
                    tempMin: data.main.temp_min,
                    tempMax: data.main.temp_max,
                    humidity: data.main.humidity,
                    description: data.weather[0].description,
                    error: ''
                })
                
            //calling functions  
                this.dayOrNight(data.dt, data.sys.sunrise, data.sys.sunset, data.timezone);
                this.returnTime(data.timezone);
                this.getIcon(data.weather[0].main);
                this.setBgImg();
            }
        }
        else{
            //if form is submitted without city name or country name
            this.setState({
                city: undefined,
                country: undefined,
                temp: undefined,
                tempMin:undefined,
                tempMax:undefined,
                humidity: undefined,
                description: '',
                error: 'Please Enter the city and country'
            })             
        }
    }

    //returns local time of the city by shifting timezone
    returnTime(offset){
        let date = new Date();
        let utc = date.getTime()+(date.getTimezoneOffset()*60000);
        let shiftedDate = new Date(utc+(offset*1000));
        let amPm = shiftedDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        this.setState({time: amPm});
    }

    //returns Hour of local time of the city by shifting timezone (called for last time from api, sunset time and sunrise time)
    shiftedHour(time, offset){
        let date = new Date(time*1000);
        let utc = date.getTime()+(date.getTimezoneOffset()*60000);
        let shiftedDate = new Date(utc+(offset*1000));
        let shiftedHour = shiftedDate.getHours();
        return shiftedHour;
    }

    //updates day/night by comparing current hour to sunrise time and sunset time
    dayOrNight(lastTime, sunriseTime, sunsetTime, timeZone){

        let lastHour = this.shiftedHour(lastTime, timeZone);
        let sunriseHour = this.shiftedHour(sunriseTime, timeZone);
        let sunsetHour = this.shiftedHour(sunsetTime, timeZone);

        (lastHour>sunriseHour && lastHour<sunsetHour) ? this.setState({mode: 'day'}) : this.setState({mode: 'night'})
    }


    //selecting weather icon
    getIcon(desMain){
        //some icons uses mode (day/night) to select icon with sun/moon.
        //icon state directly declares the class in icon library
        switch(desMain){
            case 'Thunderstorm':
                this.setState({icon: 'wi-thunderstorm', bgs: 'rain'}) 
                //bgs: expand as background selector
                //same bgs is selected for multiple icons (eg: bgs is 'rain' for 'Thunderstorm', 'Drizzle' and 'Rain')
                break;
            case 'Drizzle':
                this.setState({icon:'wi-sleet', bgs: 'rain'})
                break;
            case 'Rain':
                this.setState({icon: 'wi-storm-showers', bgs: 'rain'})
                break;
            case 'Snow':
                this.setState({icon: 'wi-snow', bgs: 'snow'})
                break;
            case 'Clear':
                if (this.state.mode === 'day'){
                    this.setState({icon: 'wi-day-sunny', bgs: 'clear'})
                }
                else if (this.state.mode === 'night') {
                    this.setState({icon: 'wi-night-clear', bgs: 'clear'})}
                break;
            case ('Mist' || 'Smoke' || 'Haze' || 'Dust' || 'Fog' || 'Sand' || 'Dust' || 'Ash' || 'Squall' || 'Tornado'):
                this.setState({icon: 'wi-fog', bgs: 'fog'})
                break;
            default:
                if (this.state.mode === 'day'){
                    this.setState({icon: 'wi-day-fog', bgs: 'cloud'})
                }
                else if (this.state.mode === 'night') {
                    this.setState({icon: 'wi-night-fog', bgs: 'cloud'})}
        }
    }

    //updating state to select background image with respect to mode(day/ =night) and weather (this will be passsed as classname)
    setBgImg(){
        if (this.state.mode === 'day'){
            switch(this.state.bgs){
                case 'rain' : this.setState({bgImg: 'dayRain'}); break;
                case 'snow' : this.setState({bgImg: 'daySnow'}); break;
                case 'clear' : this.setState({bgImg: 'dayClear'}); break;
                case 'fog' : this.setState({bgImg: 'dayFog'}); break;
                default: this.setState({bgImg: 'dayCloud'});
            }}
        else if(this.state.mode === 'night'){
            switch(this.state.bgs){
                case 'rain' : this.setState({bgImg: 'nightRain'}); break;
                case 'snow' : this.setState({bgImg: 'nightSnow'}); break;
                case 'clear' : this.setState({bgImg: 'nightClear'}); break;
                case 'fog' : this.setState({bgImg: 'nightFog'}); break;
                default: this.setState({bgImg: 'nightCloud'});
            }
        }
    
    }
    

    render(){
        return(
            <div className={`${this.state.bgImg} App`}>
                <Form getWeather= {this.getWeather} />
                <Weather
                    city={this.state.city}
                    country={this.state.country}
                    temp={this.state.temp}
                    tempMin={this.state.tempMin}
                    tempMax={this.state.tempMax}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    icon={this.state.icon}
                    time={this.state.time}
                    error={this.state.error}
                />
            </div>
        )
    }
}

export default App;