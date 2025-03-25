import React from 'react'
import SideMenu from '../../components/SideMenu'
import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'

const UserDashboard = () => {
  return (
    <div className=' flex w-full h-full'>
    <div className='w-full h-screen flex'>
      <SideMenu />
      <div className='flex-1 my-4 mr-4 rounded-lg'>
       <Navbar children='Hello New User 👋🏻'/>
       <div className='px-2 pt-4'>
       <Outlet />
       </div>
      </div>
    </div>
    </div>
  )
}
export default UserDashboard