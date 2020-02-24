import React, {useContext} from 'react';
import Dropdown from './Dropdown';
import Searchbar from './Searchbar'
import {ApiContext} from '../context/ApiContext'

const Home = () => {
  const {setQuery} = useContext(ApiContext)
  return (
    <div className="home">
      <div className="dropdown-titles">
        <h1>Check Your Air Quality</h1>
        <h5>Discover real-time air quality and solutions anywhere in the US</h5>
      </div>
        <div className="center-container">
            <Dropdown />
            <Searchbar />
        </div>
        <div className="buttons-div">
          <button 
            // onClick={e => {
            // e.preventDefault()
            // setQuery(search)}}  
            id="checkCity"> CHECK CITY
          </button>
          <button
            // disabled={!apiCityData.id}
            // className={apiCityData.id ? 'enabledButton' : 'disabledButton'}
            id="compare-cities"
            // onClick={() => handleSelectCity({ apiCityData, cityUrl })}
          >
            COMPARE CITIES
          </button>
        </div>
    </div>
  );
};

export default Home;
