import React, {useState} from 'react';


function Form({informationRetrieve}){   
    
    const [search, saveSearch] = useState({
        latitude: "",
        longitude: ""
    });

    const handleChange = e => {
        const {name, value} = e.target;
        saveSearch({...search, [name]: value});
    }

    const retrieveWeather = e => {
        e.preventDefault();
        informationRetrieve(search);
    }

    return(
        <form
            onSubmit = {retrieveWeather}
        >
            <div className="input-field col s12">
                <input type="number" name="latitude" onChange={handleChange}/>
                <label htmlFor="latitude">Longitude</label>
            </div>
            
            <div className="input-field col s12">
                <input type="number" name="longitude" onChange={handleChange}/>
                <label htmlFor="longitude">Latitude</label>
            </div>
            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4" value="GET WEATHER"></input>
            </div>
        </form>
    );
}
export default Form;