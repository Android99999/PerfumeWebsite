import React,{useState} from 'react'
import NavLink from '../Utils/NavLink'
import FadeIn from '../Animations/FadeIn'


import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";


import {herotitle, subherotitle} from "../data"



import heropictures from "../Assets/Perfume.png"



function Hero() {

    const[showMobileMenu, setShowMobileMenu] = useState(false);

    

  return (
  
    // HERO
    
    <div id="Home" className='w-full h-[100vh] bg-[linear-gradient(180deg,_#d4d4d8_0%,_#d4d4d8_40%,_#a8a29e_100%)] overflow-hidden'> 
    {/* HEADER / NAVIGATION */}
        <div className='w-full h-fit flex flex-row justify-center items-center overflow-hidden'>
            <div className='w-3/4 h-fit flex flex-row justify-between items-center pt-7 md:z-20'>
                {/* LOGO */}
                <NavLink>
                <div className='w-fit h-fit'>
                            <h1 className='font-PlayFair font-black text-[2em] px-3 py-1 text-black'>MAUI</h1>
                </div>
                </NavLink>

                {/* NAVI SECTION */}
                <div className='hidden md:block w-fit'>
                    <ul className='font-Comme font-black flex flex-row justify-evenly  md:gap-6 lg:gap-12'>
                                <NavLink to="Home">Home</NavLink>                      
                                <NavLink to="Products">Products</NavLink>
                                <NavLink to="AboutUs">About Us</NavLink>                     
                                <NavLink to="ContactUs">Contact Us</NavLink>
                    </ul>
                </div>

                {/* BURGER BUTTON */}
                <div className='block w-fit h-fit md:hidden'>
                    <FadeIn delay={0.1} direction="left">
                        <div className='block md:hidden w-fit h-fit'>
                            <BiMenuAltRight size={45} className='block md:hidden cursor-pointer mt-1'  
                            onClick={() => setShowMobileMenu((prev) => !prev)}
                            />
                        </div>
                    </FadeIn>
                </div>

                {/* Mobile Menu */}
                <div className={
                        `block md:hidden w-full fixed ${!showMobileMenu ? "-top-[410px]" : "top-0"} 
                        left-0 bg-[#f4ede1] h-[410px] transition-all duration-[1000ms]
                        shadow-xl z-10 py-8 px-12 rounded-b-xl`
                }>

                    <AiOutlineClose size={30} 
                        className="absolute top-5 right-5 cursor-pointer
                        hover:rotate-90 transition-transform duration-10 ease-in-out"
                        onClick={() => setShowMobileMenu(false)}
                    />
              
                    <ul className="font-Comme pt-[60px] items-center flex flex-col gap-8">
                    <NavLink to="Home">Home</NavLink>                      
                    <NavLink to="Products">Products</NavLink>
                    <NavLink to="AboutUs">About Us</NavLink>                     
                    <NavLink to="ContactUs">Contact Us</NavLink>
                    </ul>

                </div>

            </div>
        </div>


            {/*HERO's HERO  */}
        <div className='w-full h-full  mt-6 flex justify-center items-center p-5 overflow-hidden relative'>
            {/* LEFT */}
            <div className='w-screen md:w-[90%] lg:w-[55%] h-[90%] flex flex-col justify-start md:justify-center items-center gap-6 self-start py-10 md:z-30'>
                <h2 className=' font-Poppins font-semibold text-[1.7em] tracking-wide md:text-[2.5em] lg:text-[2.6em] text-center'>
                    "{herotitle}"
                </h2>
                <h1 className=' font-PlayFair font-black text-[5em] border-b-2 border-black md:text-[8em]'>
                    MAUI
                   
                </h1>

                <p className='text-[1.2em] font-light text-lg tracking-wide text-center py-8 md:text-[1.8em]'>
                    "{subherotitle}"
                </p>
                <NavLink hide={true} to="Products">
                    <div className='bg-slate-800 px-4 py-2 border-2 border-black flex flex-row justify-evenly gap-2 text-[#d4d4d8] tracking-wider'>
                            <BiChevronDown className='font-thin' size={30} />
                            <h1>
                                Explore
                            </h1>
                    </div>
                </NavLink>
            </div>



            {/* RIGHT */}
            <div className='hidden md:w-[45%] h-full md:flex flex-col justify-start items-start z-20 relative overflow-visible'>
                    <img src={heropictures} alt="" className=' md:w-[90%] h-[90%] md:block absolute right-30 bg-center bg-no-repeat bg-cover object-cover overflow-visible'/>
                    
            </div >

            <div className='-bottom-[40em] w-[60em] h-[60em] absolute block bg-slate-800 z-10 md:-right-[30em] rounded-full transition-all ease-in-out delay-150 duration-300
            md:w-[90em] md:h-[90em] lg:w-[90em] lg:h-[90em] lg:-bottom-[10em]'>
            {/* Content of the element */}
            </div>

            {/* <div className='w-[34em] h-[34em] -bottom-[15em] absolute block md:w-[90em] md:h-[90em] bg-slate-800 md:-right-[30em] z-10 rounded-full transition ease-in-out delay-150 duration-300'>
            </div> */}
                
        </div>
    </div>
  )
}

export default Hero