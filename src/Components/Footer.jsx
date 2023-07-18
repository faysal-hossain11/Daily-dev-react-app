import React from 'react'
import Logo from './../assets/images/logo.svg'
import { AppText } from '../Contents/Contents'
import { FaTwitter } from "react-icons/fa";
import { FaGithub, FaInstagram, FaTiktok } from "react-icons/fa6";

function Footer() {
    return (
        <div className='pt-[100px] pb-[30px] border-t-[2px] border-[#E669FB]'>
            <div className=' w-full md:w-[992px] lg:w-[1200px] mx-auto '>
                <div className='md:flex md:justify-between lg:justify-between'>
                    <div className='w-full text-center md:text-left px-5 md:px-0 md:w-[35%]'>
                        <img className='w-[200px] md:mx-0 mx-auto mb-10' src={Logo} alt="" />
                        <p className='text-[#A9ABB3]'>{AppText.footer}</p>
                        <a href="https://chrome.google.com/webstore/detail/dailydev-the-homepage-dev/jlmpjdjjbgclbocgajdjefcidcncaied">
                            <button className='outline-none border-[1px] border-white text-white hover:underline mt-5'>Add to browser</button>
                        </a>
                        <div className='flex  gap-7 mt-12 text-[30px] md:w-full w-[30%] mx-auto  '>
                            <a className='text-[#767676] hover:text-white '  href="https://twitter.com/dailydotdev"><FaTwitter /></a>
                            <a className='text-[#767676] hover:text-white ' href="https://github.com/dailydotdev/daily"><FaGithub /></a>
                            <a className='text-[#767676] hover:text-white ' href="https://www.instagram.com/dailydotdev/"><FaInstagram /></a>
                            <a className='text-[#767676] hover:text-white ' href="https://www.tiktok.com/@dailydotdev"><FaTiktok /></a>
                        </div>
                    </div>
                    <div className=' md:mb-10 w-full px-[60px] md:px-0 mt-16 md:mt-0  md:w-[40%] flex justify-between'>
                        <div className='text-[#A9ABB3]'>
                            <p className='text-[20px] text-[#F76EC2] font-bold mb-5'>{AppText.product}</p>
                            <ul>
                                <li className='mb-3 text-[15px] hover:underline cursor-pointer hover:text-[#F76EC2]'>Chrome extension</li>
                                <li className='mb-3 text-[15px] hover:underline cursor-pointer hover:text-[#F76EC2]'>Firefox add on</li>
                                <li className='mb-3 text-[15px] hover:underline cursor-pointer hover:text-[#F76EC2]'>Edge add on</li>
                                <li className='mb-3 text-[15px] hover:underline cursor-pointer hover:text-[#F76EC2]'>Web version</li>
                                <li className='mb-3 text-[15px] hover:underline cursor-pointer hover:text-[#F76EC2]'>Docs</li>
                                <li className='mb-3 text-[15px] hover:underline cursor-pointer hover:text-[#F76EC2]'>Changelog</li>
                            </ul>
                        </div>
                        <div className='text-[#A9ABB3]'>
                            <p className='text-[20px] text-[#F76EC2] font-bold mb-5'>{AppText.comty}</p>
                            <ul>
                                <li className='mb-3 text-[15px] hover:underline cursor-pointer hover:text-[#F76EC2]'>Open sourse</li>
                                <li className='mb-3 text-[15px] hover:underline cursor-pointer hover:text-[#F76EC2]'>Feture requests</li>
                                <li className='mb-3 text-[15px] hover:underline cursor-pointer hover:text-[#F76EC2]'>Online events</li>
                                <li className='mb-3 text-[15px] hover:underline cursor-pointer hover:text-[#F76EC2]'>Swag store</li>
                            </ul>
                        </div>
                        <div className='text-[#A9ABB3]'>
                            <p className='text-[20px] text-[#F76EC2] font-bold mb-5'>{AppText.company}</p>
                            <ul>
                                <li className='mb-3 text-[15px] hover:underline cursor-pointer hover:text-[#F76EC2]'>Careers</li>
                                <li className='mb-3 text-[15px] hover:underline cursor-pointer hover:text-[#F76EC2]'>Blog</li>
                                <li className='mb-3 text-[15px] hover:underline cursor-pointer hover:text-[#F76EC2]'>Advertise</li>
                                <li className='mb-3 text-[15px] hover:underline cursor-pointer hover:text-[#F76EC2]'>Brand book</li>
                                <li className='mb-3 text-[15px] hover:underline cursor-pointer hover:text-[#F76EC2]'>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='md:flex md:justify-between  pt-[20px] border-t-[1px] border-[#989898]'>
                    <div className='w-full text-center md:w-[50%] md:flex items-center gap-8'>
                        <p>{AppText.footerB}</p>
                        <ul className='flex gap-8 items-center mt-4 md:mt-0 md:justify-start justify-center'>
                            <li className='text-[#A9ABB3] hover:text-[#F76EC2] cursor-pointer hover:underline text-[14px]'>Teams</li>
                            <li className='text-[#A9ABB3] hover:text-[#F76EC2] cursor-pointer hover:underline text-[14px]'>Privacy</li>
                            <li className='text-[#A9ABB3] hover:text-[#F76EC2] cursor-pointer hover:underline text-[14px]'>Guidelines</li>
                        </ul>
                    </div>
                    <div className=' w-full text-center md:w-[50%] md:py-0 py-3 md:flex md:justify-end'>
                        <p>{AppText.ft1}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer