import React from 'react'
import MarqueeOrange from '../components/Common/MarqueeOrange'

const Home = () => {
    

  return (
    <main className=''>
      <section className='top-section bg-orange-500 flex flex-col justify-between'>
        <div className="h-max py-16  flex overflow-clip relative justify-between items-center lg:flex-row flex-col px-10 lg:px-32 ">
          <img src="/illustrations/Vector0.svg" alt="" srcset className='absolute -top-12 -left-16 opacity-15 lg:w-96 lg:h-96 w-48 h-48   ' />
          <img src="/illustrations/Vector0.svg" alt="" srcset className='absolute -bottom-24 lg:-right-32 -right-16 opacity-15 lg:w-96 lg:h-96 w-48 h-48  rotate-90 flip scale-x-[-1] ' />
          <img src="/main/hero-text.svg" alt="" srcset="" className='z-10 lg:h-96 m-5 h-auto max-w-96 w-full' />
          <div className=" w-full lg:w-2/3 ">
            <p className="z-10 text-xl lg:text-right text-left font-semibold w-full text-white ">Welcome to Sahiti, Kozhikode's literary gem.</p>
            <p className="z-10 text-xl lg:text-right text-left font-semibold w-full text-white "> Immerse yourself in a celebration of words with thought provoking discussions, captivating readings, and engaging workshops. Join us at Sahiti, where literature meets inspiration!</p>
          </div>  
        </div>
          <MarqueeOrange />
      </section>
      <section>

      </section>
      
    </main>
  )
}

export default Home
