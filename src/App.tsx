import { useMutation, useQuery } from "@apollo/client";
import CustomizeLinks from "./components/CustomizeLinks"
import Nav from "./components/Nav"
import Phone from "./components/Phone"
import { useAuth0 } from '@auth0/auth0-react';
import { GET_LINKS, GET_PROFILES } from "./graphql/queries";
import { DELETE_LINK, INSERT_ONE_LINK } from "./graphql/mutations";
import { useEffect, useState } from "react";




function App() {
  const { data, loading, error } = useQuery(GET_LINKS);
  const { data: dataProfile } = useQuery(GET_PROFILES);
  const [copyData,setCopyData] = useState({...data});
  const [changed, setChanged] = useState<boolean>(false);
  // const copyData = { ...data };
  
  
  // useEffect(()=>{
  //   setCopyData({...data})
  // },[data])
  if(loading)
    return <div>loading</div>;
  if(error)
    return <div>error</div>;
  // useEffect(()=>{
  //   console.log("from parent component",copyData);
  // },[copyData])

  // const updateData = (newValue) => {
  //   console.log("from updated data function", newValue);
  //   setCopyData({...newValue});
  // }
  
  return (
    <>
    <div className="bg-[#FAFAFA]">
        <div className=" h-screen overflow-hidden flex flex-col items-center sm:gap-5 sm:mx-[24px]">
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