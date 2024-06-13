import { useParams } from "react-router-dom";
import { GET_PROFILE_BY_ID } from "./graphql/queries";
import { useQuery } from "@apollo/client";
import { FaYoutube } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import { IoLogoLinkedin } from "react-icons/io";
import ArrowRight from "./components/icons/ArrowRight";

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

const PreviewLive = () => {
  let { id } = useParams();
  const { data, loading, error } = useQuery(GET_PROFILE_BY_ID, {
    variables: {
      id: id,
    },
  });
  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR!!!</div>;
  if (!data.profile_by_pk) return <div>NO DATA FOUND!!</div>;
  console.log(data);

  return (
    <div className="relative bg-white sm:bg-gray-100 h-screen">
       <div className="sm:h-[357px] w-full sm:bg-blue rounded-b-3xl sm:p-5"></div>
      <div className="flex justify-center ">
        <div className="sm:absolute top-1/4 w-[349px] min-h-[569px] bg-white rounded-3xl">
          <div className="relative flex justify-center flex-col items-center w-full h-full   pt-[48px] px-[56px]">
          <div className="w-[237px] flex justify-center flex-col items-center">
            <div className="h-[104px] w-[104px] rounded-full bg-blue border-4 border-blue">
              {data.profile_by_pk.avatar ? (
                <img
                  src={data.profile_by_pk.avatar}
                  alt=""
                  className="h-full w-full rounded-full object-cover"
                />
              ) : null}
            </div>
            <div className="flex justify-center flex-col items-center pt-[25px]">
            <div className="font-bold   text-[32px]  text-center">{`${data.profile_by_pk.first_name} ${data.profile_by_pk.last_name}`}</div>
            </div>
            <div className="text-[16px] text-[#737373] h-[24px]">{data.profile_by_pk.email}</div>
            <div className="relative w-full pt-[56px]">
              {Array.from({
                length: Math.max(
                  4,
                  data && data.profile_by_pk.links
                    ? data.profile_by_pk.links.length
                    : 0
                ),
              }).map((_, idx) => {
                const item =
                  data && data.profile_by_pk.links
                    ? data.profile_by_pk.links[idx]
                    : null;
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
                        <a href={item ? item.link : ""} target="_blank" className="relative flex flex-row gap-3 items-center flex-grow">
                        
                          {item
                            ? platforms.find(
                                (platform) => platform.text === item.platform_name
                              )?.icon
                            : ""}
                          {item ? item.platform_name : ""}
                          <div className="absolute right-0 translate-y-0.5">
                            {item ? <ArrowRight /> : ""}
                          </div>
                        </a>
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

export default PreviewLive;
