import FilterButtons from "./components/FilterButtons";
import MoviesList from "./components/MoviesList";
import { MovieDataProvider } from "./context/MovieContext";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <main className="app__container">
      <MovieDataProvider>
        <FilterButtons />
        <AnimatePresence>
          <MoviesList />
        </AnimatePresence>
      </MovieDataProvider>
    </main>
  );
}

export default App;
