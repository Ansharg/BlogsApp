import React from 'react'


const GridLayout = () => {
    return (
        <div className='min-[900px]:h-[40rem] max-[900px]:space-y-8 max-[900px]space-y-10 min-[900px]:grid grid-cols-3 grid-rows-2 xl:gap-10 lg:gap-8 min-[900px]:gap-5 '>
            <div className='max-[900px]:p-5 max-[900px]:h-96 col-span-2 row-span-2 bg-section3 flex items-end'>
                <div className='min-[900px]:w-96 w-full min-[900px]:h-60 min-[900px]:pl-20 space-y-5'>
                    <div className='uppercase font-semibold'>
                        <p className='bg-white w-fit px-3'>Design</p>
                    </div>
                    <div className='sm:text-xl max-[900px]:w-52 text-xs font-semibold text-white font-serif'>
                        <p>How to become a good writer?</p>
                    </div>
                    <div className='flex max-xl:flex-col max-[900px]:items-start max-xl:items-center text-xs xl:justify-between text-[#A1A1A1]'>
                        <div>
                            <p>written by <span className='text-red-400 underline'>Thomas Paul</span></p>
                        </div>
                        <div>
                            <p>published on <span>9.6.2021</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-section3 max-[900px]:h-96 flex items-end'>
                <div className='space-y-5 p-5 w-full'>
                    <div className='uppercase font-semibold'>
                        <p className='bg-white w-fit px-3'>Design</p>
                    </div>
                    <div className='sm:text-xl text-xs font-semibold text-white font-serif w-52'>
                        <p>How to become a good writer?</p>
                    </div>
                    <div className='flex max-xl:flex-col max-[900px]:items-start max-xl:items-center text-xs xl:justify-between text-[#A1A1A1]'>
                        <div>
                            <p>written by <span className='text-red-400 underline'>Thomas Paul</span></p>
                        </div>
                        <div>
                            <p>published on <span>9.6.2021</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-section3 max-[900px]:h-96 flex items-end'>
                <div className='space-y-5 p-5 w-full'>
                    <div className='uppercase font-semibold'>
                        <p className='bg-white w-fit px-3'>Design</p>
                    </div>
                    <div className='sm:text-xl text-xs font-semibold text-white font-serif w-52'>
                        <p>How to become a good writer?</p>
                    </div>
                    <div className='flex max-xl:flex-col max-[900px]:items-start max-xl:items-center text-xs xl:justify-between text-[#A1A1A1]'>
                        <div>
                            <p>written by <span className='text-red-400 underline'>Thomas Paul</span></p>
                        </div>
                        <div>
                            <p>published on <span>9.6.2021</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GridLayout
