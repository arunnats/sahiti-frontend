import React from 'react'
import Marquee from "react-fast-marquee";


const MarqueeOrange = () => {
    let marquee_imgs = [];

    for (let i = 0; i < 14; i++) {
        marquee_imgs.push(<img key={i} src={`${'/illustrations/Vector'+i+'.svg'}`} className='w-16 h-16 mx-5' ></img>)
    }
  return (
      <Marquee
            play={true}
            pauseOnClick={false}
            direction='left'
            speed={50}
            loop={0}
            gradient={false}
            className='w-full h-16 white bg-orange-400 '
            autoFill={true}
            children={marquee_imgs}
       >
      </Marquee>
  )
}

export default MarqueeOrange
