import Button from "./Button"
import { FaPlus } from "react-icons/fa6";
import AddIcon from "./AddIcon";
import { useState } from "react";
import Dropdown from "./Dropdown";
import Input from "./Input";
import ButtonS from "./ButtonS";
import ButtonP from "./ButtonP";
import { Reorder } from "framer-motion";
import { MdOutlineDragHandle } from "react-icons/md";


const CustomizeLinks = () => {
  const [addNew, setAddNew] = useState<number>(0);
  return (
    <div className="relative bg-white rounded-xl w-full max-w-full max-h-full  flex flex-col">
      <div className="px-10 overflow-y-auto">

        <div className="font-bold text-3xl mb-5 mt-20">Customize your links</div>
        <div className="text-sm mb-10">Add/edit/remove links below and then share all your profiles with the world!</div>
        {/* <Button name="Add new link" icon={<FaPlus />} className="text-[#633CFF] border-[#633CFF] mt-10" handleClick={() => { setAddNew((prev) => { return prev + 1; }) }} /> */}
        <div className="overflow-y-auto no-scrollbar">
        <ButtonS icon={<FaPlus />} text="Add new link" handleClick={() => { setAddNew((prev) => { return prev + 1; }) }}/>
        </div>
        {
          (addNew == 0) ? (
            <div className="bg-gray-100 rounded-xl max-w-full p-12 flex flex-col items-center mt-5">
              <AddIcon />
              <div className="text-3xl mt-5">Let’s get you started</div>
              <div className="text-sm mt-5">
                Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!
              </div>
            </div>
          ) : (
            <Reorder.Group axis="y" values={Array.from({ length: addNew })}>
            {Array.from({ length: addNew }).map((_, idx) => (
              <Reorder.Item key={idx}>
              <div  className="w-full bg-gray-100 p-5 rounded-xl mt-5">
                <div className="flex justify-between text-md mb-3">
                  <div className="flex items-center justify-center gap-2">
                  <MdOutlineDragHandle />
                  <div className="font-bold">Link #{idx + 1}</div>
                  </div>
                  <button onClick={() => { setAddNew((prev) => { return prev - 1; }) }}>Remove</button>
                </div>
                <div className="">
                  <div className="mb-3">
                    <div className="text-sm">Platform</div>
                    <Dropdown />
                  </div>
                  <div>
                    <div>Link</div>
                    <Input placeholder="e.g. https://www.github.com/johnappleseed" type="text" />
                  </div>
                </div>
              </div>
              </Reorder.Item>
            ))}
            </Reorder.Group>
          )
        }
      </div>
      <div className=" bg-white h-[100px] w-full mt-auto p-5 flex  justify-end border-t-2 border-[#D9D9D9] absolute inset-x-0 bottom-0">
        <Button name="Save" icon="" className="text-[white] border-[#633CFF] bg-[#BEADFF] hover:text-white" handleClick={() => { }} />
      </div>
    </div>
  )
}

export default CustomizeLinks