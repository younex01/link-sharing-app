import { UseFormRegisterReturn } from "react-hook-form";
import Icon_chain from "./icons/icon_chain";
import {  useEffect, useState } from "react";

interface InputType {
  placeholder: string;
  type: string;
  register: UseFormRegisterReturn;
  error: any,
  errorMessage: any,
  value: string;
}

const Input = (props: InputType) => {

  const [inputValue, setInputValue] = useState<string>(props.value);

  useEffect(()=>{
    setInputValue(props.value);
  },[props.value])
  
  const handleInputChange = (event:any) => {
    setInputValue(event.target.value);
  };
//   useEffect(() => {
//     setDisplayValue(inputValue);
// }, [inputValue]);

  return (
    <>
      <div className="relative ">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <Icon_chain />
        </div>
        <input type={props.type} value={inputValue || ''}  className={`bg-white border ${props.error ? 'border-red' : 'border-gray-200'} text-gray-900 rounded-lg focus:ring-${props.error ? 'red' : 'blue'} focus:border-${props.error ? 'red' : 'blue'} block w-full ps-10  ${props.error ? 'focus:shadow-none' : 'focus:shadow-md focus:shadow-purple-200'} outline-none text-sm px-5 py-2.5`} placeholder={props.placeholder}  {...props.register} onChange={handleInputChange}/>
        {props.errorMessage && <div className="absolute end-3 inset-y-0 flex items-center ps-3.5 pointer-events-none text-red text-sm">{props.errorMessage}</div>}
      </div>
    </>
  )
}

export default Input