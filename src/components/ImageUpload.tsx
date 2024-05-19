import { useState } from "react";
import { FaPlus, FaRegImage } from "react-icons/fa6"

const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState();

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
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
                        <img src={selectedImage} className="w-full h-full object-cover" />
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