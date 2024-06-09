import { useQuery } from "@apollo/client";
import PhoneCase from "./PhoneCase"
import { GET_LINKS, GET_PROFILES } from "../graphql/queries";
import { useEffect } from "react";
import { FaYoutube } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import { IoLogoLinkedin } from "react-icons/io";
import ArrowRight from "./icons/ArrowRight";


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

const Phone = ({data}:any) => {
  // const { loading, error, data } = useQuery(GET_LINKS);
  const { data: dataProfile } = useQuery(GET_PROFILES);

  useEffect(() => {

    console.log("from phone useEffect", data);
  }, [dataProfile,data])
  console.log("from Phone", dataProfile);

  return (
    <div className="hidden lg:flex bg-white rounded-xl w-2/3  justify-center items-center">
      <div className="relative flex justify-center items-center">
        {dataProfile && dataProfile.profile ? (
          <>
            <PhoneCase />
            <div className="bg-white m-5 absolute w-[250px] h-[550px] flex flex-col">
              <img src={dataProfile.profile[0].avatar} className="h-[96px] w-[96px] bg-white rounded-full mb-auto mt-8 mx-auto object-cover" />
              <div className="text-lg font-medium mb-auto mx-auto">{dataProfile.profile[0].first_name} {dataProfile.profile[0].last_name}</div>
              <div className="mx-auto mb-auto">{dataProfile.profile[0].email}</div>
              {
                Array.from({ length: Math.max(4, data && data.links ? data.links.length : 0) }).map((_, idx) => {
                  const item = data && data.links ? data.links[idx] : null;
                  return (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: item ? platforms.find((platform) => platform.text === item.platform_name)?.color || '#ffffff' : '#ffffff',
                      }}
                      className="w-[237px] h-[44px] bg-white rounded-xl mx-auto mb-auto flex justify-center items-center text-white p-4"
                    >
                      <div className="relative flex flex-row gap-3 items-center flex-grow">
                        {item ? platforms.find((platform) => platform.text === item.platform_name)?.icon : ""}
                        {item ? item.platform_name : ''}
                        <div className="absolute right-0 translate-y-0.5">
                        {item ? <ArrowRight /> : ''}
                          
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </>
        ) : (
          <PhoneCase />
        )

        }
      </div>
    </div>
  )
}

export default Phone


