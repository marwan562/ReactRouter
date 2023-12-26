import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";



const RquierAuth = ({children}) => {
  const auth = useAuth()
  if(!auth.user){
    return <Navigate to="/login"/>
  }
  return children;
    
}

export default RquierAuth;
