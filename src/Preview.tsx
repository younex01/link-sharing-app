import Icon_chain from "./components/icons/icon_chain"

const Preview = () => {
    return (
        <>
            <div className="relative mt-20">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <Icon_chain />
                </div>
                <input type="text" className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue focus:border-blue block w-full ps-10 p-2.5 focus:shadow-md focus:shadow-purple-200 outline-none text-lg" placeholder="name@flowbite.com" />
                <div className="absolute end-3 inset-y-0 flex items-center ps-3.5 pointer-events-none text-red text-sm">Please check again</div>
            </div>
                {/* focus:ring-red focus:border-red focus:shadow-none */}
        </>
    )
}

export default Preview