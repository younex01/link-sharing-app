import { useParams } from "react-router-dom";
import { GET_PROFILE } from "./graphql/queries";
import { useQuery } from "@apollo/client";
import { FaYoutube } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import { IoLogoLinkedin } from "react-icons/io";
import ArrowRight from "./components/icons/ArrowRight";

const platforms = [
    {
      icon: <FaYoutube />,
      text: 'Youtube',
      color: '#EE3939',
    },
    {
      icon: <PiGithubLogoFill />,
      text: 'Github',
      color: '#1A1A1A',
    },
    {
      icon: <IoLogoLinkedin />,
      text: 'Linkedin',
      color: '#2D68FF',
    }
  ];

const PreviewLive = () => {

    let { id } = useParams();
    const { data, loading, error } = useQuery(GET_PROFILE, {
        variables: {
          id: id,
        },
      });
    if(loading) return <div>loading...</div>
    if(error) return <div>ERROR!!!</div>
    if(!data.profile_by_pk) return <div>NO DATA FOUND!!</div>
    console.log(data);

  return (
    <div className="relative bg-gray-100 h-screen">
      <div className="h-1/3 w-full bg-blue rounded-b-3xl p-5">
      </div>
      <div className="flex justify-center ">

      <div className="absolute top-1/4 w-1/5 h-2/4 bg-white rounded-3xl flex justify-center flex-col items-center px-12 ">
        <div className="relative flex justify-center flex-col items-center w-full h-full">


      <div className="h-[104px] w-[104px] rounded-full bg-blue border-2 border-blue">
        {data.profile_by_pk.avatar ? <img src={data.profile_by_pk.avatar} alt="" className="h-full w-full rounded-full object-cover" /> : null}
      </div>
      <div className="text-2xl font-bold my-5 ">{`${data.profile_by_pk.first_name} ${data.profile_by_pk.last_name}`}</div>
      <div className="text-sm mb-10">{data.profile_by_pk.email}</div>
        <div className="relative w-full p-2 ">

      {
      Array.from({ length: Math.max(4, data && data.profile_by_pk.links ? data.profile_by_pk.links.length : 0) }).map((_, idx) => {
        const item = data && data.profile_by_pk.links ? data.profile_by_pk.links[idx] : null;
        console.log("-----",item);
        return (
          <div
            key={idx}
            style={{
              backgroundColor: item ? platforms.find((platform) => platform.text === item.platform_name)?.color || '#ffffff' : '#ffffff',
            }}
            className="w-[237px] h-[44px] bg-white rounded-xl mx-auto mb-5 flex justify-center items-center text-white p-4"
          >
            <a href={item ? item.link : ""} target="_blank">
            <div className="relative flex flex-row gap-3 items-center flex-grow">
              {item ? platforms.find((platform) => platform.text === item.platform_name)?.icon : ""}
              {item ? item.platform_name : ''}
              <div className="absolute right-0 translate-y-0.5">
              {item ? <ArrowRight /> : ''}
                
              </div>
            </div>
            </a>
          </div>
        );
      })
      }
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default PreviewLive