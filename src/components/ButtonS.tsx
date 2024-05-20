interface ButtonType {
    icon: any;
    text: string;
    handleClick:any;
  }

const ButtonS = ({text,icon,handleClick}:ButtonType) => {
    return (
        <button type="button" className="flex justify-center text-blue bg-white w-full items-center gap-2 py-2.5 px-5 me-2  text-sm font-bold  focus:outline-none rounded-lg border border-blue hover:bg-purple-100 focus:z-10 " onClick={handleClick}>
            {icon}
            {text}
        </button>
    )
}

export default ButtonS