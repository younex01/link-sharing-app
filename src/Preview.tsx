import ButtonP from "./components/ButtonP";
import ButtonS from "./components/ButtonS";
import { IoLogoLinkedin } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import ArrowRight from "./components/icons/ArrowRight";
import { Profiler } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_LINKS, GET_PROFILES } from "./graphql/queries";

const platforms = [
  {
    icon: <FaYoutube />,
    text: "Youtube",
    color: "#EE3939",
  },
  {
    icon: <PiGithubLogoFill />,
    text: "Github",
    color: "#1A1A1A",
  },
  {
    icon: <IoLogoLinkedin />,
    text: "Linkedin",
    color: "#2D68FF",
  },
];

const Preview = () => {
  const { loading, error, data } = useQuery(GET_LINKS);
  const { data: dataProfile } = useQuery(GET_PROFILES);
  // const { imgUrl = "", first_name = "", last_name = "", email = ""} = User.Profile;

  return (
    //  {/* ---------- */}

    //  {/* ---------- */}

    <div className="relative bg-gray-100 h-screen">
      <div className="h-[357px] w-full bg-blue rounded-b-3xl p-5">
        <div className="h-[78px] w-full bg-white rounded-xl p-2 flex justify-between items-center">
          <div className="w-[163px] pl-[24px] py-[16px]">
            <Link to="/">
              <ButtonS text="Back to Editor" />
            </Link>
          </div>
          <div className="w-[135px] pr-[16px] py-[16px]">
            <ButtonP text="Share Link" />
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="absolute top-1/4 w-[349px] min-h-[569px] bg-white rounded-3xl ">
          <div className="relative flex justify-center flex-col items-center w-full h-full  border-black border-2  pt-[48px] px-[56px]">
            <div className="w-[237px] flex justify-center flex-col items-center border-red border-2">
            <div className="h-[104px] w-[104px] rounded-full bg-blue border-4 border-blue">
              {dataProfile.profile ? (
                <img
                  src={dataProfile.profile[0].avatar}
                  alt={`${dataProfile.profile[0].first_name} ${dataProfile.profile[0].last_name}`}
                  className="h-full w-full rounded-full object-cover"
                />
              ) : null}
            </div>
            <div className="text-2xl font-bold pt-[25px]  text-[32px] h-[48px] ">{`${dataProfile.profile[0].first_name} ${dataProfile.profile[0].last_name}`}</div>
            <div className="text-[16px] text-[#737373] h-[24px] pt-[16px]">
              {dataProfile.profile[0].email}
            </div>
            <div className="relative w-full pt-[40px]">
              {
                // User.links.map((item, index) => (
                //   <a
                //   key={index}
                //   href={item.link}
                //   target="_blank"
                //   rel="noopener noreferrer"
                //   className={`bg-${item.color} px-2 py-2 w-full text-left text-white rounded-lg mb-4 flex items-center`}
                //   style={{ backgroundColor: `${item.color}` }}
                //   >
                //     <div className="relative flex flex-row gap-5 items-center flex-grow">
                //       {item.icon}
                //       {item.text}
                //       <div className="absolute right-0">
                //         <ArrowRight />
                //       </div>
                //     </div>
                //   </a>
                // ))
                Array.from({
                  length: Math.max(
                    4,
                    data && data.links ? data.links.length : 0
                  ),
                }).map((_, idx) => {
                  const item = data && data.links ? data.links[idx] : null;
                  return (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: item
                          ? platforms.find(
                              (platform) => platform.text === item.platform_name
                            )?.color || "#ffffff"
                          : "#ffffff",
                      }}
                      className="w-full h-[44px] bg-white rounded-xl  mb-5 flex justify-center items-center text-white p-4"
                    >
                      <div className="relative flex flex-row gap-3 items-center flex-grow">
                        {item
                          ? platforms.find(
                              (platform) => platform.text === item.platform_name
                            )?.icon
                          : ""}
                        {item ? item.platform_name : ""}
                        <div className="absolute right-0 translate-y-0.5">
                          {item ? <ArrowRight /> : ""}
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
