import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-transparent px-4 pt-4 sticky top-0 z-10 w-full">
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4 items-center">
          <div className="flex items-center">
            <h1 className=" mr-3 text-2xl  font-semibold">WatchWire</h1>
          </div>
          <li>
            <a
              href="/"
              className="text-white-700 hover:text-gray-900 transition duration-300"
              style={{ border: "2px solid", borderRadius: "5px" }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white-700 hover:text-gray-900 transition duration-300"
            >
              Movies
            </a>
          </li>
          <li className="hidden sm:block">
            <a
              href="#"
              className="text-white-700 hover:text-gray-900 transition duration-300"
            >
              TV Shows
            </a>
          </li>
          <li className="hidden sm:block">
            <a
              href="#"
              className="text-white-700 hover:text-gray-900 transition duration-300"
            >
              New & Popular
            </a>
          </li>{" "}
        </ul>
        <ul className="flex space-x-4">
          <li className="hidden sm:block">
            <a
              href="#"
              className="text-white-700 hover:text-gray-900 transition duration-300"
            >
              My List
            </a>
          </li>{" "}
          <li className="hidden sm:block">
            <a
              href="#"
              className="text-white-700 hover:text-gray-900 transition duration-300"
            >
              Browse by Language
            </a>
          </li>
          <li>
            <div
              className="px-2 rounded cursor-pointer"
              style={{ border: "1px solid" }}
            >
              <FontAwesomeIcon icon={faUser} />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
