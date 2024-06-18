import { Link } from "react-router-dom";
import ButtonP from "./components/ButtonP";
import HomeIcon from "./components/HomeIcon";
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
  const {loginWithRedirect } = useAuth0();

    const handleLogin = async () => {
      await loginWithRedirect({
        appState: {
          returnTo: "/home",
        },
      });
    };

  return (
    <div className="w-screen h-screen flex flex-row sm:justify-center items-center bg-[#FAFAFA] gap-[24px] p-[24px]">
      <div className="w-[500px] h-[500px] hidden sm:flex">
        <HomeIcon />
      </div>
      <div className="font-bold text-4xl text-black flex flex-col justify-around h-full sm:h-[500px] ">
        <div>
        <div className="text-3xl sm:text-4xl">EVERYTHING YOU ARE.</div>
        <div className="text-blue text-4xl sm:text-6xl">IN ONE, SIMPLE LINK</div>
        <div className="text-3xl sm:text-4xl">IN BIO.</div>
        </div>
        <div className="sm:hidden"><HomeIcon /></div>
        <div className="flex items-center justify-center">
        <div className="sm:w-[180px] w-full">
        <Link to="/home">
        <ButtonP text="GET STARTED" handleClick={handleLogin} disable={false}/>
        </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default App;
