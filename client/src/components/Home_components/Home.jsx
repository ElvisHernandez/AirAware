import React from 'react';
import Dropdown from './Dropdown';
import Searchbar from './Searchbar'
import {ApiProvider} from '../context/ApiContext'

const Home = () => {
  return (
    <div className="home">
      <div className="center-container">
        <ApiProvider>
          <Dropdown />
          <Searchbar />
        </ApiProvider>
      </div>
    </div>
  );
};

export default Home;
