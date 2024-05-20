import ButtonP from "./components/ButtonP";
import ButtonS from "./components/ButtonS";
import { IoLogoLinkedin } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import ArrowRight from "./components/icons/ArrowRight";
import { Profiler } from "react";
import { Link } from "react-router-dom";


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

const Preview = () => {

  const { imgUrl = "", first_name = "", last_name = "", email = ""} = User.Profile;

  return (
    //  {/* ---------- */}


//  {/* ---------- */}

<div className="relative bg-gray-100 h-screen">
      <div className="h-1/3 w-full bg-blue rounded-b-3xl p-5">
        <div className="h-[78px] w-full bg-white rounded-xl p-2 flex justify-between items-center">
          <div className="w-[163px]">
          <Link to="/">
            <ButtonS text="Back to Editor" />
          </Link>
          </div>
          <div className="w-[135px]">
            <ButtonP text="Share Link" />
          </div>
        </div>
      </div>
      <div className="flex justify-center">

      <div className="absolute top-1/4 w-1/4 h-2/4 bg-white rounded-3xl flex justify-center flex-col items-center px-12">
      <div className="h-[104px] w-[104px] rounded-full bg-blue border-2 border-blue">
        {imgUrl ? <img src={imgUrl} alt={`${first_name} ${last_name}`} className="h-full w-full rounded-full" /> : null}
      </div>
      <div className="text-2xl font-bold my-5">{`${first_name} ${last_name}`}</div>
      <div className="text-sm mb-10">{email}</div>
        <div className="w-full p-2">

      {User.links.map((item, index) => (
        <a
        key={index}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-${item.color} px-2 py-2 w-full text-left text-white rounded-lg mb-4 flex items-center`}
        style={{ backgroundColor: `${item.color}` }}
        >
          <div className="relative flex flex-row gap-5 items-center flex-grow">
            {item.icon}
            {item.text}
            <div className="absolute right-0">
              <ArrowRight />
            </div>
          </div>
        </a>
      ))}
      </div>
      </div>
      </div>
    </div>
  );
};


export default Preview




