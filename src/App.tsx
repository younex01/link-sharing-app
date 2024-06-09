import { useQuery } from "@apollo/client";
import CustomizeLinks from "./components/CustomizeLinks"
import Nav from "./components/Nav"
import Phone from "./components/Phone"
import { GET_LINKS } from "./graphql/queries";
import { useState } from "react";


function App() {
  const { data, loading, error } = useQuery(GET_LINKS);
  const [copyData,setCopyData] = useState({...data});

  if(loading)
    return <div>loading</div>;
  if(error)
    return <div>error</div>;
  
  return (
    <>
    <div className="bg-[#FAFAFA]   ">
        <div className=" h-screen  flex flex-col items-center sm:gap-5 sm:mx-[24px] sm:py-[24px] ">
          <div className="w-full ">
            <Nav />
          </div>
          <div className="bg-[#FAFAFA] w-full h-full flex flex-row gap-5 p-[16px] sm:p-0 sm:mx-[24px]">
            <Phone data={copyData} />
            <CustomizeLinks data={data} setData={setCopyData} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App