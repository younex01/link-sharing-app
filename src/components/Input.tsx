import { UseFormRegisterReturn } from "react-hook-form";

interface InputType{
    placeholder:string;
    type:string;
    register:UseFormRegisterReturn;
    errorMessage:any,
}

const Input = (props:InputType) => {
  return (
    <>
    <input type={props.type} className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={props.placeholder}  {...props.register} />
      {props.errorMessage}
    </>
  )
}

export default Input