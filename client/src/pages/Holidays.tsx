import React, { ReactHTMLElement, useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';


type HolidayType = {
  date:string,
  day:string,
  name:string
}

const Holidays = () => {
  const [holidays,setHolidays]=useState<HolidayType[]>([])
  const [data,setData]=useState({
       name:"",
       date:""
  })

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setData({...data,[e.target.name]: e.target.value})
  }

  const fetchHoliday = () =>{
    axios.get("http://localhost:8080/viewholiday").then(
      (response)=>{
       setHolidays(response.data)
      }
    ).catch((error) => {
      console.error("Error fetching Holidays:", error);
    })
  }

  useEffect(()=>{
    fetchHoliday()
  },[])



  return (
<div className="p-4">
      <div className="flex justify-end mb-4">
        <button className="bg-blue-700 rounded-md px-5 py-2 text-sm text-blue-50">Add Holiday</button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Day</TableCell>
              <TableCell align="left">Holiday Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {holidays.map((holiday) => (
              <TableRow key={holiday.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="left">{holiday.date}</TableCell>
                <TableCell align="left">{holiday.day}</TableCell>
                <TableCell align="left">{holiday.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  
 
  )
}

export default Holidays