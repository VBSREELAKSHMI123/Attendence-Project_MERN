import React from 'react'
import SideMenu from '../../components/SideMenu'
import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'

const UserDashboard = () => {
  return (
    <div className=' flex w-full h-full'>
    <div className='w-full h-screen flex m-5'>
      <SideMenu />
      <div className='flex-1 m-4 rounded-lg'>
       <Navbar children='Hello New User 👋🏻'/>
       <Outlet />
      </div>
    </div>
    </div>
  )
}

export default UserDashboard