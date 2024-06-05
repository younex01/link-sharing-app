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
        <div className="bg-[#FAFAFA]">
    
        <div className=" h-screen flex flex-col items-center gap-5 mx-10 ">
          <div className="w-full ">
    
          <Nav/>
          </div>
          <div className="flex flex-row gap-5 w-full h-full mb-5">
    
          <Phone  data={copyData}  />
          <CustomizeProfile />
          </div>
        </div>
        </div>
        </>
      )
}

export default Profile