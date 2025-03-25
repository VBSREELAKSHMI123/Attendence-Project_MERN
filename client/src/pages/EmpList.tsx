import React from 'react'
import { useNavigate } from 'react-router-dom'


const EmpList = () => {
    
const navigate=useNavigate()
  return (
    <div className='relative'>
        <button className='absolute top-3 right-3 bg-blue-700 rounded-md px-5 py-2 text-sm text-blue-50' onClick={()=>navigate('/addemp')}>Add New Employee</button>
    </div>
  )
}

export default EmpList