import { AiOutlineLoading3Quarters } from "react-icons/ai";


const PageLoader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <AiOutlineLoading3Quarters className="animate-spin text-blue text-7xl" />
    </div>
  )
}

export default PageLoader;