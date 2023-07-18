import React from 'react'
import { AppText } from '../Contents/Contents'
import Browser from './../assets/images/browser.png'
import popupVideo from './../assets/images/daily.dev.png'
import Play from './../assets/images/play.svg'
import github from './../assets/images/github.svg'
import google from './../assets/images/google.svg'
import golden from './../assets/images/golden.svg'
import Apple from './../assets/images/apple.svg'
import Googlesm from './../assets/images/googlesm.svg'
import Microsoft from './../assets/images/microsoft.svg'
import Aws from './../assets/images/aws.svg'
import Meta from './../assets/images/meta.svg'



function Home() {
    return (
        <div>
            <div className=' w-full md:w-[992px] lg:w-[1200px] mx-auto text-center'>
                <div className='w-[90%] md:w-[70%] mx-auto mt-[100px] '>
                    <h2 className='text-[30px] md:text-[48px] leading-[64px] tracking-normal text-white '>{AppText.heroWhere}</h2>
                    <h1 className='text-[50px] md:text-[72px] leading-[96px] font-bold text-[#E669FB] from-current-[#f9f9f9] tracking-normal '>{AppText.grow}</h1>
                    <p className='text-[20px] leading-8 tracking-normal mt-6 '>{AppText.heroP} </p>
                </div>
                <div className='w-[44%] md:w-[30%] mt-10 rounded-md mx-auto items-center flex flex-col py-1 gap-10   '  >
                    <a className='flex items-center hover:shadow-lg hover:shadow-[#ed88ffa8] px-4 bg-white rounded-lg transition-all duration-200 ' href="https://chrome.google.com/webstore/detail/dailydev-the-homepage-dev/jlmpjdjjbgclbocgajdjefcidcncaied">
                        <img className='w-[60px] md:w-[100px] mr-2' src={Browser} alt="" />
                        <p className='ml-2 text-black font-bold text-[15px] md:text-[18px] '>Add to browser <span className='text-[#3a3a3a]'>it's free</span></p>
                    </a>
                </div>
                <div className='mt-6'>
                    <a className='text-white hover:text-white hover:underline ' href="https://app.daily.dev/?utm_source=landing&utm_medium=cta&utm_campaign=landing_conversions" >or try our web version</a>
                </div>
                {/* video popup */}
                <div className='w-[80%] mx-auto mt-[180px] relative '>
                    <div className=''>
                        <img className='w-[100%]  shadow-[0_-55px_150px_-5px_rgba(0,0,0,0.3)] shadow-blue-900 relative z-[-1] ' src={popupVideo} alt="" />
                    </div>
                    <img className=' absolute top-[-75px] shadow-lg left-[35%] md:left-[40%] translate-x-0 ' src={Play} alt="" />
                </div>
            </div>
            <div className='shadow-[0_-85px_150px_-35px_rgba(0,0,0,0.3)] shadow-[#E96AF1] py-[100px] z-[999] w-full'>
                <div className=''>
                    <div className=' w-full md:w-[992px] lg:w-[1200px] mx-auto md:flex md:justify-between items-center'>
                        <div className='w-full md:w-[50%] '>
                            <h2 className='text-[32px] font-bold leading-[44px] text-white md:text-left text-center px-5 md:px-0 pr-0 md:pr-[30px] mb-10 md:mb-0'>{AppText.user}<span className='text-[#E96AF1]'>{AppText.userSpan}</span></h2>
                            <div className='flex gap-8 items-center mt-10 justify-center md:justify-start md:mb-0 mb-24'>
                                <img className='w-[25px]'  src={Apple} alt="" />
                                <img className='w-[80px]'  src={Googlesm} alt="" />
                                <img className='w-[50px]'  src={Aws} alt="" />
                                <img className='w-[110px]'  src={Microsoft} alt="" />
                                <img className='w-[80px]'  src={Meta} alt="" />
                            </div>
                        </div>
                        <div className=' w-full md:w-[50%]'>
                            <img className='w-[45%] mx-auto mb-5' src={github} alt="" />
                            <img className='w-[70%] mx-auto mb-5' src={google} alt="" />
                            <img className='w-[50%] mx-auto' src={golden} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home 