import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (dataUrl) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  axios.defaults.baseURL = "https://api.unsplash.com";

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (url) => {
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setResponse(response.data.results);
          setError(null);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
          setResponse([]);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetchData(dataUrl);

    const cleanUp = () => {
      console.log("clean up");
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [dataUrl]);

  return { response, isLoading, error };
};

export default useAxios;
