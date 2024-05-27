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


const User = {
  links : [ 
    {
    icon: <FaYoutube />,
    text: "YouTube",
    color: "#EE3939", link: "https://www.youtube.com"
  },
  { icon: <PiGithubLogoFill />, text: "GitHub", color: "#1A1A1A", link: "https://www.github.com"  },
  { icon: <IoLogoLinkedin />, text: "LinkedIn", color: "#2D68FF" , link: "https://www.linkedin.com" },
],
  Profile : {
      imgUrl: "",
      first_name: "Ben",
      last_name: "Wright",
      email: "ben@example.com",
    }
  };

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

const Preview = () => {

  const { loading, error, data } = useQuery(GET_LINKS);
  const { data: dataProfile } = useQuery(GET_PROFILES);
  // const { imgUrl = "", first_name = "", last_name = "", email = ""} = User.Profile;

  return (
    //  {/* ---------- */}


//  {/* ---------- */}

<div className="relative bg-gray-100 h-screen">
      <div className="h-1/3 w-full bg-blue rounded-b-3xl p-5">
        <div className="h-[78px] w-full bg-white rounded-xl p-2 flex justify-between items-center">
          <div className="w-[163px] ">
          <Link to="/">
            <ButtonS text="Back to Editor" />
          </Link>
          </div>
          <div className="w-[135px]">
            <ButtonP text="Share Link" />
          </div>
        </div>
      </div>
      <div className="flex justify-center ">

      <div className="absolute top-1/4 w-1/5 h-2/4 bg-white rounded-3xl flex justify-center flex-col items-center px-12 ">
        <div className="relative flex justify-center flex-col items-center w-full h-full">


      <div className="h-[104px] w-[104px] rounded-full bg-blue border-2 border-blue">
        {dataProfile.profile ? <img src={dataProfile.profile[0].avatar} alt={`${dataProfile.profile[0].first_name} ${dataProfile.profile[0].last_name}`} className="h-full w-full rounded-full object-cover" /> : null}
      </div>
      <div className="text-2xl font-bold my-5 ">{`${dataProfile.profile[0].first_name} ${dataProfile.profile[0].last_name}`}</div>
      <div className="text-sm mb-10">{dataProfile.profile[0].email}</div>
        <div className="relative w-full p-2 ">

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
      Array.from({ length: Math.max(4, data && data.links ? data.links.length : 0) }).map((_, idx) => {
        const item = data && data.links ? data.links[idx] : null;
        return (
          <div
            key={idx}
            style={{
              backgroundColor: item ? platforms.find((platform) => platform.text === item.platform_name)?.color || '#ffffff' : '#ffffff',
            }}
            className="w-[237px] h-[44px] bg-white rounded-xl mx-auto mb-5 flex justify-center items-center text-white p-4"
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
      </div>
      </div>
      </div>
    </div>
  );
};


export default Preview




