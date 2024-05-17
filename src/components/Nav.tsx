
import { FaLink } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Button from "./Button";
import Logo from "./Logo"

interface NavType{
    show: number;
    setShow: React.Dispatch<React.SetStateAction<number>>;
}
const Nav = (props:NavType) => {

    
  return (
    <div className="bg-white rounded-xl mt-5 w-full p-5 h-fit flex justify-between items-center ">
        <Logo />
        <div className="flex">
          <Button name="Links" icon={<FaLink />}  className=""  handleClick={() => {if (props.show === 1) return props.setShow(0)}}/>
          <Button name="Profile Details" icon={<CgProfile />} className=""  handleClick={() => {if (props.show === 0) return props.setShow(1)}}/>
        </div>
        <Button name="Preview" icon="" className="text-[#633CFF] border-[#633CFF] " handleClick={()=> {}}/>
    </div>
  )
}

export default Nav