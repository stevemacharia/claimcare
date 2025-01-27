'use client'    
import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <div className="relative isolate z-10 ">
        <section className="relative bg-hero  bg-cover bg-center bg-no-repeat w-full">
          <div className='bg-gradient-to-r from-[#0057c3] bg-blend-multiply drop-shadow-md'>
              <div className="grid grid-cols-1 mx-auto flex max-w-7xl md:grid-cols-2 gap-4 justify-start">   
                <div className=" mx-left max-w-2xl py-32 sm:py-48 lg:py-56">
                  <div className="md:text-start text-center px-4">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Simplifying Insurance Claims for Your Peace of Mind
                    </h1>
                    <p className="mt-6 md:text-lg text-sm  text-white">
                        Streamline your motor vehicle and health insurance claims with ease. Claim Care helps you save time, reduce stress, and get the support you deserve all in one convenient platform.
                    </p>
                    
                  </div>
                </div>
                <div className=''>
                      <div className='bg-client_hero bg-no-repeat bg-center pe-16 me-16 object-scale-down w-full h-full'></div>
                </div>
          </div>
          </div>
        </section>
      </div>
    </div>   
  )
}

export default HeroSection