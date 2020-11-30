import { useState, useEffect } from "react";
import axios from "axios";

export const useRequestData = (url, requestHeaders, inicialState) => {
    const [data, setData] = useState(inicialState);

    useEffect(() => {
        axios
        .get(url, requestHeaders)
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [url, requestHeaders]);

    console.log(data)
    return data;
}