import React, { useState } from 'react';
import GlobalStateContext from './GlobalStateContext';

const GlobalState = (props) => {

    const [selectedPost, setSelectedPost] = useState({})

    const states = { selectedPost }
    const setters = { setSelectedPost }

    const data = { states, setters }

    console.log(selectedPost)

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;