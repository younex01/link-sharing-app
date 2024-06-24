import { GET_PROFILES } from "../graphql/queries";
import { useEffect, useState } from "react";
import { FaPlus, FaRegImage } from "react-icons/fa6";
import { useAuth0 } from "@auth0/auth0-react";
import { useUpdateProfileAvatarMutation } from "../graphql/generated/schema";

interface ImageType {
  value: string;
  id: number;
}

const ImageUpload = ({ value, id }: ImageType) => {
  const { user, isLoading } = useAuth0();
  if (isLoading) return <div>loading</div>;
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >();
  const [updateAvatar] = useUpdateProfileAvatarMutation({
    refetchQueries: [
      { query: GET_PROFILES, variables: { user_id: user?.sub } },
    ],
  });

  useEffect(() => {
    setSelectedImage(value);
  }, [value]);

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        if(!e.target?.result) return;
        try {
           await updateAvatar({
            variables: {
              id: id,
              avatar: String(e.target?.result),
            },
          });
        } catch (err) {
          console.error("Error updating profile:", err);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <label className="relative bg-[#EFEBFF] w-[193px] h-[193px] flex items-center justify-center rounded-2xl mt-5 mb-5 overflow-hidden">
        <input
          type="file"
          className="opacity-0 absolute w-[193px] h-[193px]"
          onChange={handleImageChange}
        />
        {selectedImage ? (
          <>
            <img
              src={selectedImage as string}
              className="w-full h-full object-cover"
            />
            <div className="absolute flex flex-col justify-center items-center text-white">
              <FaRegImage className="text-3xl mb-2" />
              <div className="flex flex-row justify-center items-center">
                <div>Change Image</div>
              </div>
            </div>
          </>
        ) : (
          <div className="absolute flex flex-col justify-center items-center text-[#633CFF]">
            <FaRegImage className="text-3xl mb-2" />
            <div className="flex flex-row justify-center items-center">
              <FaPlus />
              <div>Upload Image</div>
            </div>
          </div>
        )}
      </label>
    </div>
  );
};

export default ImageUpload;
