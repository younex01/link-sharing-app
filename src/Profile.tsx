import Nav from "./components/Nav";
import Phone from "./components/Phone";
import CustomizeProfile from "./components/CustomizeProfile";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import PageLoader from "./page-loader";
import { useGetProfileByUserIdQuery, useGet_LinksQuery } from "./graphql/generated/schema";

const Profile = () => {
  const { user, isLoading } = useAuth0();
  if(isLoading || !user || !user.sub)
    return <PageLoader />;
  const { data: dataProfile } = useGetProfileByUserIdQuery(
    {
      variables: { user_id: user?.sub },
    }
  );
  
  if(!dataProfile)
    return <PageLoader />;
  const id = dataProfile?.profile[0].id;
  const { loading, error, data } = useGet_LinksQuery({
    variables: { id },
    skip: !dataProfile?.profile[0]?.id || !id, 
  });
  const [copyData] = useState({ ...data });

  if(loading)
    return <PageLoader />;
  if(error)
    return <div>error</div>;

  return (
    <>
      <div className="bg-[#FAFAFA] h-screen ">
        <div className="h-screen  flex flex-col items-center sm:gap-5 sm:mx-[24px] sm:py-[24px]">
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
