import { FaLink } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Button from "./Button";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Tab from "./Tab";
import { useLocation } from "react-router-dom";
import LogoOnly from "./LogoOnly";
import Eye from "./icons/Eye";
import ButtonS from "./ButtonS";

interface NavType {
  show: number;
  setShow: React.Dispatch<React.SetStateAction<number>>;
}
const Nav = (props: NavType) => {
  const [clickedLink, setClickedLink] = useState<boolean>();
  const [clickedProfile, setClickedProfile] = useState<boolean>();

  const location = useLocation();
  const isProfilePage = location.pathname === "/profile";
  const isRootPath = location.pathname === "/";

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
    <div className="bg-white rounded-xl sm:mt-5 w-full p-5 h-fit ">
      <div className="h-[42px] sm:h-[46px] flex justify-between items-center text-center my-auto">

      <div className="h-[42px] sm:h-[46px] flex  item-center pt-1">
        <div className="hidden sm:flex">
          <Logo />
        </div>
        <div className="sm:hidden">
          <LogoOnly />
        </div>
      </div>
      <div className="flex h-[46px]">
        <Link to="/">
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
      <Link to="/preview">
        <div className="hidden sm:flex">
          {/* <Button name="Preview" icon="" className="text-[#633CFF] border-[#633CFF] h-[46px]" handleClick={()=> {}}/> */}
          <ButtonS text="Preview" icon="" />
        </div>
        <div className="sm:hidden">
          <ButtonS text="" icon={<Eye />} />
          {/* <Button name="" icon={<Eye/>} className="text-[#633CFF] border-[#633CFF] h-[46px]" handleClick={()=> {}}/> */}
        </div>
      </Link>
    </div>
    </div>
  );
};

export default Nav;
