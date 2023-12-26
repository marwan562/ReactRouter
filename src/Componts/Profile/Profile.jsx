import React from 'react'
import { useAuth } from '../../Context/Auth'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const auth = useAuth()
    const navigate = useNavigate()
    const handelLogout = () => {
        auth.logout()
        navigate("/" , {replace : true})
    }
    
  return (
   
    <div className=' container m-48'>
      <h2> Welcome {auth.user}</h2>
      <button
      className=' bg-red-600 rounded-lg p-1'
      onClick={handelLogout}>Logout</button>
    </div>
  )
}

export default Profile
