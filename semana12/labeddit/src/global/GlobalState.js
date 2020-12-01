import React, { useState, useEffect } from 'react';
import GlobalStateContext from './GlobalStateContext';
import axios from "axios";
import { BASE_URL, HEADERS } from '../constants/requestConfig';

const GlobalState = (props) => {

    const [feed, setFeed] = useState(undefined)

    const states = { feed }
    const setters = { setFeed }

    const data = { states, setters }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;