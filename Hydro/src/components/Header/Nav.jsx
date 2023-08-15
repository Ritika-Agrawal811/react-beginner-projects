import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  return (
    <nav className="text-white flex md:w-5/6 text-md lg:text-lg font-bold justify-between">
      <div className="text-2xl md:hidden">
        <GiHamburgerMenu />
      </div>
      <div className="hidden md:flex items-center w-full justify-between">
        <ul className="flex items-center gap-6 ">
          <li className="duration-75 hover:text-red-600">
            <a href="#">Home</a>
          </li>
          <li className="duration-75 hover:text-red-600">
            <a href="#">About</a>
          </li>
          <li className="duration-75 hover:text-red-600">
            <a href="#">Blog</a>
          </li>
          <li className="duration-75 hover:text-red-600">
            <a href="#">Our Work</a>
          </li>
          <li className="duration-75 hover:text-red-600">
            <a href="#">Contacts</a>
          </li>
        </ul>
        <ul className="flex items-center gap-6">
          <li className="duration-75 hover:text-red-600">
            <a href="#">
              <FaFacebookSquare />
            </a>
          </li>
          <li className="duration-75 hover:text-red-600">
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li className="duration-75 hover:text-red-600">
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li className="bg-red-600 border-2 border-red-600 duration-300 hover:bg-transparent hover:text-red-600 px-6 py-2 rounded-full">
            <a className="font-normal" href="#">
              Sign in / Join
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
