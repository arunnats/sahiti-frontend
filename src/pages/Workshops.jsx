import React from 'react'
import LeftArchBorder from '../components/Common/LeftArchBorder'
import RightArchBorder from '../components/Common/RightArchBorder'

const Workshops = () => {
  return (
    <div className="bg-[#FF8343] p-0 m-0 relative overflow-clip h-max">
      {/* Left  Border */}
      <LeftArchBorder />

      <RightArchBorder />

      <div
        id="about"
        className="min-h-screen flex flex-col items-center px-2 md:px-8 lg:px-16 overflow-hidden relative "
      >
        <Navbar />
        <h1 className="text-white md:text-6xl text-3xl center font-bold mt-8 mx-20 text-center ">Sahiti Workshops</h1>

        <img className="h-[200px] w-auto mt-6" src="/logos/lnd-cream.jpg" alt="alt" />
      
        <p className="text-white m-10 mt-7 mb-3 px-4 md:px-52 text-xl text-justify">
          Coming Soon...
        </p>


        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-x-4 md:space-y-0 mt-6">

          <Button link="https://docs.google.com/forms/d/e/1FAIpQLSci2XwY2BLfXg76cKGpRZ_88dmbxmWtUZoGcrCkJ9kPGUqk7A/viewform" bgColor="#FFFDD0" textColor="#FF8343">
          Button
        </Button>
        </div>
      </div>

    </div>
  )
}

export default Workshops
