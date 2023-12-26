import React, { useState } from 'react'
import { useAuth } from '../../Context/Auth'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const auth = useAuth()
    const [user , setUser] = useState('')
    const handelLogin = () => {
      auth.login(user)
      navigate("/" , {replace : true})
    }
   
  return (
    <div className=' m-52'>
        <label>
            username :
             <input
            onChange={(e) => setUser(e.target.value)}
             className=' outline'
              placeholder='Username'
               type='text'
                name='username'/>
        </label>
        <button 
        onClick={handelLogin}
        className=' bg-gray-600 rounded-lg p-1 ml-6'
        type='button'>Login</button>
    </div>
  )
}

export default Login
