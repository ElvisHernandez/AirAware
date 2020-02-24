import React, {useState, createContext, useEffect, useReducer} from 'react';
import axios from 'axios'

export const ApiContext = createContext();

export const ApiProvider = ({children}) => {
    const [dropdownState, setDropdownState] = useState('');
    const [apiCityList, setApiCityList] = useState([])
    
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [apiCityData, setApiCityData] = useState({});
    const [cityUrl, setCityUrl] = useState('');
    
    const [selectedCityCard, setSelectedCityCard] = useState(JSON.parse(sessionStorage.getItem("objectInStorage")) ||[]);

    useEffect(() => {
      sessionStorage.setItem('objectInStorage', JSON.stringify(selectedCityCard))
    }, [selectedCityCard])
    
    const handleSubmit = event => {
        event.preventDefault();
        setQuery(search);
    };

    const reset = () => {
        setApiCityData({});
        setCityUrl('');
        setDropdownState('');
        setQuery('');
        setSearch('');
    };

    const handleSelectCity = ({ apiCityData: stats, cityUrl }) => {
        setSelectedCityCard([...selectedCityCard, { stats, cityUrl }]);
        reset();
    };

    const removeCard = card => {
        dropdownState === '' ? setDropdownState(' ') : setDropdownState('');
        const indexToRemove = selectedCityCard.findIndex(({ stats }) => {
        return stats.id === card.stats.id;
        });
        if (indexToRemove === -1) {
        reset();
        return;
        }
        selectedCityCard.splice(indexToRemove, 1);
        setSearch('');
    };

  // This useEffect retrieves an array of all supported cities in a state
  // when the user chooses a state from the dropdown box. The cities array
  // is saved to the apiData state
  useEffect(() => {
    if (!dropdownState) return;

    const getApiData = async () => {
      const { data } = await axios.get(`/api/${dropdownState}`);
      setApiCityList(data.map(({ city }) => city));
    };
    getApiData();
  }, [dropdownState]);

  // This useEffect retrieves the pollutions stats and city pic
  // url for a specified city when the datalist form is submitted.
  useEffect(() => {
    if (
      !query ||
      selectedCityCard.some(
        ({ stats }) =>
          stats.id ===
          `${query[0].toUpperCase() +
            query.slice(1, query.length)}-${dropdownState}`)
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
    };

    fetchCityData();
  }, [query]);
 
    return(
        <ApiContext.Provider value={{
            handleSubmit, handleSelectCity,
            removeCard,
            selectedCityCard,
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
