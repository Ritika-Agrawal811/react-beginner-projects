import Header from "./components/Header";
import SearchField from "./components/SearchField";
import ImageContainer from "./components/ImageContainer";

import { ImageProvider } from "./context/ImageContext";

function App() {
  return (
    <>
      <ImageProvider>
        <Header>
          <SearchField />
        </Header>
        <ImageContainer />
      </ImageProvider>
    </>
  );
}

export default App;
