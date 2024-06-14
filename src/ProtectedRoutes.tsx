import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

const ProtectedRoutes = () => {
    const { user, isAuthenticated, loginWithRedirect } = useAuth0();

    const handleLogin = async () => {
      await loginWithRedirect({
        appState: {
          returnTo: "/",
        },
      });
    };
  

    useEffect(()=>{
        // console.log(user);
      },[user])
    
    if (!isAuthenticated) {
      return(
        <>
        <div className="flex justify-center items-center h-screen">
          <button onClick={handleLogin} className="w-[200px] border-black border-2">Sign In</button>
        </div>
        </>
        );
      }
};


export default ProtectedRoutes