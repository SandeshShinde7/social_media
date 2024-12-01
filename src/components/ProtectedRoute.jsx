import { Navigate,useLocation,useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"
import notify from "./notify";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  const navigate=useNavigate();
  const location=useLocation();


  // useEffect(()=>{


  //     if( currentUser && location.pathname==="/login")
  //     {
  //       console.log("Already signed in");
  //       notify("Already signed in","info","bottom-center",1500);
  //       navigate("/",{replace:true})
  //     }
  //   console.log(location.pathname)
  // },[currentUser,location])
  
  // useEffect(() => {

  //   if(currentUser===null){
  //     notify("Please Login or Register first","info","bottom-center",1500);
  //     navigate("/login",{replace:true}) 
  //   }
 
  // }, [currentUser])
  

  // if (currentUser===null) {
  //   // If the user is not authenticated, redirect to the login page
  //   return <Navigate  to="/login" replace={true} />;
  // }

  return children;
}

export default ProtectedRoute;
