import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div className='w-full h-max bg-orange-300 absolute bottom-0 flex flex-col pt-8  '>

      <div className="footer-upper w-full h-max flex">
        <div className="w-full h-max lg:text-4xl text-2xl p-5 font-bold ">Contact us : </div>

        <div className="w-full flex flex-wrap">
          <a className='flex w-max rounded-[50px] font-sans items-center pr-3 py-1 mx-5 hover:bg-orange-400 ' href='mailto:lnfnitc@nitc.ac.in?subject=Sahiti'  >
            <div className="w-14 h-14 m-1 bg-green-400 rounded-full flex justify-center items-center mx-2 ">
              <EmailIcon className='text-black '/>
            </div> 
            <div className='text-xl '>lnd@nitc.ac.in</div>
          </a>
          <a className='flex w-max rounded-[50px] font-sans items-center pr-3 py-1 mx-5 hover:bg-orange-400 ' href='mailto:lnfnitc@nitc.ac.in?subject=Sahiti'  >
            <div className="w-14 h-14 m-1 bg-red-500 rounded-full flex justify-center items-center mx-2 ">
              <EmailIcon className='text-black '/>
            </div> 
            <div className='text-xl '>POC: 9099556687</div>
          </a>
        </div>

      </div>
      

      <div className="socials w-full flex p-5 flex-wrap items-center ">
        <div className="w-max h-max lg:text-4xl text-2xl p-5 font-bold ">Socials: </div>

        <a className='min-w-max border flex h-max rounded-[50px] font-sans bg-white items-center pr-3 py-1 mx-5 my-2 hover:bg-orange-400 ' href='www.instagram.com'>
          <div className="w-10 h-10 m-1 bg-black rounded-full flex justify-center items-center mx-2 ">
            <InstagramIcon className='text-white '/>
          </div> 
          <div className='text-xl '>@donttellthewarden</div>
        </a>

        <a className='min-w-max border flex h-max rounded-[50px] font-sans bg-white items-center pr-3 py-1 mx-5 my-2 hover:bg-orange-400' href='www.linkedin.com'>
          <div className="w-10 h-10 m-1 bg-black rounded-full flex justify-center items-center mx-2 ">
            <LinkedInIcon className='text-white '/>
          </div> 
          <div className='text-xl '>LnD NITC</div>
        </a>

        <a className='min-w-max border flex h-max rounded-[50px] font-sans bg-white items-center pr-3 py-1 mx-5 my-2 hover:bg-orange-400' href='www.sahiti.com'>
          <div className="w-10 h-10 m-1 bg-black rounded-full flex justify-center items-center mx-2 ">
            <LanguageIcon className='text-white '/>
          </div> 
          <div className='text-xl '>lndnitc.org</div>
        </a>
      </div>

      <div className="w-full flex flex-grow lg:flex-row flex-col">
        <div className="lg:w-min w-full h-max lg:h-inherit lg:border-r border-r-0 border-white lg:text-2xl text-lg font-julius font-bold flex justify-center items-center p-3 text-white bg-black "> &#xA9;Sahiti</div>
        <div className="h-inherit w-full p-3 lg:text-xl text-sm flex items-center text-white bg-black justify-center lg:justify-end ">An event conducted by Literary and Debating Club NITC.</div>
      </div> 
       
    </div>
  )
}

export default Footer
