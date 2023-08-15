import Nav from "./Nav";
import Hero from "./Hero";

const Header = () => {
  return (
    <header>
      <div className="bg-gray-900  px-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4">
          <a className="text-white text-3xl -my-6" href="#">
            Hydro
          </a>
          <Nav />
        </div>
      </div>
      <Hero />
    </header>
  );
};

export default Header;
