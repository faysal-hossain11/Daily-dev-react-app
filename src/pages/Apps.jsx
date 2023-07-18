import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { AppText } from '../Contents/Contents';
import zoom1 from './../assets/images/zoom1.png'
import Chrome from './../assets/images/chrome.png'
import FireFox from './../assets/images/firefox.png'
import Edge from './../assets/images/edge.png'
import BookMark from './../assets/images/bookmark.png'
import Website from './../assets/images/website.png'
import Drag from './../assets/images/drag.png'
import IPhone from './../assets/images/iphone.png'
import Ios from './../assets/images/ios.png'
import Google from './../assets/images/google.png'
import Playstore from './../assets/images/playstore.png'



function Apps() {
  return (
    <div>
      {/* START THE DAILY DEV APP SECTION */}
      <div className='text-center w-full md:w-[992px] lg:w-[1200px] mx-auto '>
        <div className='w-full md:w-[50%] mx-auto mt-[200px]'>
          <h2 className='text-[30px] md:text-[48px] leading-[64px] text-white font-semibold mb-6 '>{AppText.appdaily} <span className='text-[#E669FB] '>{AppText.appss}</span> </h2>
          <p className='text-[22px] text-white leading-[32px] '>{AppText.appheroP}</p>
        </div>
        <div className='pt-[100px] pb-[50px] md:flex md:justify-between w-[80%] mx-auto border-b-[1px] border-[#444444]'>
          <div className=' w-full md:w-[30%]'>
            <ReactImageMagnify {...{
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: zoom1
              },
              largeImage: {
                src: zoom1,
                width: 329,
                height: 850
              }
            }} />
          </div>
          <div className='md:text-left text-center w-full md:w-[65%]'>
            <h2 className='text-[28px] leading-[34px] mt-4 text-white font-semibold mb-6 '>{AppText.appBEX} <span className='text-[20px] bg-[#ed4af8] px-3 rounded-full shadow-md shadow-[#E96AF1] '>{AppText.appR} </span></h2>
            <p className='text-[16px] leading-[24px] text-[#A8B3CF] pr-5'>{AppText.appBp}</p>
            <div className='flex gap-5 mt-5 md:justify-start justify-center'>
              <div className='bg-[#fdf6f6] w-[25%] py-2 rounded-xl hover:shadow-lg hover:shadow-[#e669fb] transition-all duration-200 hover:underline '>
                <a href="https://chrome.google.com/webstore/detail/dailydev-the-homepage-dev/jlmpjdjjbgclbocgajdjefcidcncaied">
                  <div className='flex items-center gap-3 justify-center'>
                    <img className='w-[20%]' src={Chrome} alt="" />
                    <p className='text-[18px] text-black font-bold mt-[2px]'>{AppText.chrome}</p>
                  </div>
                </a>
              </div>
              <div className='bg-[#fdf6f6] w-[25%] py-2 rounded-xl hover:shadow-lg hover:shadow-[#e669fb] transition-all duration-200 hover:underline '>
                <a href="https://addons.mozilla.org/en-US/firefox/addon/daily/">
                  <div className='flex items-center gap-3 justify-center'>
                    <img className='w-[20%]' src={FireFox} alt="" />
                    <p className='text-[18px] text-black font-bold '>{AppText.firefox}</p>
                  </div>
                </a>
              </div>
              <div className='bg-[#fdf6f6] w-[25%] py-2 rounded-xl hover:shadow-lg hover:shadow-[#e669fb] transition-all duration-200 hover:underline '>
                <a href="https://microsoftedge.microsoft.com/addons/detail/dailydev-news-for-busy/cbdhgldgiancdheindpekpcbkccpjaeb?hl=en-GB">
                  <div className='flex items-center gap-3 justify-center'>
                    <img className='w-[20%]' src={Edge} alt="" />
                    <p className='text-[18px] text-black font-bold '>{AppText.edge}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END THE DAILY DEV APP SECTION */}


      {/* START THE WEB APP SECTION */}
      <div className='w-full md:w-[992px] lg:w-[1200px] mx-auto pt-[100px] pb-[50px] '>
        <div className='w-[80%] mx-auto  md:flex md:justify-between items-center border-b-[1px] border-[#444444] '>
          <div className='w-full text-center md:text-left md:w-[60%] '>
            <h2 className='text-[28px] leading-[32px] mb-4'>{AppText.webapp}</h2>
            <p className='text-[#A8B3CF]'>{AppText.drag}</p>
            <div className='mt-8 flex gap-4 mb-[50px] md:justify-start justify-center'>
              <div className='hover:shadow-lg hover:shadow-[#e669fb] transition-all duration-200 bg-[#fdf6f6] w-[30%] md:w-[27%] flex justify-center rounded-lg hover:underline'>
                <a href="https://app.daily.dev">
                  <div className='flex gap-3 items-center py-4 '>
                    <img className='w-[30px]' src={Website} alt="" />
                    <p className='text-[#1C1F26] font-bold text-[18px]'>Web app</p>
                  </div>
                </a>
              </div>
              <div className='hover:shadow-lg hover:shadow-[#e669fb] transition-all duration-200 bg-[#fdf6f6] w-[40%] items-center flex justify-center rounded-lg hover:underline'>
                <a className='' href="https://app.daily.dev">
                  <div className='flex gap-3 items-center py-[6px] '>
                    <img className='w-[30px]' src={Drag} alt="" />
                    <div className=''>
                      <p className='text-[#1C1F26] text-[15px] font-bold md:text-[18px]'>Bookmarklet</p>
                      <p className='text-[#1C1F26] text-[15px]'>Drag this button</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className=' w-full md:w-[30%]'>
            <ReactImageMagnify {...{
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: BookMark
              },
              largeImage: {
                src: BookMark,
                width: 329,
                height: 850
              }
            }} />
          </div>
        </div>
      </div>
      {/* END THE WEB APP SECTION */}


      {/* START IPHONE & IPAD SECTON */}
      <div className='text-center w-full md:w-[992px] lg:w-[1200px] mx-auto '>
        <div className='pt-[100px]  pb-[50px] md:flex md:justify-between w-[80%] mx-auto border-b-[1px] border-[#444444]'>
          <div className=' w-full md:w-[40%] md:mb-0 mb-10 ]'>
            <ReactImageMagnify {...{
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: IPhone
              },
              largeImage: {
                src: IPhone,
                width: 329,
                height: 850
              }
            }} />
          </div>
          <div className='md:text-left text-center w-full md:w-[55%]'>
            <h2 className='text-[28px] leading-[34px] mt-1 text-white font-semibold mb-6 '>{AppText.iphone} </h2>
            <p className='text-[16px] leading-[24px] text-[#A8B3CF] pr-5'>{AppText.JustLike}</p>
            <div className='flex gap-5 mt-5 md:justify-start justify-center'>
              <div className='bg-[#fdf6f6] w-[65%] py-3 mt-6 rounded-xl px-3 hover:underline hover:shadow-lg hover:shadow-[#e669fb] transition-all duration-200'>
                <a href="https://chrome.google.com/webstore/detail/dailydev-the-homepage-dev/jlmpjdjjbgclbocgajdjefcidcncaied">
                  <div className='flex items-center gap-3 justify-center'>
                    <img className='w-[15%]' src={Ios} alt="" />
                    <p className='text-[15px] md:text-[18px] text-black font-bold mt-[2px]'>{AppText.Pro}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END IPHONE & IPAD SECTON */}


      {/* START THE GOOGLE PLAY SECTION */}
      <div className='w-full md:w-[992px] lg:w-[1200px] mx-auto pt-[100px] pb-[50px] '>
        <div className='w-[80%] mx-auto md:flex md:justify-between items-center '>
          <div className='w-full md:w-[50%] md:text-left text-center '>
            <h2 className='text-[28px] leading-[32px] mb-4'>{AppText.Google}</h2>
            <p className='text-[#A8B3CF]'>{AppText.GDown}</p>
            <div className='mt-8 flex gap-4 mb-[50px] md:justify-normal justify-center'>
              <div className='bg-[#fdf6f6] w-[35%] md:w-[40%] flex justify-center rounded-lg hover:underline hover:shadow-lg hover:shadow-[#e669fb] transition-all duration-200'>
                <a href="https://app.daily.dev">
                  <div className='flex gap-2 md:gap-3 items-center py-3 '>
                    <img className='w-[30px]' src={Playstore} alt="" />
                    <p className='text-[#1C1F26] font-bold text-[18px]'>Google Play</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className=' w-full md:w-[40%] mb-[50px]'>
            <ReactImageMagnify {...{
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: Google
              },
              largeImage: {
                src: Google,
                width: 329,
                height: 850
              }
            }} />
          </div>
        </div>
      </div>
      {/* END THE GOOGLE PLAY SECTION */}















    </div>
  )
}

export default Apps