import Button from "./Button";
import { FaPlus } from "react-icons/fa6";
import AddIcon from "./AddIcon";
import { memo, useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Input from "./Input";
import ButtonS from "./ButtonS";
import ButtonP from "./ButtonP";
import { Reorder } from "framer-motion";
import { MdOutlineDragHandle } from "react-icons/md";
import {
  useForm,
  SubmitHandler,
  useFieldArray,
  Controller,
} from "react-hook-form";
import { GET_LINKS, GET_PROFILES } from "../graphql/queries";
import { useMutation, useQuery } from "@apollo/client";
import {
  ADD_LINKS,
  ADD_PROFILE,
  DELETE_LINK,
  DELETE_LINKS,
  INSERT_ONE_LINK,
} from "../graphql/mutations";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

let arrayIds: number[] = [];

const CustomizeLinks = memo(({ data, setData }: any) => {
  const { data: dataProfile } = useQuery(GET_PROFILES);
  const [deleteLink] = useMutation(DELETE_LINK, {
    refetchQueries: [{ query: GET_LINKS }],
  });
  const [insertOneLink] = useMutation(INSERT_ONE_LINK, {
    refetchQueries: [{ query: GET_LINKS }],
    errorPolicy: "all",
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      links: data?.links || [],
    },
  });

  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "links",
  });

  const watchedFields = watch("links");

  useEffect(() => {
    console.log("Fields changed:", watchedFields);

    const filteredCopyData = {
      ...data,
      links: watchedFields,
    };
    setData(filteredCopyData);
  });

  const onSubmit: SubmitHandler<any> = async (Data) => {
    console.log("------------------>|||||", Data);
    try {
      console.log("*-*", arrayIds);
      if (arrayIds.length > 0) {
        arrayIds.forEach(async (id) => await deleteLink({ variables: { id } }));
        arrayIds = [];
      }
      console.log("--++--", dataProfile.profile);
      for (let i: number = 0; i < Data.links.length; i++) {
        console.log(
          "profile_id:",
          dataProfile.profile[0].id,
          " platform_name:",
          Data.links[i].platform_name,
          " link:",
          Data.links[i].link
        );
        await insertOneLink({
          variables: {
            platform_name: Data.links[i].platform_name,
            link: Data.links[i].link,
            profile_id: dataProfile.profile[0].id,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = async (idx: number, id: number) => {
    if (id) arrayIds.push(id);
    remove(idx);
  };

  const handleDrag = async ({ source, destination }) => {
    if (destination) {
      move(source.index, destination.index);
    }
  };

  return (
    <div className="relative bg-white rounded-xl  h-full sm:h-[calc(100vh-154px)]  flex flex-col border-2 w-full border-black px-[24px] pt-[24px] sm:px-[40px] sm:pt-[40px]">
      <form
        className="flex flex-col justify-between h-full rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" overflow-auto sm:mb-[83px]">
          <div className="font-bold text-[24px] sm:text-[32px] mb-5 ">
            Customize your links
          </div>
          <div className="text-[16px] mb-[40px] text-[#737373]">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </div>
          <div className="overflow-y-auto no-scrollbar">
            <ButtonS
              icon={<FaPlus />}
              text="Add new link"
              handleClick={() =>
                append({ id: null, platform_name: "Github", link: "" })
              }
            />
          </div>
          <div className="">
            {fields.length === 0 ? (
              <div className="bg-gray-100 rounded-xl max-w-full p-12 flex flex-col items-center mt-5">
                <AddIcon />
                <div className="text-3xl mt-5">Let’s get you started</div>
                <div className="text-sm mt-5 text-[#737373]">
                  Use the “Add new link” button to get started. Once you have
                  more than one link, you can reorder and edit them. We’re here
                  to help you share your profiles with everyone!
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
                                key={field.id}
                                className="w-full bg-gray-100 p-5 rounded-xl mt-[24px]"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <div className="flex justify-between text-md mb-3">
                                  <div className="flex items-center justify-center gap-2">
                                    <MdOutlineDragHandle className="text-[#737373]" />
                                    <div className="font-bold text-[#737373] text-[16px]">
                                      Link #{idx + 1}
                                    </div>
                                  </div>
                                  <button
                                    className="text-[#737373] text-[16px]"
                                    type="button"
                                    onClick={() => handleRemove(idx, field.id_)}
                                  >
                                    Remove
                                  </button>
                                </div>
                                <div className="">
                                  <div className="mb-3">
                                    <div className="text-[12px] text-[#333333]">
                                      Platform
                                    </div>
                                    <Controller
                                      name={`links.${idx}.platform_name`}
                                      control={control}
                                      // defaultValue={field.platform_name}
                                      render={({ field }) => (
                                        <Dropdown
                                          value={field.value}
                                          onChange={field.onChange}
                                        />
                                      )}
                                    />
                                  </div>
                                  <div>
                                    <div className="text-[12px]">Link</div>
                                    <Input
                                      value={field.link}
                                      placeholder="e.g. https://www.website.com/johnappleseed"
                                      type="text"
                                      register={register(`links.${idx}.link`)}
                                      error={errors.link}
                                      errorMessage={errors.link?.message}
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
        <div className="bg-white sm:h-[78px] w-full  p-[16px] justify-end border-t-2 border-[#D9D9D9] mt-[24px] sm:absolute inset-x-0 bottom-0  sm:flex">
          <div className="sm:w-[96px]">
            <ButtonP text="Save" />
          </div>
        </div>
      </form>
    </div>
  );
});

export default CustomizeLinks;
