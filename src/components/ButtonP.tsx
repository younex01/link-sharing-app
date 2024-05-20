interface ButtonType {
    text: string;
  }

const ButtonP = ({text}:ButtonType) => {
    return (
        <button type="button" className="flex justify-center text-white font-bold bg-blue w-full items-center gap-2 py-2.5 px-5 me-2 text-sm  focus:outline-none rounded-lg border border-gray-200 hover:bg-purple-200 focus:z-10  ">
            {text}
        </button>
    )
}

export default ButtonP