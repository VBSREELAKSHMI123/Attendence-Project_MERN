import { Button } from '@mui/material'
import './App.css'
import SideImage from './components/SideImage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import ForgotPassword from './pages/auth/ForgotPassword'
import EnterOtp from './pages/auth/EnterOtp'
import ResetPassword from './pages/auth/ResetPassword'
import RenderingComponents from './pages/auth/RenderingComponents'
import { Routes, Route } from 'react-router-dom'
import SideMenu from './components/SideMenu'
import UserDashboard from './pages/Dashboard/UserDashboard'
import DashboardLayout from './components/DashboardLayout'
import Navbar from './components/Navbar'

import Attendence from './pages/Attendence'
import Payroll from './pages/Payroll'
import Leaves from './pages/Leaves'
import Holidays from './pages/Holidays'
import Settings from './pages/Settings'
import AddEmp from './pages/AddEmp'
import ViewOnlyEmp from './pages/ViewOnlyEmp'
import EmpList from './pages/EmpList'

function App() {
  return (
    <Routes>
      <Route element={<UserDashboard />} path='/'>
        <Route element={<EmpList />} path='/emp' />
        <Route element={<AddEmp />} path='/addemp' />
        <Route element={<ViewOnlyEmp />} path='/view/:id' />
        <Route element={<Attendence />} path='/attend' />
        <Route element={<Payroll />} path='/pay' />
        <Route element={<Leaves />} path='/leave' />
        <Route element={<Holidays />} path='/holi' />
        <Route element={<Settings />} path='/set' />
        {/* <Route index element={<h1> dashboard</h1>} /> */}
      </Route>
      <Route element={<LoginPage />} path='/login' />
      <Route element={< h1>No page found</h1>} path='*' />
    </Routes>

  )
}

export default App



{/* <Route path='/' element={<RegisterPage/>}/>
  <Route path='/login' element={<LoginPage/>}/>
  <Route path='/otp' element={<EnterOtp/>}/>
  <Route path='/forgot' element={<ForgotPassword/>}/>
  <Route path='/reset' element={<ResetPassword/>}/>
  <Route path='/render' element={<RenderingComponents/>}/>
  <Route path='/side' element={<SideMenu/>}/>
  <Route path='/dash' element={<DashboardLayout/>}/>
  <Route path='/nav' element={<Navbar/>}/> */}