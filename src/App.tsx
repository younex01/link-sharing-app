import CustomizeLinks from "./components/CustomizeLinks"
import Nav from "./components/Nav"
import Phone from "./components/Phone"


function App() {
  // const [show, setShow] = useState<number>(0);

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
      {/* {(show == true ) && <CustomizeProfile />} */}
       </div>
    </div>
    </div>
    </>
  )
}

export default App