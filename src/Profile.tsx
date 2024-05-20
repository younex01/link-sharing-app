import Nav from './components/Nav'
import Phone from './components/Phone'
import CustomizeProfile from './components/CustomizeProfile'

const Profile = () => {
    return (
        <>
        <div className="bg-[#FAFAFA]">
    
        <div className=" h-screen flex flex-col items-center gap-5 mx-10 ">
          <div className="w-full ">
    
          <Nav/>
          </div>
          <div className="flex flex-row gap-5 w-full h-full mb-5">
    
          <Phone />
          <CustomizeProfile />
          </div>
        </div>
        </div>
        </>
      )
}

export default Profile