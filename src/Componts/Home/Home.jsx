
import {  useNavigate } from "react-router-dom"
import { useAuth } from '../../Context/Auth'


export default function Home() {
  const navigate = useNavigate()
  const auth = useAuth()
  return (
    <div className="container m-40">
      <h1>Home</h1>
      {!auth.user && ( <button 
        className=" button_icrement "
         onClick={() => navigate("/login")}>Go to login</button>
  )}

       <button
       className="button_About"
       onClick={()=> navigate('/profile')}
       >Go To profile</button>
    </div>
  );
  }