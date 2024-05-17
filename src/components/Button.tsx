
interface ButtonType{
    name: string;
    icon: any;
    className: string;
    handleClick:any;
};

const Button = (props:ButtonType) => {

  return (
<div className="text-[#737373]">

<button type="button" className={`flex justify-center items-center gap-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium  focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-[#EFEBFF] hover:text-[#633CFF] focus:z-10 focus:ring-4 focus:ring-gray-100  ${props.className}`} onClick={props.handleClick}>
    {props.icon}
    {props.name}
</button>
</div>
  )
}

export default Button;