import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import { motion } from "framer-motion";
const MoviesList = () => {
  const { filteredMovies } = useContext(MovieContext);

  return (
    <section className="movies-list__container">
      {filteredMovies.map((movie) => {
        const { id, backdrop_path, title, vote_average } = movie;
        return (
          <motion.article
            key={id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duraction: 0.5 }}
            className="movies-list__card"
          >
            <figure className="movies-list__image">
              <img
                src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                alt={title}
              />
            </figure>
            <div className="movies-list__card-content">
              <h3>{title}</h3>
              <span>{vote_average}</span>
            </div>
          </motion.article>
        );
      })}
    </section>
  );
};

export default MoviesList;
