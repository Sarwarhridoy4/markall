import Image from "next/image";
import React from "react";
import Image1 from "../../Assets/Marketing 1.png";
function HeroSection() {
  return (
    <div className='flex flex-col lg:flex-row h-screen w-full'>
      <div className='bg-gray-900 text-white h-screen w-full lg:w-1/2 flex items-center justify-center md:flex-col rounded-bl-[100px]'>
        <div className='max-w-lg px-4'>
          <h1 className='text-4xl font-bold mb-4'>
            Reach your - <br />
            audience & convert <br /> your leads
          </h1>
          <p className='text-lg mb-6'>
            Get your customers with SEO, rank your business with email
            marketing, build sales leads
          </p>
          <div className='flex gap-8'>
            <button className='bg-green-500 text-black w-40 h-10 rounded-md'>
              Get Started
            </button>
            <button className='bg-black text-white border-white border-2 px-4 py-2 rounded-md flex items-center'>
              <svg
                width='15px'
                height='15px'
                viewBox='0 0 24.00 24.00'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                <g
                  id='SVGRepo_tracerCarrier'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></g>
                <g id='SVGRepo_iconCarrier'>
                  <path
                    d='M8.286 3.407A1.5 1.5 0 0 0 6 4.684v14.632a1.5 1.5 0 0 0 2.286 1.277l11.888-7.316a1.5 1.5 0 0 0 0-2.555L8.286 3.407z'
                    fill='#ffffff'
                  ></path>
                </g>
              </svg>
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      <div className='bg-gray-900 text-white h-screen w-full lg:w-1/2 flex items-center justify-center'>
        <div className='w-[420px] h-[300px] z-10 border border-red-600 relative'></div>
        <div className='absolute max-w-sm'>
          <Image src={Image1} alt='' />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
