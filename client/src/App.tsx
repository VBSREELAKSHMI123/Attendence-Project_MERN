import { Button } from '@mui/material'
import './App.css'
import SideImage from './components/SideImage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import ForgotPassword from './pages/auth/ForgotPassword'
import EnterOtp from './pages/auth/EnterOtp'
import  ResetPassword  from './pages/auth/ResetPassword'
import RenderingComponents from './pages/auth/RenderingComponents'
import { Routes,Route } from 'react-router-dom'
import SideMenu from './components/SideMenu'
import UserDashboard from './pages/Dashboard/UserDashboard'
import DashboardLayout from './components/DashboardLayout'
import Navbar from './components/Navbar'

function App() {
  return (
<Routes>
<Route element={<UserDashboard/>} path='/'>
</Route>
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