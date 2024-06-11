import { GET_PROFILES } from "../graphql/queries";
import { UPDATE_PROFILE_AVATAR } from "../graphql/mutations";
import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { FaPlus, FaRegImage } from "react-icons/fa6"

interface ImageType{
    value: string;
    id: number;
}

const ImageUpload = ({value, id}: ImageType) => {
    const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>();
    const [updateAvatar] = useMutation(UPDATE_PROFILE_AVATAR, {refetchQueries: [{ query: GET_PROFILES }]});

    useEffect(()=>{
        console.log("image_value",value);
        setSelectedImage(value);
    },[value])

    const handleImageChange =  (event:any) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async (e) => {
                if(e.target)
                    setSelectedImage(e.target.result);

                try {
                    const response = await updateAvatar({
                      variables: {
                        id: id,
                        avatar: e.target?.result,
                      },
                    });
                    console.log('Profile updated:', response.data.update_profile.returning);
                  } catch (err) {
                    console.error('Error updating profile:', err);
                  }
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div>
            <label className="relative bg-[#EFEBFF] w-[193px] h-[193px] flex items-center justify-center rounded-2xl mt-5 mb-5 overflow-hidden">
                <input type="file" className="opacity-0 absolute w-[193px] h-[193px]" onChange={handleImageChange} />
                {selectedImage ? (
                    <>
                        <img src={selectedImage as string} className="w-full h-full object-cover" />
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
    )
}

export default ImageUpload