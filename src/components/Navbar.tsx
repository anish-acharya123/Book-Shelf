import img from "../assets/logo.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" w-1/6 p-5 flex flex-col justify-between items-center">
      <div className="flex flex-col gap-20 justify-center items-start">
        <figure>
          <Link to="/">
            <img src={img} alt="" className="h-20 w-32" />
          </Link>
        </figure>
        <ul className="flex flex-col gap-4">
          <li className="flex items-center  gap-2">
            <Icon icon="mdi:home" className="h-6 w-6" />
            <a href="" className="font-medium">
              Home
            </a>
          </li>
          <li className="flex items-center  gap-2">
            <Icon icon="ion:search" className="h-6 w-6" />
            <a href="">Search</a>
          </li>
          <li className="flex items-center  gap-2">
            <Icon icon="mingcute:book-5-line" className="h-6 w-6" />
            <a href="">My Shelf</a>
          </li>
        </ul>
      </div>
      <div className="text-gray-400">
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">Terms & Condition</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
