import Nav from './components/Nav'
import Phone from './components/Phone'
import CustomizeProfile from './components/CustomizeProfile'
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_LINKS } from './graphql/queries';

const Profile = () => {
  const { data } = useQuery(GET_LINKS);
  const [copyData,setCopyData] = useState({...data});

  // useEffect(()=>{
  //   setCopyData({...data})
  // },[data])

    return (
        <>
        <div className="bg-[#FAFAFA] ">
    
        <div className=" h-screen  flex flex-col items-center sm:gap-5 sm:mx-[24px]">
          <div className="w-full ">
    
          <Nav/>
          </div>
          <div className="bg-[#FAFAFA] flex flex-row gap-5 p-[16px] sm:mx-[24px]  border-red border-2">
          <Phone  data={copyData}  />
          <CustomizeProfile />
          </div>
        </div>
        </div>
        </>
      )
}

export default Profile