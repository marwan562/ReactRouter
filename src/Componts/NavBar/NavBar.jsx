import { Link } from "react-router-dom";
import { useAuth } from "../../Context/Auth";

 
    
 
export default function NavBar() {
    const auth = useAuth()
    return (
      <div  className='  bg-neutral-700 m-auto    container '>
              
          <div className="flex justify-around">
              
              <Link className="  " to="/">Home</Link>
              <Link to="/store"> Store</Link>
              <Link to="/about"> About</Link>
              <Link to="/products"> Products</Link>
             {auth.user && ( <Link to="/profile"> Profile</Link>)}

              {/* user hide login */}
             {auth.user === null? (<Link to="/login">Login</Link>) : null}

          </div>
            
      </div>
    )
  }