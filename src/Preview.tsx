import ButtonP from "./components/ButtonP";
import ButtonS from "./components/ButtonS";
import { IoLogoLinkedin } from "react-icons/io";
import { FaLink, FaYoutube } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import ArrowRight from "./components/icons/ArrowRight";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_LINKS, GET_PROFILE } from "./graphql/queries";
import { useAuth0 } from "@auth0/auth0-react";

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
  const { user, isLoading } = useAuth0();
  if(isLoading)
    return <div>loading</div>;
  const { data: dataProfile, loading: isProfileLoading, } = useQuery(GET_PROFILE, {
    variables: { user_id: user?.sub }
  });
  if (isProfileLoading) return <div>Loading links...</div>;
  let id:number | undefined = dataProfile?.profile[0]?.id;
  const { loading, error, data } = useQuery(GET_LINKS, {
    variables: {id}
  });
  const [isCopied, setIsCopied] = useState(false);

	const handleClick = async () => {
    const domain = import.meta.env.VITE_REACT_APP_DOMAIN_PREVIEW;
		try {
			await navigator.clipboard.writeText(
				`${domain}${dataProfile.profile[0].id}`
			);
			setIsCopied(true);

			setTimeout(() => setIsCopied(false), 2000);
		} catch (error) {
			console.error("Error copying text:", error);
		}
	};

  if(loading)
    return <div>loading</div>;
  if(error)
    return <div>error</div>;

  return (

    <div className="relative bg-white sm:bg-gray-100 h-screen">
      <div className="sm:h-[357px] w-full sm:bg-blue rounded-b-3xl sm:p-5">
        <div className="sm:h-[78px] w-full bg-white rounded-xl flex justify-between items-center px-[24px] py-[16px]">
          <div className="w-[159.5px] sm:w-[163px] h-[46px] ">
            <Link to="/">
              <ButtonS text="Back to Editor" icon="" handleClick={()=>{}}/>
            </Link>
          </div>
          <div className="w-[159.5px] sm:w-[163px] h-[46px] ">
            <ButtonP text="Share Link" handleClick={handleClick} disable={false}/>
            <div
              className={`sm:max-w-[409px] w-full fixed bottom-[20px] left-1/2 -translate-x-1/2  text-center bg-[#333333] text-[#FAFAFA] text-[16px] px-[24px] py-[16px] transition-opacity duration-300 ease-in-out rounded-xl ${
                isCopied ? "" : "opacity-0"
              }`}
            >
              <div className="flex justify-center items-center gap-[8px]">
              <FaLink className="text-[#737373] " />
              The link has been copied to your clipboard!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="sm:absolute top-1/4 w-[349px] min-h-[569px] bg-white rounded-3xl ">
          <div className="relative flex justify-center flex-col items-center w-full h-full   pt-[48px] px-[56px]">
            <div className="w-[237px] flex justify-center flex-col items-center">
              <div className="h-[104px] w-[104px] rounded-full bg-blue border-4 border-blue">
                {dataProfile.profile ? (
                  <img
                    src={dataProfile.profile[0].avatar}
                    alt={`${dataProfile.profile[0].first_name} ${dataProfile.profile[0].last_name}`}
                    className="h-full w-full rounded-full object-cover"
                  />
                ) : null}
              </div>
              <div className="flex justify-center flex-col items-center pt-[25px]">
              <div className="font-bold   text-[32px]  text-center">{`${dataProfile.profile[0].first_name} ${dataProfile.profile[0].last_name}`}</div>
              <div className="text-[16px] text-[#737373] h-[24px]">
                {dataProfile.profile[0].email}
              </div>

              </div>
              <div className="relative w-full pt-[56px]">
                {Array.from({
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
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
