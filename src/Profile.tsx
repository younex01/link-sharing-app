import Nav from "./components/Nav";
import Phone from "./components/Phone";
import CustomizeProfile from "./components/CustomizeProfile";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_LINKS, GET_PROFILE } from "./graphql/queries";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isLoading } = useAuth0();
  if(isLoading)
    return <div>loading</div>;
  const { data: dataProfile } = useQuery(
    GET_PROFILE,
    {
      variables: { user_id: user?.sub },
    }
  );

  const id = dataProfile?.profile[0].id;
  const { loading, error, data } = useQuery(GET_LINKS, {
    variables: { id },
    skip: !dataProfile?.profile[0]?.id || !id, 
  });
  const [copyData] = useState({ ...data });

  if(loading)
    return <div>loading</div>;
  if(error)
    return <div>error</div>;

  return (
    <>
      <div className="bg-[#FAFAFA] ">
        <div className=" h-screen  flex flex-col items-center sm:gap-5 sm:mx-[24px] sm:py-[24px]">
          <div className="w-full ">
            <Nav />
          </div>
          <div className="bg-[#FAFAFA] h-full w-full flex flex-row gap-5 p-[16px] sm:p-0 sm:mx-[24px] ">
            <Phone data={copyData} dataProfile={dataProfile}/>
            <CustomizeProfile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
