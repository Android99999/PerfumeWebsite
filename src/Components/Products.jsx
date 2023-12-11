

import React from 'react'
import Slider from "react-slick";



import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import { BiCaretRight } from "react-icons/bi";
import { BiCaretLeft } from 'react-icons/bi';


import {products} from "../Utils/Product"

function Products() {



  const slider = React.useRef(null);

  
    const settings = {
       

        dots: true,
        infinite: true,
        
        arrows: false,
        className: 'custom-slick', 
        dotsClass: "slick-dots slick-thumb",
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };





      console.log(products)
      // bg-[linear-gradient(360deg,_#d4d4d8_0%,_#d4d4d8_40%,_#a8a29e_100%)]
  return (
    <div id="Products" className='w-full h-screen bg-[#a8a29e] p-4 flex flex-col gap-2'>
        <div className='w-full h-[10em] flex items-center justify-center p-4'>
            <h1 className='font-black  text-[2em] md:text-5xl text-slate-800  font-PlayFair'>AVAILABLE PERFUME</h1>
        </div>
        <div className='w-full h-full'>


                  <div className="p-6 h-full " >
                 
                  <Slider ref={slider} {...settings}>

                        {products.map((product, index) => (

                          <div key={index} className="p-1 w-full h-[40em]" 
                        
                          onClick={() => {
                            alert(product.name)
                          }}
                          

                          >

                              <img
                                src= {product.ImagePath}
                                alt=""
                                className='w-full h-[30em] object-contain p-[4em] shadow-lg border-[1px] border-black bg-slate-800'
                              />

                              <div className='flex flex-col gap-2 mt-4 md:mt-4 md:justify-end md:items-center text-center shadow-lg py-[1em] border-[1px] border-black'>

                                  <h1 className='font-black text-[1.6em] font-Poppins '>{product.name}</h1>
                                  <h3 className=' font-normal font-Poppins text-[1.4em] '>{product.Price}</h3>
                              </div>

                          </div>
                        ))}


                  </Slider>
                  <div className='flex flex-row justify-between relative -top-[25em]'>
                    <button onClick={() => slider?.current?.slickPrev()} className=''> <BiCaretLeft size={50} /></button>
                    <button onClick={() => slider?.current?.slickNext()} className=''> <BiCaretRight size={50} /></button>
                  </div>

                 
                </div>

        </div>
    </div>


  )
}

export default Products