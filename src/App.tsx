import { useState } from "react"
import CustomizeLinks from "./components/CustomizeLinks"
import CustomizeProfile from "./components/CustomizeProfile"
import Nav from "./components/Nav"
import Phone from "./components/Phone"

import { useQuery, gql } from '@apollo/client';
function App() {
  // const [show, setShow] = useState<number>(0);
  
  const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

const { loading, error, data } = useQuery(GET_LOCATIONS);

if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));

  // return (
  //   <>
  //   <div className="bg-[#FAFAFA]">

  //   <div className=" h-screen flex flex-col items-center gap-5 mx-10 ">
  //     <div className="w-full ">

  //     <Nav />
  //     </div>
  //     <div className="flex flex-row gap-5 w-full h-full mb-5">

  //     <Phone />
  //     <CustomizeLinks />
  //     {/* {(show == true ) && <CustomizeProfile />} */}
  //      </div>
  //   </div>
  //   </div>
  //   </>
  // )
}

export default App