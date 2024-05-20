
import { FaLink } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Button from "./Button";
import Logo from "./Logo"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Tab from "./Tab";
import { useLocation } from 'react-router-dom';

interface NavType{
    show: number;
    setShow: React.Dispatch<React.SetStateAction<number>>;
}
const Nav = (props:NavType) => {
  const [clickedLink,setClickedLink] = useState<boolean>();
  const [clickedProfile,setClickedProfile] = useState<boolean>();
    
  const location = useLocation();
  const isProfilePage = location.pathname === '/profile';
  const isRootPath = location.pathname === '/';

  useEffect(()=> {
    if(isProfilePage)
     { 
       setClickedProfile(true);
       setClickedLink(false);
      }
      if(isRootPath)
        {
      setClickedLink(true);
      setClickedProfile(false);
    }

  },[]);


  return (
    <div className="bg-white rounded-xl mt-5 w-full p-5 h-fit flex justify-between items-center ">
        <Logo />
        <div className="flex">
          <Link to="/">
            <Tab activated={clickedLink} text="Links" />
          {/* <Button name="Links" icon={<FaLink />}  className=""  handleClick={() => {if (props.show === 1) return props.setShow(0)}} /> */}
          </Link>
          <Link to="/profile">
            <Tab activated={clickedProfile} text="Profile Details"/>
          {/* <Button name="Profile Details" icon={<CgProfile />} className=""  handleClick={() => {if (props.show === 0) return props.setShow(1)}}/> */}
          </Link>
        </div>
        <Link to="/preview">
        <Button name="Preview" icon="" className="text-[#633CFF] border-[#633CFF] " handleClick={()=> {}}/>
        </Link>
    </div>
  )
}

export default Nav