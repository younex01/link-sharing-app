import { Link } from "react-router-dom";
import ButtonP from "./components/ButtonP";
import HomeIcon from "./components/HomeIcon";

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-row sm:justify-center items-center bg-[#FAFAFA] gap-[24px] p-[24px]">
      <div className="w-[500px] h-[500px] hidden sm:flex">
        <HomeIcon />
      </div>
      <div className="font-bold text-4xl text-black flex flex-col justify-around h-full sm:h-[500px] ">
        <div>
        <div>EVERYTHING YOU ARE.</div>
        <div className="text-blue text-6xl">IN ONE, SIMPLE LINK</div>
        <div>IN BIO.</div>
        </div>
        <div className="flex items-center justify-center">
        <div className="sm:w-[180px] w-full">
        <Link to="/">
        <ButtonP text="GET STARTED" handleClick={()=>{}} disable={false}/>
        </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
