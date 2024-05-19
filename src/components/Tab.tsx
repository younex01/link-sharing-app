import { FaLink } from 'react-icons/fa6'

const Tab = ({activated}: boolean) => {
  return (
    <button type="button" className={`flex justify-center text-gray-300 w-full items-center gap-2 py-2.5 px-5 me-2 mb-2 text-sm font-bold  focus:outline-none rounded-lg hover:text-blue  ${activated ? "bg-purple-100 text-blue" : ""}`}>
    <FaLink  className="text-lg"/>
        Button
    </button>
  )
}

export default Tab