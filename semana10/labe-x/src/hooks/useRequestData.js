import { useState, useEffect } from "react";
import axios from "axios";

export const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/aline-dumont'

export const useRequestData = (url, inicialState) => {
  const [data, setData] = useState(inicialState);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return data;
}