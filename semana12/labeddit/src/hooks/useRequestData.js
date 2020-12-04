import { useState, useEffect } from "react";
import axios from "axios";

export const useRequestData = (url, requestHeaders, inicialState) => {
    const [data, setData] = useState(inicialState);

    const getData = () => {
        axios
        .get(url, requestHeaders)
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
    useEffect(() => {
       getData() 
    }, []);

    return { data, getData };
}