import CustomizeLinks from "./components/CustomizeLinks"
import Nav from "./components/Nav"
import Phone from "./components/Phone"
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import PageLoader from "./page-loader";
import { useGetProfileByUserIdQuery, useGet_LinksQuery } from "./graphql/generated/schema";


function Home() {
  const { user, isLoading } = useAuth0();
  if(isLoading || !user || !user.sub)
    return <PageLoader />;
  const { data: dataProfile,loading: load} = useGetProfileByUserIdQuery(
    {
      variables: { user_id: user?.sub },
    }
  );
  const id:number | undefined = dataProfile?.profile[0]?.id;
  const { loading, error, data } = useGet_LinksQuery({
    variables: { id:id||0 },
    skip: !dataProfile?.profile[0]?.id || !id, 
  });
  const [copyData,setCopyData] = useState({...data});
  if(load)
    return <PageLoader />;
  if(!dataProfile)
    return <PageLoader />;

  if(loading)
    return <PageLoader />;
  if(error)
    return <div>error</div>;
  
  return (
    <>
    { data && ( <div className="bg-[#FAFAFA]   ">
        <div className=" h-screen  flex flex-col items-center sm:gap-5 sm:mx-[24px] sm:py-[24px] ">
          <div className="w-full ">
            <Nav />
          </div>
          <div className="bg-[#FAFAFA] w-full h-full flex flex-row gap-5 p-[16px] sm:p-0 sm:mx-[24px]">
            <Phone data={copyData}  dataProfile={dataProfile} />
            <CustomizeLinks data={data} setData={setCopyData}  />
          </div>
        </div>
      </div>)
    }
    </>
  )
}

export default Home;