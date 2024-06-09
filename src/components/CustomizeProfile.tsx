import Button from "./Button";
import { FaPlus } from "react-icons/fa6";
import { FaRegImage } from "react-icons/fa6";
import Input from "./Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ImageUpload from "./ImageUpload";
import { DocumentNode, useQuery, useMutation } from "@apollo/client";
import { GET_PROFILES } from "../graphql/queries";
import { ADD_PROFILE } from "../graphql/mutations";
import { UPDATE_PROFILE } from "../graphql/mutations";
import ButtonP from "./ButtonP";

interface ProfileType {
  first_name: string;
  last_name: string;
  email: string;
}

const CustomizeProfile = () => {
  const { loading, error, data } = useQuery(GET_PROFILES);
  const [addProfile] = useMutation(ADD_PROFILE, {
    refetchQueries: [{ query: GET_PROFILES }],
  });
  const [updateProfile] = useMutation(UPDATE_PROFILE, {
    refetchQueries: [{ query: GET_PROFILES }],
  });

  const mySchema = z.object({
    first_name: z.string().min(1, { message: "Can’t be empty" }),
    last_name: z.string().min(1, { message: "Can’t be empty" }),
    email: z.string().email({ message: "Not a valid email" }),
  });

  type Profile = z.infer<typeof mySchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Profile>({ resolver: zodResolver(mySchema) });

  const onSubmit: SubmitHandler<ProfileType> = async (Data) => {
    console.log("Data", Data);
    try {
      if (data.profile.length !== 0 && data.profile[0].id) {
        console.log("updated");
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
        console.log("added");
        await addProfile({
          variables: {
            first_name: Data.first_name,
            last_name: Data.last_name,
            email: Data.email,
            avatar: data.profile[0].avatar,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log("--->", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // console.log(data.profile[0].first_name);

  return (
    <div className="relative bg-white rounded-xl  h-full flex flex-col border-2 w-full border-black px-[24px] pt-[24px] sm:px-[40px] sm:pt-[40px]">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className=" bg-white overflow-auto">
          
            <div className="font-bold text-3xl mb-5 ">Profile Details</div>
            <div className="text-sm mb-10 text-[#737373]">
              Add your details to create a personal touch to your profile.
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[#FAFAFA] p-[20px] gap-[24px] rounded-xl">
              <div className="ml-3 text-[#737373]">Profile picture</div>
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
              <div className="text-sm text-[#737373] sm:w-[220px]">
                Image must be below 1024x1024px. Use PNG or JPG format.
              </div>
            </div>
            <div className="bg-[#FAFAFA] rounded-xl w-full max-w-full p-[20px] flex flex-col items-center mt-5 gap-[12px]">
              <div className="flex flex-col sm:flex-row sm:justify-stretch sm:items-center w-full">
                <label className="block mb-2 w-fit text-sm text-[#737373]">
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
                <label className="block mb-2 w-fit text-sm text-[#737373]">
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
                <label className="block mb-2 w-fit text-sm text-[#737373]">
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
              <ButtonP text="Save" />
            </div>
          </div>
      </form>
    </div>
  );
};

export default CustomizeProfile;
