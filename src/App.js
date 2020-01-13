import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import Form from './components/Form';
import Error from './components/Error';
import Weather from './components/Weather';
import axios from 'axios';

function App() {
  let component;
  const [search, saveSearch] = useState({
    latitude: "",
    longitude: "",
    error: false,
    result: {}
  });

  useEffect(() => {
    if ((search.latitude === null || search.latitude === undefined || (search.latitude === '' ) 
    || (search.longitude === null || search.longitude === undefined || search.longitude === ''))) {
      return;
    }
    const retrieveWeatherApiInformation =  async() => {
      const token = '0fdbd6d8806e2911648fdd7cca76599e';
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = `https://api.darksky.net/forecast/${token}/${search.latitude},${search.longitude}`;
      let response = await  axios.get(proxyurl+url);
      console.log(response.data.timezone);
      response = response.data.timezone ;
      saveSearch({result: {response}});
      
    }
    retrieveWeatherApiInformation();
  }, [search.latitude, search.longitudex]);

  const informationRetrieve = information => {
    if ((information.longitude === null || information.longitude=== undefined || (information.longitude === '' ) 
    || (information.latitude === null || information.latitude === undefined || information.latitude === ''))) {
      saveSearch({error: true});
      return;
    }
    saveSearch({longitude: information.longitude, latitude: information.latitude, error: false});
  }

  if(search.error) {
    component = <Error
      message = {'Please, include a country and a city!'}
    />;
  } else {
    if(search.result != undefined){
    console.log('xuxa', search.result);
    component = <Weather
      result = {search.result}
    />
    }
  }

  return (
    <div className="App">
      <Header
        title = "Weather React app"
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form
                informationRetrieve = {informationRetrieve}
              />
            </div>
            <div className="col s12 m6">
            {component}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
