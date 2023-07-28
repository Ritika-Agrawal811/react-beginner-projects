import { createContext, useState } from "react";
import useAxios from "../hooks/useAxios";

const ImageContext = createContext({});

export const ImageProvider = ({ children }) => {
  const [queryEntry, setQueryEntry] = useState("");
  const { response, isLoading, error } = useAxios(
    `/search/photos?query=${queryEntry}&per_page=20&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  );

  console.log(response);

  return (
    <ImageContext.Provider
      value={{
        response,
        isLoading,
        error,
        queryEntry,
        setQueryEntry,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContext;
