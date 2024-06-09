import Nav from './components/Nav'
import Phone from './components/Phone'
import CustomizeProfile from './components/CustomizeProfile'
import {  useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_LINKS } from './graphql/queries';

const Profile = () => {
  const { data } = useQuery(GET_LINKS);
  const [copyData,setCopyData] = useState({...data});



    return (
        <>
        <div className="bg-[#FAFAFA] ">
    
        <div className=" h-screen  flex flex-col items-center sm:gap-5 sm:mx-[24px] sm:py-[24px]">
          <div className="w-full ">
    
          <Nav/>
          </div>
          <div className="bg-[#FAFAFA] h-full w-full flex flex-row gap-5 p-[16px] sm:p-0 sm:mx-[24px] ">
          <Phone  data={copyData}  />
          <CustomizeProfile />
          </div>
        </div>
        </div>
        </>
      )
}

export default Profile