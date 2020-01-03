import React, {useState} from 'react';
import Header from './components/Header'
import Form from './components/Form';
import Error from './components/Error';

function App() {
  
  const [search, saveSearch] = useState({
    city: "",
    country: "",
    error: false,
  });

  const informationRetrieve = information => {
    if (information.city === '' || information.country === '') {
      saveSearch({error: true});
      return;
    }
    saveSearch({city: information.city, country: information.country, error: false});
  }

  const retrieveWeatherApiInformation =  async() => {
    if (search.country === '' || search.city === '') {
      return;
    }
    const token = '';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${search.city},${search.country}&APPID=${token}`;
    let response = await fetch(url);
    let responseJSONObject = await response.json();
  }

  let component;
  if(search.error) {
    component = <Error
      message = {'Please, include a country and a city!'}
    />
  } else {
    retrieveWeatherApiInformation();
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
