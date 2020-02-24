import React, {useContext} from 'react';
import {ApiContext} from '../context/ApiContext'


const Searchbar = () => {
  const {apiCityList ,search, setSearch, setQuery} = useContext(ApiContext)

  return (
    <form id="searchbar-form" onSubmit={e => {
      e.preventDefault()
      setQuery(search)
    }}>                 
      <input 
      id ="citySearchbar" 
      list="cityList" 
      placeholder="City"
      onChange={e => {setSearch(e.target.value)}}
      value={search}
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
