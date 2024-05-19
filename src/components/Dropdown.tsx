import { useState } from "react";
import Icon_dropdown from "./icons/icon_dropdown";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className="relative inline-block text-left">
    <button
      id="dropdownDefaultButton"
      data-dropdown-toggle="dropdown"
      className={`text-black bg-white border hover:bg-blue-800  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ${isOpen ? 'shadow-md shadow-purple-200 border-blue' : ''}`}
      type="button"
      onClick={handleToggle}
    >
      Dropdown button
    <Icon_dropdown />
    </button>

    {isOpen && (
      <div
        id="dropdown"
        className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44  absolute mt-2"
      >
        <ul
          className="py-2 text-sm text-gray-700 "
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2  hover:text-blue"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:text-blue"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2   hover:text-blue"
            >
              Earnings
            </a>
          </li>
        </ul>
      </div>
    )}
  </div>
  )
}

export default Dropdown