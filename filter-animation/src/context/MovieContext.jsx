import { createContext, useState, useEffect } from "react";
import client from "../apis/movie";

const MovieContext = createContext({});

export const MovieDataProvider = ({ children }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await client.get("/movie/popular?page=1");
        console.log(data.results);
        setPopularMovies(data.results);
        setFilteredMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        popularMovies,
        filteredMovies,
        setFilteredMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
