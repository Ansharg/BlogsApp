import React from 'react'
import Herosection from '../Components/Home/Herosection'
import Swiper from '../Components/Home/Swiper'
import Section3 from '../Components/Home/Section3'
import GridLayout from '../Components/Home/GridLayout'

const Home = () => {
  return (
    <>
      <section className='pt-20'>
        <div className='pt-2'>
          <Herosection />
        </div>
      </section>
      <section className='mt-20'>
        <div className='text-center font-bold text-2xl tracking-widest font-sans'>
          <p>Topics of the month</p>
        </div>
        <div className='mt-12 px-40'>
          <Swiper />
        </div>
      </section>
      <section className='mt-20'>
        <div className='w-full h-[40rem] bg-section3 bg-cover'>
          <Section3 />
        </div>
      </section>
      <section className='mt-20'>
        <div className='text-center font-bold text-2xl tracking-widest font-sans'>
          <p>Design related topics</p>
        </div>
        <div className='mt-12 px-40'>
          <GridLayout />
        </div>
      </section>
    </>
  )
}

export default Home