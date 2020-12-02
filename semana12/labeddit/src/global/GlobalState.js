import React, { useState } from 'react';
import GlobalStateContext from './GlobalStateContext';

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