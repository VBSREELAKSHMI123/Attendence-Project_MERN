import React, { useState } from 'react'
import { TypeList } from '../../types/DeclareType.types'

type HandleType = {
    label: string,
    value: string | undefined | number,
    name: string,
    type: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}
//type , onChange, name , password condition , style 
//style modification 



export const InputField = ({ label, value, name, onChange, type }: HandleType) => {
    // const [isShow, setIsShow] = useState<boolean>(true)
    const [passwordType, setpasswordType] = useState<string>(type)
    const handleShowPassword = () => {
        if (passwordType === "password") {
            setpasswordType("text")
        } else {
            setpasswordType("password")
        }
    }
    return (
        <div className='w-full h-full border border-blue-500 rounded-lg bg-white px-3 py-0.5 flex justify-between items-center '>
            <div className='flex flex-col w-full'>
                <label htmlFor="" className='text-[12px] text-blue-500 mb-1'>{label}</label>
                <input className='outline-none w-full text-sm' type={type === "password" ? passwordType : type} name={name} id="" value={value} onChange={onChange} />
            </div>
            {type == "password" && <div className='cursor-pointer' onClick={handleShowPassword} >
                {passwordType === "password" ? "s" : "h"}
            </div>}

        </div>
    )
}
