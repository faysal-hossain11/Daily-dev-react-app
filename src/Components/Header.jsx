import React, { useState } from 'react'
import Logo from './../assets/images/logo.svg'
import { HiBars3, HiXMark  } from "react-icons/hi2";

function Header() {

    const [toggle, setToggle] = useState(false);

    return (
        <div className='flex justify-between w-full md:w-[992px] lg:w-[1200px] mx-auto py-7 md:items-center'>
            <div className='flex gap-10'>
                <div>
                    <a href="http://localhost:5173/">
                    <img src={Logo} alt="" />
                    </a>
                </div>
                <div className='hidden md:flex '>
                    <ul className='md:flex gap-8'>
                        <li className='text-[18px] cursor-pointer hover:text-[#F76EC2] font-bold transition-all duration-200'>App</li>
                        <li className='text-[18px] cursor-pointer hover:text-[#F76EC2] font-bold transition-all duration-200'>Docs</li>
                    </ul>
                </div>

            </div>
            <div className='md:flex hidden'>
                <button className='border-1 border-white text-[16px] font-bold py-4 '>Add to browser <span className='text-[gray] '> - it's free</span></button>
            </div>
            <div className='md:hidden lg:hidden'>
                {!toggle ? 
                <HiBars3 onClick={() => setToggle(true)} className='text-3xl float-right cursor-pointer'/>
                :
                <HiXMark onClick={() => setToggle(false)} className='text-3xl float-right cursor-pointer'/>
                }
                {toggle?
                    <ul className='md:flex gap-8 ml-[-100px] absolute rounded-md text-center w-[30%] h-[20%] right-8 pt-10 mx-auto mt-8 bg-[#313131]'>
                        <li className='text-[18px] mb-3 cursor-pointer hover:text-[#F76EC2]'>App</li>
                        <li className='text-[18px] cursor-pointer hover:text-[#F76EC2]'>Docs</li>
                    </ul>
                    :null
                }
            </div>
        </div>
    )
}

export default Header