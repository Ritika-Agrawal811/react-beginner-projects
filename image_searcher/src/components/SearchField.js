import { useContext, useState } from "react";
import ImageContext from "../context/ImageContext";

const SearchField = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const { setQueryEntry } = useContext(ImageContext);

  const handleSearchInput = (e) => {
    if (e.key === "Enter") {
      setQueryEntry(searchTitle);
      setSearchTitle("");
    }
  };

  const handleSearchSubmit = () => {
    setQueryEntry(searchTitle);
    setSearchTitle("");
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex px-4"
    >
      <label
        htmlFor="search"
        className="absolute search-label"
      >
        Search Images
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-sm
        w-full indent-2 p-2.5 outline-none rounded-tl rounded-bl
        focus:border-blue-500 focus:ring-2"
        type="search"
        id="search"
        autoComplete="off"
        placeholder="Search for images"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
        onKeyDown={handleSearchInput}
      />
      <button
        className="bg-blue-700 px-6 py-2.5 text-white rounded-tr rounded-br 
        focus:ring-2 focus:ring-blue-300
        disabled:bg-gray-400 hover:bg-blue-500"
        disabled={!searchTitle}
        onClick={handleSearchSubmit}
      >
        Search
      </button>
    </form>
  );
};

export default SearchField;
