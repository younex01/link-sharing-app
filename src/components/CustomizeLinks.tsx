import Button from "./Button"
import { FaPlus } from "react-icons/fa6";
import AddIcon from "./AddIcon";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Input from "./Input";
import ButtonS from "./ButtonS";
import ButtonP from "./ButtonP";
import { Reorder } from "framer-motion";
import { MdOutlineDragHandle } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form";
import { GET_LINKS } from "../graphql/queries";
import {  useMutation, useQuery } from "@apollo/client";
import { ADD_LINKS, DELETE_LINKS } from "../graphql/mutations";


const CustomizeLinks = () => {
  const [addNew, setAddNew] = useState<number>(0);
  const [platforms, setPlatforms] = useState<string[]>([]);
  const {loading, error, data} = useQuery(GET_LINKS);
  const [Addlinks] = useMutation(ADD_LINKS ,{refetchQueries: [{ query: GET_LINKS, errorPolicy: 'all' }]});
  const [deletelinks] = useMutation(DELETE_LINKS ,{refetchQueries: [{ query: GET_LINKS, errorPolicy: 'all' }]});
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  
  const onSubmit: SubmitHandler<any> = async (Data) => {
    console.log("------------------>",Data);
    console.log("platform",platforms);
    try{
      await deletelinks();
      for(let i : number = 0; i < Object.keys(Data).length; i++)
      {
        console.log("+++++");
        console.log(platforms[i], Object.values(Data)[i]);
        await Addlinks({variables: {profile_id: 11, platform_name: platforms[i] , link: Object.values(Data)[i]}})
      }
      setPlatforms([]);
      setAddNew(0);
    }
    catch(error)
    {
      console.log(error);
    }
    // ******************

    console.log("******************");
    console.log("show links",data.links);
    data.links.map((link)=> {
      console.log(link.platform_name, link.link);
    })
    console.log("------------------->")
  };

  const handlePlatforms = (platform: string, index: number) => {
    setPlatforms((prevPlatforms) => {
      const newPlatforms = [...prevPlatforms];
      if (index >= 0 && index < newPlatforms.length) {
        newPlatforms[index] = platform;
      } else if (index === newPlatforms.length) {
        // If the index is equal to the length, it means we're adding a new item to the array
        newPlatforms.push(platform);
      }
      return newPlatforms;
    });
  };


  return (
    <div className="relative bg-white rounded-xl w-full max-h-[calc(100vh-150px)]  max-w-full flex flex-col">
        <form className="flex flex-col justify-between h-full"  onSubmit={handleSubmit(onSubmit)}>
      <div className="px-10 overflow-auto">

        <div className="font-bold text-3xl mb-5 mt-20">Customize your links</div>
        <div className="text-sm mb-10">Add/edit/remove links below and then share all your profiles with the world!</div>
        <div className="overflow-y-auto no-scrollbar">
        <ButtonS icon={<FaPlus />} text="Add new link" handleClick={() => { setAddNew((prev) => { return prev + 1; }) }}/>
        </div>
        <div className="pb-4">

        {
          ((data == undefined || data.links.length == 0) && addNew == 0) ? (
            <div className="bg-gray-100 rounded-xl max-w-full p-12 flex flex-col items-center mt-5">
              <AddIcon />
              <div className="text-3xl mt-5">Let’s get you started</div>
              <div className="text-sm mt-5">
                Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!
              </div>
            </div>
          ) : (
           
            <>

            {data.links.map((item, idx) => (
            
              <div  className="w-full bg-gray-100 p-5 rounded-xl mt-5" key={idx}>
                <div className="flex justify-between text-md mb-3">
                  <div className="flex items-center justify-center gap-2">
                  <MdOutlineDragHandle />
                  <div className="font-bold">Link #{idx + 1}</div>
                  </div>
                  <button >Remove</button>
                </div>
                <div className="">
                  <div className="mb-3">
                    <div className="text-sm">Platform</div>
                    <Dropdown value={item.platform_name} setPlatforms={handlePlatforms} index={idx}/>
                  </div>
                  <div>
                    <div>Link</div>
                    <Input value={item.link} placeholder="e.g. https://www.website.com/johnappleseed" type="text" register={register(`link_${idx}`)} />
                  </div>
                </div>
              </div>
             
            ))}
            {Array.from({ length: addNew }).map((_, idx) => (
              
              <div  className="w-full bg-gray-100 p-5 rounded-xl mt-5" key={idx + data.links.length}>
                <div className="flex justify-between text-md mb-3">
                  <div className="flex items-center justify-center gap-2">
                  <MdOutlineDragHandle />
                  <div className="font-bold">Link #{idx + data.links.length  + 1}</div>
                  </div>
                  <button onClick={() => { setAddNew((prev) => { return prev - 1; }) }}>Remove</button>
                </div>
                <div className="">
                  <div className="mb-3">
                    <div className="text-sm">Platform</div>
                    <Dropdown setPlatforms={handlePlatforms} index={idx + data.links.length}/>
                  </div>
                  <div>
                    <div>Link</div>
                    <Input placeholder="e.g. https://www.github.com/johnappleseed" type="text" register={register(`link_${idx + data.links.length}`)} />
                  </div>
                </div>
              </div>

            ))}
           </>
          )
        }
        </div>
      </div>
      <div className="bg-white h-[100px] w-full p-5 flex  justify-end  border-t-2 border-[#D9D9D9] ">
          <button type="submit" className="flex justify-center items-center gap-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium  focus:outline-none rounded-lg border border-gray-200 hover:bg-[#EFEBFF] hover:text-[#633CFF] focus:z-10 focus:ring-4 focus:ring-gray-100 text-[white] border-[#633CFF] bg-[#633CFF] hover:bg-[#4b31b5] hover:text-white" >save</button>
        </div>
        </form>
    </div>
  )
}

export default CustomizeLinks