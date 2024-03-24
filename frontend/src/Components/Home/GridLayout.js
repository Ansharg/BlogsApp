import React from 'react'


const GridLayout = () => {
    return (
        <div className='h-[40rem] grid grid-cols-3 grid-rows-2 gap-10'>
            <div className=' col-span-2 row-span-2 bg-section3 flex items-end'>
                <div className='w-96 h-60 pl-20 space-y-5'>
                    <div className='uppercase font-semibold'>
                        <p className='bg-white w-fit px-3'>Design</p>
                    </div>
                    <div className='text-3xl font-semibold font-serif'>
                        <p>How to become a good writer?</p>
                    </div>
                    <div className='flex text-sm justify-between text-[#A1A1A1]'>
                        <div>
                            <p>written by <span className='text-red-400 underline'>Thomas Paul</span></p>
                        </div>
                        <div>
                            <p>published on <span>9.6.2021</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-section3 flex items-end'>
                <div className='space-y-5 p-5 w-full'>
                    <div className='uppercase font-semibold'>
                        <p className='bg-white w-fit px-3'>Design</p>
                    </div>
                    <div className='text-xl font-semibold font-serif w-52'>
                        <p>How to become a good writer?</p>
                    </div>
                    <div className='flex text-xs justify-between text-[#A1A1A1]'>
                        <div>
                            <p>written by <span className='text-red-400 underline'>Thomas Paul</span></p>
                        </div>
                        <div>
                            <p>published on <span>9.6.2021</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-section3 flex items-end'>
                <div className='space-y-5 p-5 w-full'>
                    <div className='uppercase font-semibold'>
                        <p className='bg-white w-fit px-3'>Design</p>
                    </div>
                    <div className='text-xl font-semibold font-serif w-52'>
                        <p>How to become a good writer?</p>
                    </div>
                    <div className='flex text-xs justify-between text-[#A1A1A1]'>
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
