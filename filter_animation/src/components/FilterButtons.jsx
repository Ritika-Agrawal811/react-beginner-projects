import { genres } from "../utils";
import { useState, useContext } from "react";
import MovieContext from "../context/MovieContext";

const FilterButtons = () => {
  const [tabActive, setTabActive] = useState(0);
  const { popularMovies, setFilteredMovies } = useContext(MovieContext);

  const handleClickFilter = (id) => {
    setTabActive(id);
    const filteredMovies = popularMovies.filter((movie) =>
      id == 0 ? true : movie.genre_ids.includes(id)
    );
    setFilteredMovies(filteredMovies);
  };

  return (
    <section className="filter-buttons__container">
      {genres.map((item) => {
        const { id, name } = item;
        return (
          <button
            onClick={() => handleClickFilter(id)}
            key={id}
            className={`filter-button ${tabActive === id ? "active" : ""}`}
          >
            {name}
          </button>
        );
      })}
    </section>
  );
};

export default FilterButtons;
