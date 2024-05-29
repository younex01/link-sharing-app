import CustomizeLinks from "./components/CustomizeLinks"
import Nav from "./components/Nav"
import Phone from "./components/Phone"
import { useAuth0 } from '@auth0/auth0-react';




function App() {
  
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  
  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
    });
  };

  if (!isAuthenticated) {
    console.log("----------->hereeee");
    return(
      <>
      <div className="flex justify-center items-center h-screen">
        <button onClick={handleLogin} className="w-[200px] border-black border-2">Sign In</button>
      </div>
      </>
      );
    }
    console.log(user);
  return (
    <>
    <div className="bg-[#FAFAFA]">
        <div className=" h-screen overflow-hidden flex flex-col items-center gap-5 mx-10 ">
          <div className="w-full ">
            <Nav />
          </div>
          <div className="flex flex-row gap-5 w-full h-full mb-5">
            <Phone />
            <CustomizeLinks />
          </div>
        </div>
      </div>
    </>
  )
}

export default App