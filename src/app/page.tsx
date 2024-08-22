import { useUser } from "@clerk/nextjs"
import Home from "./home/Home";
import Dashboard from "./dashboard/Dashboard";


const Homepage = () => {
  //const {user,isLoaded,isSignedIn}=useUser();
 // if(!isSignedIn&&isLoaded){
//    <Home/>
 // }
  return (
    <Dashboard/>
  )
}

export default Homepage