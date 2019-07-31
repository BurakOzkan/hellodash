import React from "react";
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'


const OWM_API_KEY="e30d47356db578e746eb3926c4cd390e";
class App extends React.Component{
  
state = {
  temperature: undefined,
  city: undefined,
  country: undefined,
  humidity: undefined,
  description: undefined,
  error: undefined  
}
componentDidMount(){
  window.JFCustomWidget.subscribe("ready",  ()=>{
    console.log("Widget is ready");
    
  }
  )
  window.JFCustomWidget.subscribe("submit",  ()=>{
    var result = {}
    //this part will be used if your field is required. If your widget is required valid
    //property will be expected before form can be submitted

    
    result.valid = true;
    //this is your field result. You are expected to send value property as string
    result.name = "mahmut";
    result.value = "my precious data"
    //most probably you will call sendSubmit method
    window.JFCustomWidget.sendSubmit(result)
  }
  )

  

}

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${OWM_API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city && country){
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
       });
    }else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the value."
      })
    }


    
  }
  
    

  render(){
    return(
      <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              
              <div className="col-xs-5 title-container">
                <Titles />
                
                
              </div>
              
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather} />
                <Weather 
                  temperature={this.state.temperature} 
                  humidity={this.state.humidity}
                  city={this.state.city}
                  country={this.state.country}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        
    );
  }

}

export default App;