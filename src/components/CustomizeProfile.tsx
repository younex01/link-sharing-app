import Button from "./Button"
import { FaPlus } from "react-icons/fa6";
import AddIcon from "./AddIcon";
import { FaRegImage } from "react-icons/fa6";
import Input from "./Input"

const CustomizeProfile = () => {
  return (
    <div className="bg-white rounded-xl max-w-full w-full max-h-full flex flex-col">
      <div className="px-10">

        <div className="font-bold text-3xl mb-5 mt-20">Profile Details</div>
        <div className="text-sm mb-10">Add your details to create a personal touch to your profile.</div>
        <div className="flex flex-row items-center justify-between bg-[#FAFAFA]">
          <div className="ml-3">Profile picture</div>
          <label className="bg-[#EFEBFF] w-[193px] h-[193px] flex items-center justify-center  rounded-2xl mt-5 mb-5">
            <input type="file" className="opacity-0 absolute w-[193px] h-[193px]" />
            <div className="flex flex-col justify-center items-center text-[#633CFF] ">
              <FaRegImage className="text-3xl mb-2 "/>
              <div className="flex flex-row justify-center items-center">
                <FaPlus />
                <div>Upload Image</div>
              </div>
            </div>
          </label>
          <div className="text-sm max-w-[220px]">Image must be below 1024x1024px. Use PNG or JPG format.</div>
        </div>
        <div className="bg-[#FAFAFA] rounded-xl w-full max-w-full p-12 flex flex-col items-center gap-5 mt-5">
          <div className="flex justify-stretch items-center w-full">
          <label  className="block mb-2 w-full text-sm font-medium text-[#737373]">First name*</label>
          <Input type="text" placeholder="e.g. John"/>
          </div>
          <div className="flex justify-stretch items-center w-full">
          <label  className="block mb-2 w-full text-sm font-medium text-[#737373]">FLast name*</label>
          <Input type="text" placeholder="e.g. Appleseed"/>
          </div>
          <div className="flex justify-stretch items-center w-full">
          <label  className="block mb-2 w-full text-sm font-medium text-[#737373]">Email</label>
          <Input type="email" placeholder="e.g. email@example.com"/>
          </div>
        </div>
      </div>
      <div className=" h-[100px] w-full mt-auto p-5 flex  justify-end border-t-2 border-[#D9D9D9]">
        <Button name="Save" icon="" className="text-[white] border-[#633CFF] bg-[#633CFF] hover:bg-[#4b31b5] hover:text-white" handleClick={() => { }} />
      </div>
    </div>
  )
}

export default CustomizeProfile

//bg-white rounded-xl max-w-full max-h-full border-2 flex flex-col