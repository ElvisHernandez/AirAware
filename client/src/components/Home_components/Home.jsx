import React, {useContext} from 'react';
import Dropdown from './Dropdown';
import Searchbar from './Searchbar'
import PollutionStats from './PollutionStats'
import {ApiContext} from '../context/ApiContext'

const Home = () => {
  const { handleSubmit, handleSelectCity,
          removeCard,
          search, setQuery,
          apiCityData,
          cityUrl,
          selectedCityCard } = useContext(ApiContext)
  return (
    <div className="home top-banner">
      <div className="dropdown-titles">
        <h1>Check Your Air Quality</h1>
        <h5>Discover real-time air quality and solutions anywhere in the US</h5>
      </div>
      
      <div className="center-container">
        <Dropdown />
        <Searchbar />
      </div>
      
      <div className="buttons-div">
        <button onClick={handleSubmit}  
          id="checkCity"> CHECK CITY
        </button>
        <button
          disabled={!apiCityData.id}
          className={apiCityData.id ? 'enabledButton' : 'disabledButton'}
          id="compare-cities"
          onClick={() => handleSelectCity({ apiCityData, cityUrl })}
        >
          COMPARE CITIES
        </button>
      </div>

      <div className="center-container">
        {selectedCityCard.map(card => (
          <PollutionStats
            key={card.stats.id}
            stats={card.stats}
            cityUrl={card.cityUrl}
            remove={removeCard}
            // weather={{ tp, pr, hu, ws, wd, ic }}
          />
        ))}
        {apiCityData.id && (
          <PollutionStats
            stats={apiCityData}
            cityUrl={cityUrl}
            handleSelectCity={handleSelectCity}
            remove={removeCard}
          />
        )}
      </div>
    
    </div>
  );
};

export default Home;
