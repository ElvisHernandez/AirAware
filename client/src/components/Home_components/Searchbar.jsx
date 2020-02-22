import React from 'react';


const Searchbar = ({handleSubmit,handleSearchbarChange,cities, search}) => {
  return (
    <form id="searchbar-form" onSubmit={handleSubmit}>                 
      <input 
      id ="citySearchbar" 
      list="cityList" 
      placeholder="City"
      onChange={handleSearchbarChange}
      value={search}
      >
      </input>
      <datalist id="cityList">
        {cities.map((state, index) => {
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
