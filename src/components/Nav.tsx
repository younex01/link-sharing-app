import { FaLink } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Tab from "./Tab";
import { useLocation } from "react-router-dom";
import LogoOnly from "./LogoOnly";
import Eye from "./icons/Eye";
import ButtonS from "./ButtonS";
import { useAuth0 } from "@auth0/auth0-react";
import { CiLogout } from "react-icons/ci";


const Nav = () => {
  const [clickedLink, setClickedLink] = useState<boolean | undefined>();
  const [clickedProfile, setClickedProfile] = useState<boolean>();

  const location = useLocation();
  const isProfilePage = location.pathname === "/profile";
  const isRootPath = location.pathname === "/";
  const {logout} = useAuth0();

  useEffect(() => {
    if (isProfilePage) {
      setClickedProfile(true);
      setClickedLink(false);
    }
    if (isRootPath) {
      setClickedLink(true);
      setClickedProfile(false);
    }
  }, []);

  return (
    <div className="bg-white  rounded-xl w-full p-5 h-fit">
      <div className="h-[42px] sm:h-[46px] flex justify-between items-center text-center my-auto">

      <div className="h-[42px] sm:h-[46px] flex justify-center  items-center ">
        <div className="hidden sm:flex">
          <Logo />
        </div>
        <div className="sm:hidden">
          <LogoOnly />
        </div>
      </div>
      <div className="flex h-full">
        <Link to="/home">
          <Tab
            activated={clickedLink}
            text="Links"
            icon={<FaLink className="text-lg" />}
          />
        </Link>
        <Link to="/profile">
          <Tab
            activated={clickedProfile}
            text="Profile Details"
            icon={<CgProfile className="text-2xl font-bold" />}
          />
        </Link>
      </div>
      <div className="flex">
      <Link to="/preview">
        <div className="hidden sm:flex">
          <ButtonS text="Preview" icon="" handleClick={()=>{}}/>
        </div>
        <div className="sm:hidden">
          <ButtonS text="" icon={<Eye />} handleClick={()=>{}}/>
        </div>
      </Link>
      <div>
        <div className="hidden sm:flex">
          <ButtonS text="Logout" icon="" handleClick={()=> logout({ logoutParams: { returnTo: 'https://link-sharing-app-ebon.vercel.app/' } })}/>
        </div>
        <div className="sm:hidden">
          <ButtonS text="" icon={<CiLogout className="text-xl"/>} handleClick={()=> logout({ logoutParams: { returnTo: 'https://link-sharing-app-ebon.vercel.app/' } })}/>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Nav;
