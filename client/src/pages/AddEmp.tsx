// import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import PersonalInformation from './PersonalInformation';
import ProfessionalInformation from './ProfessionalInformation';
import Documents from './Documents';
import { PERSONAL, PROFESSIONAL, DOCUMENTS } from '../utils/constants';
import { TypeList } from '../types/DeclareType.types';

const AddEmp = () => {
  const [TabValue, setTabValue] = useState<string>(PERSONAL);

  const [personalformValues, setpersonalFormValues] = useState<TypeList>({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    dob: "",
    status: "",
    gender: "",
    nation: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    placeholder: "",
    name: "",
    type: "",
  })

  const [profformValues, setprofformValues] = useState<TypeList>({
    empid: "",
    uname: "",
    emptype: "",
    pemail: "",
    department: "",
    designation: "",
    working: "",
    join: "",
    mode: ""
  })
  const [docformValues, setdocformValues] = useState<TypeList>({
    appointment:undefined,
    salaryslip:undefined,
    reliving:undefined,
    experience:undefined
  })


  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  //  function handleSubit(){
  //   switch(TabValue){
  //     case PERSONAL:
  //       setTabValue(PROFESSIONAL)
  //       break;
  //     case 
  //   }
  //  }


  return (
    <div className='relative flex flex-col gap-4 p-5 border rounded-sm'>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={TabValue}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Personal Information" value={PERSONAL} />
              <Tab label="Professional Information" value={PROFESSIONAL} />
              <Tab label="Documents" value={DOCUMENTS} />
            </TabList>
          </Box>
          <TabPanel value={PERSONAL}><PersonalInformation setTabValue={setTabValue} personalformValues={personalformValues} setpersonalFormValues={setpersonalFormValues} /></TabPanel>
          <TabPanel value={PROFESSIONAL}><ProfessionalInformation setTabValue={setTabValue} profformValues={profformValues} setprofformValues={setprofformValues}/></TabPanel>
          <TabPanel value={DOCUMENTS}><Documents docformValues={docformValues} setdocformValues={setdocformValues}/></TabPanel>
        </TabContext>
      </Box>
    </div>
  )
}
export default AddEmp