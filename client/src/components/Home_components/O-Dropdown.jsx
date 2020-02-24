import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import PollutionStats from './PollutionStats';
import { states } from '../../constants/constants.js';

const Dropdown = () => {
  // const states = generateStates;
  // const [selectedCityCard, setSelectedCityCard] = useState([]);
  // const [apiData, setApiData] = useState([]);
  const [dropdownState, setDropdownState] = useState('');
  // const [search, setSearch] = useState('');
  // const [query, setQuery] = useState('');
  // const [apiCityData, setApiCityData] = useState({});
  // const [cityUrl, setCityUrl] = useState('');


  // const handleDropdownChange = event => {
  //   setDropdownState(event.target.value);
  //   setQuery('');
  // };

  // const handleSelectCity = ({ apiCityData: stats, cityUrl }) => {

  //   setSelectedCityCard([...selectedCityCard, { stats, cityUrl }]);
  //   reset();
  // };

  // const reset = () => {
  //   setApiCityData({});
  //   setCityUrl('');
  //   setDropdownState('');
  //   setQuery('');
  //   setSearch('');
  // };

  // const removeCard = card => {
  //   dropdownState === '' ? setDropdownState(' ') : setDropdownState('');
  //   const indexToRemove = selectedCityCard.findIndex(({ stats }) => {
  //     return stats.id === card.stats.id;
  //   });
  //   if (indexToRemove === -1) {
  //     reset();
  //     return;
  //   }
  //   selectedCityCard.splice(indexToRemove, 1);
  //   setSearch('');
  // };

  // // This useEffect retrieves an array of all supported cities in a state
  // // when the user chooses a state from the dropdown box. The cities array
  // // is saved to the apiData state
  // useEffect(() => {
  //   if (!dropdownState) return;

  //   const getApiData = async () => {
  //     const { data } = await axios.get(`/api/${dropdownState}`);
  //     setApiData(data.map(({ city }) => city));
  //   };
  //   getApiData();
  // }, [dropdownState]);

  // const handleSearchbarChange = event => {
  //   setSearch(event.target.value);
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   setQuery(search);
  // };

  // useEffect(() => {
  //   if (
  //     !query ||
  //     selectedCityCard.some(
  //       ({ stats }) =>
  //         stats.id ===
  //         `${query[0].toUpperCase() +
  //           query.slice(1, query.length)}-${dropdownState}`
  //     )
  //   ) {
  //     return;
  //   }
  //   const fetchCityData = async () => {
  //     const requests = [
  //       axios.get(`/api/${dropdownState}/${query}`),
  //       axios.get(
  //         `/image/${query
  //           .toLowerCase()
  //           .split(' ')
  //           .join('-')}`
  //       )
  //     ];
  //     const [
  //       { data: pollutionData },
  //       { data: cityPicData }
  //     ] = await Promise.all(requests);
  //     setApiCityData({ ...pollutionData, city: query, state: dropdownState });
  //     setCityUrl(cityPicData);
  //   };

  //   fetchCityData();
  // }, [query]);

  // const { tp, pr, hu, ws, wd, ic } = apiCityData;

  return (
    <div className="top-banner">
      <div className="dropdown-titles">
        <h1>Check Your Air Quality</h1>
        <h5>Discover real-time air quality and solutions anywhere in the US</h5>
      </div>
      <div className="center-container">
        <label htmlFor="dropdown"></label>
        <select
          value={dropdownState}
          id="dropdown"
          // onChange={handleDropdownChange}
        >
          <option value={null}>State</option>
          {/* {states.map((state, index) => {
            return (
              <option key={index} value={state}>
                {state}
              </option>
            );
          })} */}
        </select>
        {/* <Searchbar
          handleSearchbarChange={handleSearchbarChange}
          handleSubmit={handleSubmit}
          cities={apiData}
          search={search}
        /> */}
      </div>
{/* 
      <div className="buttons-div">
        <button onClick={handleSubmit} id="checkCity">
          CHECK CITY
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
            weather={{ tp, pr, hu, ws, wd, ic }}
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
      </div> */}
    </div>
  );
};
export default Dropdown;
