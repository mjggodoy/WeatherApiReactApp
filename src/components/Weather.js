import React from 'react';

function Weather({result}) {
    console.log(result.response);
    return(
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>Weather Result</h2>
            </div>
            <p className="temperatura">Timezone: {result.response}</p>
        </div>
    )
}

export default Weather;
