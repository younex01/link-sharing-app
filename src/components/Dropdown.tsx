import { useState } from "react";
import ArrowDown from "./icons/ArrowDown";
import ArrowUp from "./icons/ArrowUp";
import { IoLogoLinkedin } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";

const menuItems = [
  { icon: <PiGithubLogoFill />, label: 'Github' },
  { icon: <FaYoutube />, label: 'Youtube' },
  { icon: <IoLogoLinkedin />, label: 'Linkedin' },
];

const Dropdown = ({value, onChange, register}:any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (value: string) => {
    setIsOpen(!isOpen);
    onChange(value);
  };
  
  return (
    <div className="relative inline-block text-left w-full">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className={`text-black w-full bg-white border hover:bg-blue-800  focus:outline-none   rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ${isOpen ? 'shadow-md shadow-purple-200 border-blue' : ''}`}
        type="button"
        {...register}
        onClick={handleToggle}
      >
        {!value ? <div>Choose a platform</div> :
        <div className={`flex flex-row gap-5 items-center text-gray-300`}>
          {menuItems.find(menuItem => menuItem.label === value)?.icon}
          {value}
        </div>}
        <div className="ml-5 flex items-center justify-center">

          <div className="absolute right-4  ">

            {isOpen ? <ArrowUp /> : <ArrowDown />}
          </div>
        </div>
      </button>

      {isOpen && (
        <div
          id="dropdown"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full  absolute mt-2"
        >
          <ul
            className="px-2 text-sm  "
            aria-labelledby="dropdownDefaultButton"
          >
            {menuItems.map((item, index) => (
              <li key={index} >
                <button
                  onClick={() => handleItemClick(item.label)}
                  className={`border-b  border-gray-200 px-2 py-2 w-full text-left  ${menuItems.findIndex(menuItem => menuItem.label === value) == index ? 'text-blue' : 'text-gray-300'}`}
                >
                  <div className={`flex flex-row gap-5 items-center hover:text-blue ${menuItems.findIndex(menuItem => menuItem.label === value) == index ? 'text-blue' : 'text-gray-300'}`}>
                    {item.icon}
                    {item.label}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Dropdown