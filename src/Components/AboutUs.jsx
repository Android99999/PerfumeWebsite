import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import 'swiper/swiper-bundle.css';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { color } from 'framer-motion';

function AboutUs() {



  return (
    <div id="AboutUs" className='w-screen h-fit flex justify-center items-center bg-zinc-200'>

                <div className='h-full w-full md:w-3/4 flex flex-col items-center py-[4em] px-[2em] gap-4'>

                      <h1 className='font-Poppins tracking-[0.4em] font-extrabold text-[1.4em] md:text-[2em] p-1 border-b-[1px] border-black'>ABOUT US</h1>
                              
                      <div className=' w-full h-fit p-4 font-Comme'>
                            <p className='text-justify py-[1em] tracking-wide md:text-[1.4em] md:leading-loose'>Welcome to MAUI, where we believe in the artistry of scent and the power of elegance.
                               Our journey began with a passion for crafting luxurious fragrances that captivate the senses
                                and leave a lasting impression.
                            </p>
                      </div>

                      <div className=' flex-col flex gap-2 w-full'>
                        <h1 className='bg-slate-800  px-4 py-[1em] text-[1.4em] md:text-[2em] font-Poppins tracking-widest font-black text-slate-100'>KNOW US MORE...</h1>
                        <div className='w-full h-full'>
                          <>
                                <Swiper
                                  pagination={{
                                    type: 'progressbar',
                                    renderProgressbar: function (progressbarClass) {
                                      // Customize the color of the progress bar
                                      const customColor = '#0f172a'; // Replace with your desired color
                                      return `<span class="${progressbarClass}" style="background-color: ${customColor};"></span>`;
                                    },
                                    
                                  }}
                                  navigation={true}
                                  modules={[Pagination, Navigation]}
                                  className="mySwiper"
                                >
                                  <SwiperSlide>
                                    <div className='w-full h-full p-4'>
                                        <h1 className='font-Comme font-black text-[1.2em] md:text-[2em] py-4 border-b-[1px] border-black tracking-wider px-3'>Craftsmanship and Quality</h1>
                                        <p className='font-Poppins p-2 tracking-wide text-justify md:text-[1.4em] md:py-[2em] md:leading-loose'>At <span className=' font-semibold'>MAUI</span>, we take pride in the meticulous craftsmanship that goes into each bottle of our perfume.
                                           From selecting the finest raw materials to the careful blending and aging processes, every step is a testament to
                                            our dedication to quality. Our perfumes are a harmonious blend of tradition and innovation,
                                            ensuring that you experience the perfect harmony of notes with each application.
                                              
                                        </p>
                                    </div>
                                  </SwiperSlide>

                                  <SwiperSlide>
                                  <div className=' w-full h-full p-4 '>
                                        <h1 className='font-Comme font-black text-[1.2em] md:text-[2em] py-4 border-b-[1px] border-black tracking-wider px-3'>Our Vision</h1>
                                        <p className='font-Poppins p-2 tracking-wide text-justify md:text-[1.4em] md:py-[2em] md:leading-loose'>Our vision at <span className=' font-semibold'>MAUI</span> is to be more than just a fragrance brand. We aspire to be a source of inspiration,
                                         self-expression, and confidence for individuals who appreciate the finer things in life. Through our perfumes,
                                          we aim to create moments of luxury and indulgence that elevate everyday experiences.
                                        </p>
                                  </div>
                                  </SwiperSlide>

                                  <SwiperSlide>
                                    <div className=' w-full h-full p-4'>
                                          <h1 className='font-Comme font-black text-[1.2em] md:text-[2em] py-4 border-b-[1px] border-black tracking-wider px-3'>Commitment to Sustainability</h1>
                                          <p className='font-Poppins p-2 tracking-wide text-justify md:text-[1.4em] md:py-[2em] md:leading-loose'>We believe in responsible perfumery. <span className=' font-semibold'>MAUI</span> is committed to sustainability,
                                           from sourcing eco-friendly ingredients to minimizing our environmental footprint. Learn more about our efforts to make a positive impact on the world.
                                          </p>
                                    </div>
                                  </SwiperSlide>

                                  <SwiperSlide>
                                    <div className=' w-full h-full p-4'>
                                          <h1 className='font-Comme font-black text-[1.2em] md:text-[2em] py-4 border-b-[1px] border-black tracking-wider px-3'>Join Us on the Olfactory Journey</h1>
                                          <p className='font-Poppins p-2 tracking-wide text-justify md:text-[1.4em] md:py-[2em] md:leading-loose'>
                                            Discover the world of <span className=' font-semibold'>MAUI</span> and explore our range of perfumes that
                                            are designed to resonate with your unique style and personality. Whether you're seeking a signature scent or the perfect gift, 
                                            <span className=' font-semibold'> MAUI</span> invites you to indulge in the art of fragrance.
                                            <br></br>
                                            <br></br>
                                            Thank you for being a part of our olfactory journey.
                                          </p>
                                    </div>
                                    
                                    
                                    
                                  </SwiperSlide>
                                 
                                </Swiper>
                          </>
                        </div>
                      </div>
                </div>

    </div>
  )
}

export default AboutUs