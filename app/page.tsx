import React from 'react'
import Navbar from './components/Navbar'
const page = () => {
  return (
    <div className='h-screen w-screen overflow-hidden'>
      <nav className="sticky top-0 left-0">
        <Navbar />
      </nav>  
      <header className="w-full h-full">
      <div className=" h-full bg-blue-400/50">
        <div className="wrapper h-full w-full  flex md:flex-row flex-col justfy-center md:justify-around">
          <div className="row flex items-center  border border-white text-center" id="left">
            <div className='py-3 leading-2'>

            <h2 className='text-xl  text-white  md:text-left my-2'>Hi, I am </h2>
            <h1 className='text-5xl text-blue-800 font-extrabold center my-3.5'>Jose Alfonso Rivera</h1>
            <h2 className='text-xl text-neutral/100 text-right'>I am a Full Stack Developer</h2>
            </div>
          </div>
          <div className="row flex items-center h-full border-white text-center ">
            asdadad
          </div>
        </div>
      
      </div>

      </header>
    </div>
  )
}

export default page