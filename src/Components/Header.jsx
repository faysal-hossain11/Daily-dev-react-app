import React, { useState } from 'react'
import Logo from './../assets/images/logo.svg'
import { HiBars3, HiXMark } from "react-icons/hi2";
import Apps from '../pages/Apps';
import { Link } from 'react-router-dom';

function Header() {

    const [toggle, setToggle] = useState(false);

    return (
        <div className='w-full fixed md:px-0 px-3 top-0 z-[999] bg-[#212121] shadow-lg shadow-[#313131]'>
            <div className='flex justify-between w-[100%] md:w-[992px] lg:w-[1200px] mx-auto py-5 md:items-center '>
                <div className='flex gap-10'>
                    <div>
                        <a href="http://localhost:5173/">
                            <img src={Logo} alt="" />
                        </a>
                    </div>
                    <div className='hidden md:flex '>
                        <ul className='md:flex gap-8'>
                            <Link className='text-[18px] text-white cursor-pointer hover:text-[#F76EC2] font-bold transition-all duration-200' to="/apps">Apps</Link>
                            <Link className='text-[18px] text-white cursor-pointer hover:text-[#F76EC2] font-bold transition-all duration-200' to="/docs">Docs</Link>
                        </ul>
                    </div>

                </div>
                <div className='md:flex hidden'>
                    <button className='border-1 border-white text-[16px] font-bold py-4 '>Add to browser <span className='text-[gray] '> - it's free</span></button>
                </div>
                <div className='md:hidden lg:hidden'>
                    {!toggle ?
                        <HiBars3 onClick={() => setToggle(true)} className='text-3xl float-right cursor-pointer' />
                        :
                        <HiXMark onClick={() => setToggle(false)} className='text-3xl float-right cursor-pointer' />
                    }
                    {toggle ?
                        <ul className='md:flex flex-col gap-8 ml-[-100px] absolute rounded-md text-center w-[30%] right-8 pt-6 pb-6 mx-auto mt-12 bg-[#313131]'>
                            <Link className='text-[18px] text-white mb-3 cursor-pointer hover:text-[#F76EC2]' to="/apps" >App</Link><br /> <br />
                            <Link className='text-[18px] text-white cursor-pointer hover:text-[#F76EC2]' to="/docs" >Docs</Link>
                        </ul>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Header