interface TabType {
  activated: boolean;
  text: string;
}
const Tab = ({ activated, text, icon }: TabType) => {
  return (
    <button
      type="button"
      className={`flex justify-center h-full  w-full items-center gap-2 py-2.5 px-5 me-2 mb-2 text-sm font-bold  focus:outline-none rounded-lg hover:text-blue  ${
        activated ? "bg-purple-100 text-blue" : "text-gray-300"
      }`}
    >
      {icon}
      <div className="hidden sm:flex">{text}</div>
    </button>
  );
};

export default Tab;
