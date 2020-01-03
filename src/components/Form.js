import React, {useState} from 'react';


function Form({informationRetrieve}){   
    
    const [search, saveSearch] = useState({
        city: "",
        country: ""
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
                <input type="text" name="city" onChange={handleChange}/>
                <label htmlFor="city">City</label>
            </div>
            
            <div className="input-field col s12">
                <select name="country" onChange={handleChange}>
                    <option value="">Select a country...</option>
                    <option value="US">US</option>
                    <option value="MX">Mexico</option>
                    <option value="ES">Spain</option>
                    <option value="UK">United Kingdom</option>
                    <option value="FR">France</option>
                    <option value="IT">Italy</option>
                    <option value="GE">Germany</option>
                </select>
            </div>
            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4" value="GET WEATHER"></input>
            </div>
        </form>
    );
}
export default Form;