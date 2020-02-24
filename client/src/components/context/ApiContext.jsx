import React, {useState, createContext, useEffect, useReducer} from 'react';
import axios from 'axios'
// import AppReducer from './AppReducer'


// const initialState = {
//     cityData: {
//         id: '',
//         city: '',
//         state: '',
//         picSrc: '',
//         stats: {},
//     }
// }


export const ApiContext = createContext();


export const ApiProvider = ({children}) => {
    ///////////////////////////////////////////////////
    // const [state, dispatch] = useReducer(AppReducer, initialState)
    const [dropdownState, setDropdownState] = useState('');
    // const [apiData, setApiData] = useState([]);
    const [apiCityList, setApiCityList] = useState([])
    ////////////////////////////////////////////////////
    
    ////////////////////////////////////////////////////
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [apiCityData, setApiCityData] = useState({});
    const [cityUrl, setCityUrl] = useState('');
    ////////////////////////////////////////////////////


  // This useEffect retrieves an array of all supported cities in a state
  // when the user chooses a state from the dropdown box. The cities array
  // is saved to the apiData state
  useEffect(() => {
    if (!dropdownState) return;

    const getApiData = async () => {
      const { data } = await axios.get(`/api/${dropdownState}`);
      setApiCityList(data.map(({ city }) => city));
    //   console.log(data.map(({ city }) => city))
    };
    getApiData();
  }, [dropdownState]);


  useEffect(() => {
    if (!query
    //   !query ||
    //   selectedCityCard.some(
    //     ({ stats }) =>
    //       stats.id ===
    //       `${query[0].toUpperCase() +
    //         query.slice(1, query.length)}-${dropdownState}`)
      ) {return;}
    const fetchCityData = async () => {
      const requests = [
        axios.get(`/api/${dropdownState}/${query}`),
        axios.get(
          `/image/${query
            .toLowerCase()
            .split(' ')
            .join('-')}`
        )
      ];
      const [
        { data: pollutionData },
        { data: cityPicData }
      ] = await Promise.all(requests);
      setApiCityData({ ...pollutionData, city: query, state: dropdownState });
      setCityUrl(cityPicData);
      console.log(pollutionData)
      console.log(cityPicData)
    };

    fetchCityData();
  }, [query]);

    
    return(
        <ApiContext.Provider value={{
            dropdownState, setDropdownState,
            apiCityList,
            search, setSearch,
            query, setQuery,
            apiCityData, setApiCityData,
            cityUrl, setCityUrl
         }}>
            {children}
        </ApiContext.Provider>    
    )
}
