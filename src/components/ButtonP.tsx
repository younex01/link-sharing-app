interface ButtonType {
  text: string;
  handleClick: any;
  disable: boolean;
}

const ButtonP = ({ text, handleClick, disable }: ButtonType) => {
  return (
    <button
      type="submit"
      className={`flex justify-center h-[46px] text-white font-medium ${
        disable ? "bg-purple-200" : "bg-blue"
      } w-full items-center gap-2 py-2.5 px-5 me-2 text-sm  focus:outline-none rounded-lg border border-gray-200 hover:bg-purple-200 focus:z-10  `}
      onClick={handleClick}
      disabled={disable}
    >
      {disable ? (
        <svg
          className="mr-3 h-5 w-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) :(
        <span>{text}</span>
      )}
    </button>
  );
};

export default ButtonP;
