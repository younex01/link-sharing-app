import { useAuth0 } from "@auth0/auth0-react";
import CustomizeLinks from "./components/CustomizeLinks"
import Nav from "./components/Nav"
import Phone from "./components/Phone"
import { useEffect } from "react";


function App() {

  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(()=>{
    console.log(user);
  },[user])
  
  console.log("user: -->",user);
  return (
    <>
    {
      isAuthenticated ?
      (<div className="bg-[#FAFAFA]">
        <div className=" h-screen overflow-hidden flex flex-col items-center gap-5 mx-10 ">
          <div className="w-full ">
            <Nav />
          </div>
          <div className="flex flex-row gap-5 w-full h-full mb-5">
            <Phone />
            <CustomizeLinks />
          </div>
        </div>
      </div>) : (
        <div className="flex justify-center items-center h-screen">
          <button onClick={() => loginWithRedirect()} className="w-[200px] border-black border-2">Sign In</button>
        </div>
      )
    }
    </>
  )
}

export default App