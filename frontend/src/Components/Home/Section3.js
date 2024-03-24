import React from 'react'

const Section3 = () => {
    return (
        <div className=' bg-gradient-black h-full flex justify-center items-center'>
            <div className=' space-y-4 px-10 sm:px-0'>
                <div>
                    <div className='uppercase bg-white px-3 py-1 font-semibold w-fit mx-auto'>
                        <p>Design</p>
                    </div>
                </div>
                <div className='sm:w-96 sm:text-5xl text-3xl text-center text-white font-serif font-semibold'>
                    <p>New technique of drawing</p>
                </div>
                <div className='flex justify-between text-[#A1A1A1] sm:text-base text-xs'>
                    <div>
                        <p>written by <span className='text-red-400 underline'>Thomas Paul</span></p>
                    </div>
                    <div>
                        <p>published on <span>9.6.2021</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3
