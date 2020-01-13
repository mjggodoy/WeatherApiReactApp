import React from 'react';

function Weather({result}) {
    const timezone = result.timezone.response;
    const currently = result.currently.currently;
    if(!currently) return null;
    const transformFarenheitToCelsius  = (temperature) => {
        return (temperature - 32)*(5/9);
    }

    console.log(currently);
    return(
        <div className="card-panel white col s12">
            <div className="black-text">
            <h3>Weather in {timezone}</h3>
            <p>Avg. temperature:</p>
            <p className="temperatura">
                {parseInt(transformFarenheitToCelsius(currently.apparentTemperature))}<span>&#8451;</span>
            </p>
            <p>Summary: {currently.summary}</p>
            <p>Humidity: {parseInt(currently.humidity)}<span>&#x25;</span></p>
            <p>Prob. of precipitations: {parseInt(currently.precipProbability)}</p>  
            </div>
        </div>
    )
}

export default Weather;
