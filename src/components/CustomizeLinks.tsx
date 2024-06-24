import {  FaPlus } from "react-icons/fa6";
import AddIcon from "./AddIcon";
import { memo, useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Input from "./Input";
import ButtonS from "./ButtonS";
import ButtonP from "./ButtonP";
import { z } from "zod";
import { MdOutlineDragHandle } from "react-icons/md";
import {
  useForm,
  SubmitHandler,
  useFieldArray,
  Controller,
} from "react-hook-form";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Save from "./icons/Save";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth0 } from "@auth0/auth0-react";
import PageLoader from "../page-loader";
import { Get_LinksDocument, useDeleteLinkMutation, useGetProfileByUserIdQuery, useInsertOneLinkMutation } from "../graphql/generated/schema";

let arrayIds: number[] = [];


const CustomizeLinks = memo(({ data, setData}: any) => {
  const { user, isLoading } = useAuth0();
  if(isLoading || !user || !user.sub)
    return <PageLoader />;
  const { data: dataProfile } = useGetProfileByUserIdQuery(
    {
      variables: { user_id: user?.sub },
    }
  );

  const [isSaved, setIsSaved] = useState(false);
  const [deleteLink] = useDeleteLinkMutation({
    refetchQueries: [Get_LinksDocument],
  });
  const [insertOneLink] = useInsertOneLinkMutation({
    refetchQueries: [Get_LinksDocument],
    errorPolicy: "all",
  });

  const mySchema = z.object({
    links: z.array(z.object({
    id_: z.any(),
    id: z.any(),
    platform_name: z.string().nonempty(), 
    link: z.string().min(1,{ message:"Can't be empty" }).url( "Please check the URL"),
  }).refine((data) =>
    (`${data.link ?? ""}`.includes(
      (data.platform_name ?? "").toLowerCase()
          )), {
    message: "Please check the URL",
    path: ["link"], 
  })
)
  })
  
  type Links = z.infer<typeof mySchema>;

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
    formState: { isSubmitting},
  } = useForm<Links>({
    defaultValues: {
      links: data?.links || [],
    },
    resolver: zodResolver(mySchema),
  });

  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "links",
  });

  const watchedFields = watch("links");

  useEffect(() => {
    const filteredCopyData = {
      ...data,
      links: watchedFields,
    };
    setData(filteredCopyData);
  });

  const onSubmit: SubmitHandler<any> = async (Data) => {
    try {
      if (arrayIds.length > 0) {
        arrayIds.forEach(async (id) => await deleteLink({ variables: { id } }));
        arrayIds = [];
      }
      for (let i: number = 0; i < Data.links.length; i++) {
        await insertOneLink({
          variables: {
            platform_name: Data.links[i].platform_name,
            link: Data.links[i].link,
            profile_id: dataProfile!.profile[0].id,
          },
        });
      }
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = async (idx: number, id_: number) => {
    if (id_) arrayIds.push(id_);
    remove(idx);
  };

  const handleDrag = async ({ source, destination }:any) => {
    if (destination) {
      move(source.index, destination.index);
    }
  };

  return (
    <div className="relative bg-white rounded-xl  h-full sm:h-[calc(100vh-154px)]  flex flex-col  w-full px-[24px] pt-[24px] sm:px-[40px] sm:pt-[40px]">
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
                  {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                      {fields.map((field, idx) => {
                        return (
                          <Draggable
                            key={`links[${idx}]`}
                            draggableId={`item-${idx}`}
                            index={idx}
                          >
                            {(provided) => (
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
                                    onClick={() => {handleRemove(idx, field.id_)}}
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
                                    {errors.links && errors.links[idx]  ? <Input
                                      value={field.link}
                                      placeholder="e.g. https://www.website.com/johnappleseed"
                                      type="text"
                                      register={register(`links.${idx}.link`)}
                                      error={errors.links && (errors.links as Record<string, any>)[idx]}
                                      errorMessage={errors.links && (errors.links as Record<string, any>)[idx].link.message}
                                    />
                                    :
                                    <Input
                                      value={field.link}
                                      placeholder="e.g. https://www.website.com/johnappleseed"
                                      type="text"
                                      register={register(`links.${idx}.link`)}
                                      error=""
                                      errorMessage=""
                                    />
                                   }
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
            <ButtonP text="Save" handleClick={()=>{}} disable={isSubmitting}/>
          </div>
          <div
            className={`sm:max-w-[409px] w-full fixed bottom-[20px] left-1/2 -translate-x-1/2  text-center bg-[#333333] text-[#FAFAFA] text-[16px] px-[24px] py-[16px] transition-opacity duration-300 ease-in-out rounded-xl ${
              isSaved ? "" : "opacity-0"
            }`}
          >
            <div className="flex justify-center items-center gap-[8px]">
              <Save />
              Your changes have been successfully saved!
            </div>
          </div>
        </div>
      </form>
    </div>
  );
});

export default CustomizeLinks;
