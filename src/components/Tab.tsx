import { FaLink } from 'react-icons/fa6'
interface TabType{
  activated:boolean;
  text: string;
}
const Tab = ({activated, text}: TabType) => {
  return (
    <button type="button" className={`flex justify-center  w-full items-center gap-2 py-2.5 px-5 me-2 mb-2 text-sm font-bold  focus:outline-none rounded-lg hover:text-blue  ${activated ? "bg-purple-100 text-blue" : "text-gray-300"}`} >
    <FaLink  className="text-lg"/>
        {text}
    </button>
  )
}

export default Tab