import PhoneCase from "./PhoneCase"
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

const Phone = ({data, dataProfile}:any) => {

  return (
    <div className="hidden lg:flex bg-white rounded-xl w-2/3  justify-center items-center max-h-[calc(100vh-154px)]  overflow-y-auto no-scrollbar">
      <div className="relative flex justify-center items-center">
        {dataProfile && dataProfile.profile ? (
          <>
            <PhoneCase/>
            <div className="bg-white m-5 absolute w-[210px] h-[410px] flex flex-col">
              <img src={dataProfile.profile[0].avatar} className="h-[66px] w-[66px] bg-white rounded-full  mt-8 mx-auto object-cover border-[3px] border-blue" />
              <div className="text-[16px] font-bold mt-[21px] mx-auto">{dataProfile.profile[0].first_name} {dataProfile.profile[0].last_name}</div>
              <div className="text-[12px] text-[#737373] mt-[8px] mx-auto mb-[52px]">{dataProfile.profile[0].email}</div>
              {
                Array.from({ length: Math.max(4, data && data.links ? data.links.length : 0) }).map((_, idx) => {
                  const item = data && data.links ? data.links[idx] : null;
                  return (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: item ? platforms.find((platform) => platform.text === item.platform_name)?.color || '#ffffff' : '#ffffff',
                      }}
                      className="w-[180px] h-[34px] text-[10px] bg-white rounded-xl mx-auto mb-auto flex justify-center items-center text-white p-4"
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


