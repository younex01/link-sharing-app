import Button from "./Button"
import { FaPlus } from "react-icons/fa6";
import AddIcon from "./AddIcon";

const CustomizeLinks = () => {
  return (
    <div className="relative bg-white rounded-xl w-full max-w-full max-h-full  flex flex-col">
      <div className="px-10">

      <div className="font-bold text-3xl mb-5 mt-20">Customize your links</div>
      <div className="text-sm">Add/edit/remove links below and then share all your profiles with the world!</div>
      <Button name="Add new link" icon={<FaPlus />} className="text-[#633CFF] border-[#633CFF] mt-10" handleClick={() => { }} />
      <div className="bg-[#FAFAFA] rounded-xl max-w-full p-12 flex flex-col items-center mt-5">
        {/* <img src="add" alt="" /> */}
        <AddIcon />
        <div className="text-3xl mt-5">Let’s get you started</div>
        <div className="text-sm mt-5">Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</div>
      </div>
      </div>
      <div className=" h-[100px] w-full mt-auto p-5 flex  justify-end border-t-2 border-[#D9D9D9] absolute inset-x-0 bottom-0">
      <Button name="Save" icon="" className="text-[white] border-[#633CFF] bg-[#BEADFF] hover:text-white" handleClick={() => { }} />
      </div>
    </div>
  )
}

export default CustomizeLinks