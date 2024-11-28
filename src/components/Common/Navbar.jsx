import React from 'react'
import { Link } from 'react-router'

const Navbar = ({open, onClickHam}) => {



  return (
    <div className='w-full h-20 bg-orange-400 shadow-md z-50 absolute top-0'>
      <div className='flex items-center h-full relative w-full '>
        <Link to='/' className='text-white text-2xl font-bold h-16 w-16 z-50 m-3'>
          <img src="/logos/sahiti-cream.svg" alt="" />
        </Link>
        <div className='nav-desktop text-white text-lg font-semibold hidden lg:block absolute right-0'>
          {/* <Link to='/marketing' className='w-max p-3 m-2 hover:bg-orange-300 rounded-lg transition-all uppercase text-xl ' >Marketing</Link> */}
          <Link to='/schedule' className='w-max p-3 m-2 hover:bg-orange-300 rounded-lg transition-all uppercase text-xl ' >Schedule</Link>
          {/* <Link to='/toc' className='w-max p-3 m-2 hover:bg-orange-300 rounded-lg transition-all uppercase text-xl ' >Terms</Link> */}
          <Link to='/sponsors' className='w-max p-3 m-2 hover:bg-orange-300 rounded-lg transition-all uppercase text-xl ' >Sponsors</Link>
          <Link to='/workshops' className='w-max p-3 m-2 hover:bg-orange-300 rounded-lg transition-all uppercase text-xl ' >Workshops</Link>
          <Link to='/contact' className='w-max p-3 m-2 hover:bg-orange-300 rounded-lg transition-all uppercase text-xl ' >Contact Us</Link>

        </div>

        <div className='nav-mobile lg:hidden z-50 absolute right-0 m-2'>
          <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center' onClick={onClickHam}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>
        </div>

        <div className=' lg:hidden w-min z-50 absolute center m-auto left-0 right-0 text-center text-2xl text-white uppercase font-serif'>
          Sahiti
        </div>

        <div className={`nav-mobile-menu absolute ${open ? 'inset-y-full' : 'inset-y-0'} duration-500 `}>
          <div className={`w-full h-full bg-orange-500 bg-opacity-95 fixed top-0 left-0 z-40 transform transition-all ${open ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className='w-full h-full flex flex-col justify-center items-center'>
              {/* <Link onClick={onClickHam} to='/marketing' className='w-full flex items-center border border-orange-300 justify-center p-3 mx-2 text-4xl uppercase hover:bg-orange-300 transition-all' >Marketing</Link> */}
              <Link onClick={onClickHam} to='/schedule' className='w-full flex items-center border border-orange-3 00 justify-center p-3 mx-2 text-4xl uppercase hover:bg-orange-300 transition-all' >Schedule</Link>
              {/* <Link onClick={onClickHam} to='/toc' className='w-full flex items-center border border-orange-300 justify-center p-3 mx-2 text-4xl uppercase hover:bg-orange-300 transition-all' >Terms</Link> */}
              <Link onClick={onClickHam} to='/sponsors' className='w-full flex items-center border border-orange-3 00 justify-center p-3 mx-2 text-4xl uppercase hover:bg-orange-300 transition-all' >Sponsors</Link>
              <Link onClick={onClickHam} to='/workshops' className='w-full flex items-center border border-orange-300 justify-center p-3 mx-2 text-4xl uppercase hover:bg-orange-300 transition-all' >Workshops</Link>
              <Link onClick={onClickHam} to='/contact' className='w-full flex items-center border border-orange-300 justify-center p-3 mx-2 text-4xl uppercase hover:bg-orange-300 transition-all' >Contact Us</Link>

            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Navbar
