import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Herosection = () => {
  return (
    <div className=''>
      <Splide
        options={{
          type: "loop",
          focus: true,
          gap: 50,
          perPage: 3,
          arrows: false,
          autoplay: true,
        }}
      >
        <SplideSlide className=''>
          <div className='h-[25rem] bg-white relative'>
            <div className='h-[19.5rem]'>
              <div className='bg-[#FAFAFA] h-full'></div>
              {/* <img src="" alt="" /> */}
            </div>
            <div className='h-24 absolute bottom-0 w-full'>
              <div className='uppercase bg-white text-sm w-fit font-serif px-3 mx-auto'>
                <p className=''>tips and trick</p>
              </div>
              <div className=' text-base font-semibold font-serif text-center'>
                <p className='h-full text-ellipsis '><span>How to become a good writer ? and you are ...</span> </p>
              </div>
              <div className='flex justify-between text-[#A1A1A1] md:text-sm text-xs'>
                <div>
                  <p>written by <span className='text-red-400 underline'>Thomas Paul</span></p>
                </div>
                <div>
                  <p>published on <span>9.6.2021</span></p>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  )
}

export default Herosection
