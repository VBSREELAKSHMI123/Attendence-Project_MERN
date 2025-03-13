import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate()
  const location = useLocation()
const { pathname } = location
  const items = [
    {
    name: "All Employee",
    icon: "E",
    url: "/hjij"
  },
  {
    name: "Attendence",
    icon: "A",
    url: "/jjj"
  }]
  const handleClick = (url:string) =>{
    navigate(url)
  }
  return (
    <div className='flex flex-col h-[calc(100vh-32px)] w-[200px] bg-gray-100 justify-start items-center m-4 rounded-lg p-4'>
      <h1 className='font-bold font-lexend text-2xl mt-4 mb-3'>HR Flow</h1>
      <div className='mt-4 font-medium'>
      {items.map((item: any, index: number) => {
  return (<div key={index}
    className={`w-full py-2 ${item.url == pathname ? 'bg-blue-500 ' : 'bg-gray-100'}   flex gap-2 items-center cursor-pointer `}
    onClick={() => handleClick(item.url)}>
    <p>{item.icon}</p>
    <p>{item.name}</p>
  </div>)
}
)}
    </div>
    <div className='flex justify-between mt-auto cursor-pointer' onClick={()=>navigate('/login')}>Logout</div>
    </div>
  );
}

export default SideBar;
