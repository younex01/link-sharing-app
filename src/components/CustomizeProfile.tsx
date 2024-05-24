import Button from "./Button"
import { FaPlus } from "react-icons/fa6";
import { FaRegImage } from "react-icons/fa6";
import Input from "./Input"
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import ImageUpload from "./ImageUpload";
import { DocumentNode, useQuery, useMutation } from '@apollo/client';
import { GET_PROFILES } from "../graphql/queries";
import { ADD_PROFILE } from "../graphql/mutations";
import { UPDATE_PROFILE } from "../graphql/mutations";


interface ProfileType {
  first_name: string;
  last_name: string;
  email: string;
}


const CustomizeProfile = () => {

  const { loading, error, data } = useQuery(GET_PROFILES);
  const [addProfile] = useMutation(ADD_PROFILE, { refetchQueries: [{ query: GET_PROFILES }] });
  const [updateProfile] = useMutation(UPDATE_PROFILE, { refetchQueries: [{ query: GET_PROFILES }] });

  const mySchema = z.object({
    first_name: z.string().min(1, { message: "Can’t be empty" }),
    last_name: z.string().min(1, { message: "Can’t be empty" }),
    email: z.string().email({ message: 'Not a valid email' }),
  })

  type Profile = z.infer<typeof mySchema>;

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Profile>({ resolver: zodResolver(mySchema) });

  const onSubmit: SubmitHandler<ProfileType> = async (Data) => {
    console.log("Data", Data);
    try {
      if (data.profile.length !== 0 && data.profile[0].id) {
        console.log("updated");
        await updateProfile({ variables: { id: data.profile[0].id, first_name: Data.first_name, last_name: Data.last_name, email: Data.email ,avatar: data.profile[0].avatar} });
      }
      else {
        console.log("added");
        await addProfile({ variables: { first_name: Data.first_name, last_name: Data.last_name, email: Data.email ,avatar: data.profile[0].avatar} })
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  console.log("--->", data);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  // console.log(data.profile[0].first_name);

  return (
    <div className="relative bg-white rounded-xl max-w-full w-full max-h-full flex flex-col">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-10">

          <div className="font-bold text-3xl mb-5 mt-20">Profile Details</div>
          <div className="text-sm mb-10">Add your details to create a personal touch to your profile.</div>
          <div className="flex flex-row items-center justify-between bg-[#FAFAFA]">
            <div className="ml-3">Profile picture</div>
            <ImageUpload value={data !== undefined && data.profile.length !== 0 ? data.profile[0].avatar : ''} id={data !== undefined && data.profile.length !== 0 ? data.profile[0].id : null} />
            <div className="text-sm max-w-[220px]">Image must be below 1024x1024px. Use PNG or JPG format.</div>
          </div>
          <div className="bg-[#FAFAFA] rounded-xl w-full max-w-full p-12 flex flex-col items-center gap-5 mt-5">


            <div className="flex justify-stretch items-center w-full">
              <label className="block mb-2 w-fit text-sm font-medium text-[#737373]">First name*</label>
              <div className="ml-auto w-[300px]">
                <Input type="text" value={data !== undefined && data.profile.length !== 0 ? data.profile[0].first_name : ''} placeholder="e.g. John" register={register('first_name')} error={errors.first_name} errorMessage={errors.first_name?.message} />
              </div>
            </div>
            <div className="flex justify-stretch items-center w-full">
              <label className="block mb-2 w-fit text-sm font-medium text-[#737373]">Last name*</label>
              <div className="ml-auto w-[300px]">
                <Input type="text" value={data !== undefined && data.profile.length !== 0 ? data.profile[0].last_name : ''} placeholder="e.g. Appleseed" register={register('last_name')} error={errors.last_name} errorMessage={errors.last_name?.message} />
              </div>
            </div>
            <div className="flex justify-stretch items-center w-full">
              <label className="block mb-2 w-fit text-sm font-medium text-[#737373]">Email</label>
              <div className="ml-auto w-[300px]">
                <Input type="email" value={data !== undefined && data.profile.length !== 0 ? data.profile[0].email : ''} placeholder="e.g. email@example.com" register={register('email')} error={errors.email} errorMessage={errors.email?.message} />
              </div>
            </div>

          </div>
        </div>
        <div className=" h-[100px] w-full mt-auto p-5 flex  justify-end border-t-2 border-[#D9D9D9] absolute inset-x-0 bottom-0">
          <button type="submit" className="flex justify-center items-center gap-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium  focus:outline-none rounded-lg border border-gray-200 hover:bg-[#EFEBFF] hover:text-[#633CFF] focus:z-10 focus:ring-4 focus:ring-gray-100 text-[white] border-[#633CFF] bg-[#633CFF] hover:bg-[#4b31b5] hover:text-white" disabled={isSubmitting}>save</button>
          {/* <Button type="submit" icon="" className="text-[white] border-[#633CFF] bg-[#633CFF] hover:bg-[#4b31b5] hover:text-white" handleClick={() => { }} /> */}
        </div>
      </form>
    </div>
  )
}


export default CustomizeProfile;