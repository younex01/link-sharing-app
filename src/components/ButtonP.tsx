interface ButtonType {
    text: string;
    handleClick: any;
  }

const ButtonP = ({text,handleClick}:ButtonType) => {
    return (
        <button type="submit" className="flex justify-center h-[46px] text-white font-medium bg-blue w-full items-center gap-2 py-2.5 px-5 me-2 text-sm  focus:outline-none rounded-lg border border-gray-200 hover:bg-purple-200 focus:z-10  " onClick={handleClick}>
            {text}
        </button>
    )
}

export default ButtonP