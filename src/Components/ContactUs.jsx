import React from 'react'
import NavLink from '../Utils/NavLink'
import { FaChevronUp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiDeviceMobileFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

import Logos from "../Assets/Logo1.png"

function ContactUs() {
  return (
    <div id="ContactUs" className='h-fit w-screen bg-slate-800 p-5'>
      <div className='flex flex-col justify-between items-center gap-3 md:flex-row md:justify-around'>
            
          <div className='flex flex-col justify-between items-center'>
            <div>
              <NavLink to="Home" hide={true}>
              <img src={Logos} alt="HAHA" style={{width: "4em"}}/>
              </NavLink>
            </div>
              

            <div className='flex flex-col gap-4 p-6'>
              <div className='flex flex-row gap-2 items-center'>
                <FaLocationDot size={30} color={"#d4d4d8"}/>
                <h1 className='font-Poppins font-black text-[#d4d4d8]'>Ethereal st. Majesty Bldg. </h1>
              </div>

              <div className='flex flex-row gap-2  items-center'>
                <PiDeviceMobileFill  size={30} color={"#d4d4d8"}/>
                <h1 className='font-Poppins font-black text-[#d4d4d8]'>09123456789</h1>
              </div>

              <div className='flex flex-row gap-2  items-center'>
                <MdEmail  size={30} color={"#d4d4d8"}/>
                <h1 className='font-Poppins font-black text-[#d4d4d8]'>EMproducts@emajesty.com</h1>
              </div>

            </div>
            </div>


            <div className='flex flex-col gap-2 justify-center items-center  md:self-center p-4'>
              <h1 className='text-[1.4em] font-Poppins font-black text-[#d4d4d8] md:text-[2em]'>FOLLOW US</h1>
              <div className='flex flex-row gap-3'>
              <FaFacebook size={40} color={"#d4d4d8"} style={{padding:'4px'}}/>
              <FaInstagram size={40} color={"#d4d4d8"} style={{padding:'4px'}}/>
              <FaTwitter size={40} color={"#d4d4d8"} style={{padding:'4px'}}/>
              <FaYoutube size={40} color={"#d4d4d8"} style={{padding:'4px'}}/>
              </div>
            </div>
      </div>
     </div>
  )
}

export default ContactUs