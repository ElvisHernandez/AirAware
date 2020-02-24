import React, {useContext} from 'react';
import {ApiContext} from '../context/ApiContext'


const Searchbar = () => {
  const {handleSubmit, apiCityList ,search, setSearch, setQuery} = useContext(ApiContext)

  return (
    <form id="searchbar-form" onSubmit={handleSubmit}>                 
      <input 
      id ="citySearchbar" 
      list="cityList" 
      placeholder="City"
      onChange={e => {setSearch(e.target.value)}}
      // value={search}
      >
      </input>
      <datalist id="cityList">
        {apiCityList.map((state, index) => {
          return (
            <option key={index} value={state}>
              {state}
            </option>
          );
        })}
      </datalist>
    </form>
  );
};
export default Searchbar;
