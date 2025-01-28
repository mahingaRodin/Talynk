import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate();
  return (
    <div className='flex gap-5 justify-center text-center pt-9'>
        <button onClick={()=>navigate('/home1')} className='bg-blue text-white font-semibold w-[200px] h-[50px] rounded-lg'>
            ADMIN PORTAL
        </button>
        <button onClick={()=>navigate('/home')} className='bg-blue w-[200px] text-white font-semibold h-[50px] rounded-lg'>
            APPROVER'S PORTAL
        </button>
    </div>
  )
}

export default Landing