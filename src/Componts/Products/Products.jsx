import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <div className=' container m-auto '>
        <input 
        type='text'
        className=' outline m-4 p-1'
        />

        <nav className=' flex justify-around gap-4'>
            <Link to="action" className=' bg-yellow-500' >Show Action</Link>
            <Link to="news" className=' bg-gray-500' >Show News</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Products
