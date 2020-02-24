import React, {useState, useContext} from 'react';
import {states} from '../../constants/constants.js'
import { ApiContext } from '../context/ApiContext.jsx'

const Dropdown = () => {
    const {dropdownState, setDropdownState} = useContext(ApiContext)
    
    return(
        <>
            <label htmlFor="dropdown"></label>
            <select
                value={dropdownState}
                id="dropdown"
                onChange={e => setDropdownState(e.target.value)}
            >
                { <option value={null}>State</option> }
                {states.map((state, index) => {
                return (
                    <option key={index} value={state}>
                    {state}
                    </option>
                );
                })} 
            </select>
        </>
    )
}

export default Dropdown;