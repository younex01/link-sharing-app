import Input from "./Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ImageUpload from "./ImageUpload";
import { useQuery, useMutation } from "@apollo/client";
import { GET_PROFILE } from "../graphql/queries";
import { ADD_PROFILE } from "../graphql/mutations";
import { UPDATE_PROFILE } from "../graphql/mutations";
import ButtonP from "./ButtonP";
import Save from "./icons/Save";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface ProfileType {
  first_name: string;
  last_name: string;
  email: string;
}

const CustomizeProfile = () => {
  
  const { user, isLoading } = useAuth0();
  if(isLoading)
    return <div>loading</div>;
  const { data, error, loading } = useQuery(GET_PROFILE, {
    variables: { user_id: user?.sub }
  });
  const [addProfile] = useMutation(ADD_PROFILE, {
    refetchQueries: [{ query: GET_PROFILE, variables: { user_id: user?.sub } }],
  });
  const [updateProfile] = useMutation(UPDATE_PROFILE, {
    refetchQueries: [{ query: GET_PROFILE, variables: { user_id: user?.sub } }],
  });
  const [isSaved, setIsSaved] = useState(false);
  const mySchema = z.object({
    first_name: z.string().min(1, { message: "Can’t be empty" }),
    last_name: z.string().min(1, { message: "Can’t be empty" }),
    email: z.string().email({ message: "Not a valid email" }),
  });

  type Profile = z.infer<typeof mySchema>;

  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting},
  } = useForm<Profile>({ resolver: zodResolver(mySchema) });

  const onSubmit: SubmitHandler<ProfileType> = async (Data) => {
    try {
      if (data.profile.length !== 0 && data.profile[0].id) {
        await updateProfile({
          variables: {
            id: data.profile[0].id,
            first_name: Data.first_name,
            last_name: Data.last_name,
            email: Data.email,
            avatar: data.profile[0].avatar,
          },
        });
      } else {
        await addProfile({
          variables: {
            first_name: Data.first_name,
            last_name: Data.last_name,
            email: Data.email,
            avatar: data.profile[0].avatar,
          },
        });
      }
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2000);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="relative bg-white rounded-xl  h-full  flex flex-col w-full px-[24px] pt-[24px] sm:px-[40px] sm:pt-[40px]">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between h-full rounded-xl">
        <div className=" bg-white overflow-auto">

          <div className="font-bold text-[24px] sm:text-[32px] mb-5 ">Profile Details</div>
          <div className="text-[16px] mb-[40px] text-[#737373]">
            Add your details to create a personal touch to your profile.
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[#FAFAFA] p-[20px] gap-[24px] rounded-xl">
            <div className="text-[16px]  text-[#737373]">Profile picture</div>
            <ImageUpload
              value={
                data !== undefined && data.profile.length !== 0
                  ? data.profile[0].avatar
                  : ""
              }
              id={
                data !== undefined && data.profile.length !== 0
                  ? data.profile[0].id
                  : null
              }
            />
            <div className="text-[12px] text-[#737373] sm:w-[220px]">
              Image must be below 1024x1024px. Use PNG or JPG format.
            </div>
          </div>
          <div className="bg-[#FAFAFA] rounded-xl w-full max-w-full p-[20px] flex flex-col items-center mt-5 gap-[12px]">
            <div className="flex flex-col sm:flex-row sm:justify-stretch sm:items-center w-full">
              <label className="block mb-2 w-fit text-[16px] text-[#737373]">
                First name*
              </label>
              <div className="sm:ml-auto sm:w-[300px]">
                <Input
                  type="text"
                  value={
                    data !== undefined && data.profile.length !== 0
                      ? data.profile[0].first_name
                      : ""
                  }
                  placeholder="e.g. John"
                  register={register("first_name")}
                  error={errors.first_name}
                  errorMessage={errors.first_name?.message}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-stretch sm:items-center w-full">
              <label className="block mb-2 w-fit text-[16px] text-[#737373]">
                Last name*
              </label>
              <div className="sm:ml-auto sm:w-[300px]">
                <Input
                  type="text"
                  value={
                    data !== undefined && data.profile.length !== 0
                      ? data.profile[0].last_name
                      : ""
                  }
                  placeholder="e.g. Appleseed"
                  register={register("last_name")}
                  error={errors.last_name}
                  errorMessage={errors.last_name?.message}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-stretch sm:items-center w-full ">
              <label className="block mb-2 w-fit text-[16px] text-[#737373]">
                Email
              </label>
              <div className="sm:ml-auto sm:w-[300px]">
                <Input
                  type="email"
                  value={
                    data !== undefined && data.profile.length !== 0
                      ? data.profile[0].email
                      : ""
                  }
                  placeholder="e.g. email@example.com"
                  register={register("email")}
                  error={errors.email}
                  errorMessage={errors.email?.message}
                />
              </div>
            </div>
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
};

export default CustomizeProfile;
