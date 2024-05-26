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
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { GET_LINKS, GET_PROFILES } from "../graphql/queries";
import {  useMutation, useQuery } from "@apollo/client";
import { ADD_LINKS, ADD_PROFILE, DELETE_LINK, DELETE_LINKS } from "../graphql/mutations";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";


const CustomizeLinks = () => {
  const [platforms, setPlatforms] = useState<string[]>([]);
  const {loading, error, data} = useQuery(GET_LINKS);
  const { data: dataProfile } = useQuery(GET_PROFILES);
  const [Addlinks] = useMutation(ADD_LINKS ,{refetchQueries: [{ query: GET_LINKS, errorPolicy: 'all' }]});
  const [deletelinks] = useMutation(DELETE_LINKS ,{refetchQueries: [{ query: GET_LINKS, errorPolicy: 'all' }]});
  const [deleteLink] = useMutation(DELETE_LINK, {refetchQueries: [{ query: GET_LINKS }], });
  const [addProfile] = useMutation(ADD_PROFILE, { refetchQueries: [{ query: GET_PROFILES }] , awaitRefetchQueries: true},);
  

  
  const { register, control, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      links: [], 
    },
  });
  
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: 'links',
  });
  
  useEffect(() => {
    if (data && data.links) {
      reset({ links: data.links });
      console.log(fields);
    }
  }, [data, reset]);
  console.log("fieldsss",fields);
  
  const onSubmit: SubmitHandler<any> = async (Data) => {
    console.log("------------------>",Data);
    console.log("platform",platforms);
    try{
      console.log("--++--",dataProfile.profile);
      await deletelinks();
      for(let i : number = 0; i < platforms.length; i++)
      {
        await Addlinks({variables: {profile_id: dataProfile.profile[0].id, platform_name: platforms[i] , link: Data.links[i].link}})
      }
      setPlatforms([]);
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
        newPlatforms.push(platform);
      }
      return newPlatforms;
    });
  };

  const handleRemove = async (idx: number, id: number) => {
    try{

      if(id)
        await deleteLink({variables: {id}});
      remove(idx);
    }
    catch(error)
    {
      console.log(error);
    }
    console.log(id);
  };

  const handleDrag = async({ source, destination }) => {
    if (destination) {
      move(source.index, destination.index);
      console.log("souce",source, "destionation",destination,fields);
      try{
        const copyField = fields[source.index];
        fields[source.index] = fields[destination.index];
        fields[destination.index] = copyField;
        await deletelinks();
        for(let i : number = 0; i < fields.length; i++)
        {
          console.log("P:",fields[i].platform_name,"L",fields[i].link);
          await Addlinks({variables: {profile_id: dataProfile.profile[0].id, platform_name: fields[i].platform_name , link: fields[i].link}})
        }
        // setPlatforms([]);
      }
      catch(error)
      {
        console.log(error);
      }
    }
  };


  return (
    <div className="relative bg-white rounded-xl w-full max-h-[calc(100vh-150px)] max-w-full flex flex-col">
    <form className="flex flex-col justify-between h-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="px-10 overflow-auto">
        <div className="font-bold text-3xl mb-5 mt-20">Customize your links</div>
        <div className="text-sm mb-10">
          Add/edit/remove links below and then share all your profiles with the world!
        </div>
        <div className="overflow-y-auto no-scrollbar">
          <ButtonS
            icon={<FaPlus />}
            text="Add new link"
            handleClick={() => append({id:null, platform_name: '', link: '' })}
          />
        </div>
        <div className="pb-4">
          {fields.length === 0 ? (
            <div className="bg-gray-100 rounded-xl max-w-full p-12 flex flex-col items-center mt-5">
              <AddIcon />
              <div className="text-3xl mt-5">Let’s get you started</div>
              <div className="text-sm mt-5">
                Use the “Add new link” button to get started. Once you have more than one link, you can reorder and
                edit them. We’re here to help you share your profiles with everyone!
              </div>
            </div>
          ) : (
            <DragDropContext onDragEnd={handleDrag}>
            <Droppable droppableId="links-items">
              {(provided, snapshot) => (
                <ul {...provided.droppableProps} ref={provided.innerRef}>
                    {fields.map((field, idx) => {
                      return (
                        <Draggable
                        key={`links[${idx}]`}
                        draggableId={`item-${idx}`}
                        index={idx}
                        >
                          {(provided, snapshot) => (
                            <li
                            className="w-full bg-gray-100 p-5 rounded-xl mt-5"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            
                            >
                              <div className="flex justify-between text-md mb-3">
                                <div className="flex items-center justify-center gap-2">
                                  <MdOutlineDragHandle />
                                  <div className="font-bold">Link #{idx + 1}</div>
                                </div>
                                <button type="button" onClick={() => handleRemove(idx, field.id)}>
                                  Remove
                                </button>
                              </div>
                              <div className="">
                                <div className="mb-3">
                                  <div className="text-sm">Platform</div>
                                  <Dropdown
                                    value={field.platform_name}
                                    setPlatforms={handlePlatforms}
                                    index={idx}
                                    />
                                </div>
                                <div>
                                  <div>Link</div>
                                  <Input
                                    value={field.link}
                                    placeholder="e.g. https://www.website.com/johnappleseed"
                                    type="text"
                                    register={register(`links.${idx}.link`)}
                                    />
                                </div>
                              </div>
                            </li>
                          )}
                        </Draggable>
                      );
                    })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
</DragDropContext>
          )}
        </div>
      </div>
      <div className="bg-white h-[100px] w-full p-5 flex justify-end border-t-2 border-[#D9D9D9]">
        <button
          type="submit"
          className="flex justify-center items-center gap-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border border-gray-200 hover:bg-[#EFEBFF] hover:text-[#633CFF] focus:z-10 focus:ring-4 focus:ring-gray-100 text-[white] border-[#633CFF] bg-[#633CFF] hover:bg-[#4b31b5] hover:text-white"
        >
          Save
        </button>
      </div>
    </form>
  </div>
  )
}

export default CustomizeLinks