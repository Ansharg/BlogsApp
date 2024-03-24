import React from 'react'
import user from '../Assests/user.svg'
import logo from '../Assests/logo.svg'

const Footer = () => {
    return (
        <section className='mt-20'>
            <div className='lg:h-[38rem] bg-[#FAFAFA]'>
                <div className='pt-12'>
                    <div className='text-center py-5 font-bold font-serif text-xl'>
                        <p>Subscribe and earn more</p>
                    </div>
                    <div className=' max-sm:hidden flex sm:items-center justify-center max-sm:px-10'>
                        <div className='h-full sm:py-5 py-2 bg-white px-3'>
                            <img src={user} alt="" />
                        </div>
                        <div>
                            <input type="text" placeholder='Email address' className='sm:py-5 max-sm:h-full outline-none w-96 sm:text-base text-sm' />
                        </div>
                        <div>
                            <button className='sm:p-5 py-2 bg-white sm:font-semibold'>Subscribe now</button>
                        </div>
                    </div>
                    <div className='hidden flex-col items-center max-sm:flex'>
                        <div className='max-w-[30rem] w-full px-10'>
                            <input type="text" placeholder='Email address' className='max-sm:py-3 w-full outline-none sm:text-base text-sm' />
                        </div>
                        <div className="mt-5">
                            <button className='py-2 px-3 bg-white sm:font-semibold'>Subscribe now</button>
                        </div>
                    </div>
                    <div className='text-[#A1A1A1] text-sm text-center mt-2 px-10'>
                        <p>By clicking on "Subscribe now" button I agree that my</p>
                        <p>submitted data is being <span className='underline'>collected and stored</span></p>
                    </div>
                </div>
                {/* links section */}
                <div className='flex flex-wrap gap-8 h-1/2 lg:px-40 px-10 justify-between mt-16 mb-10'>
                    <div className="">
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        <div className='text-[#A1A1A1] md:text-base min-[500px]:text-sm text-xs font-light lg:w-72 w-44 '>
                            <p>Opening creativity without limits via ultimate bloging platform conecting all creative souls together.</p>
                        </div>
                        <div className='mt-5 text-[#A1A1A1]'>
                            <p>By Acmee 2021</p>
                        </div>
                    </div>
                    <div className='space-y-5 md:text-base text-sm'>
                        <div className='uppercase text-[#F7684D] font-semibold'>
                            <p>CATEGORIES</p>
                        </div>
                        <div className=' font-light font-serif'>
                            <p>All Categories</p>
                        </div>
                        <div className=' font-light font-serif'>
                            <p>Design</p>
                        </div>
                        <div className=' font-light font-serif'>
                            <p>Tools</p>
                        </div>
                        <div className=' font-light font-serif'>
                            <p>Life</p>
                        </div>
                        <div className=' font-light font-serif'>
                            <p>Tips and Tricks</p>
                        </div>
                    </div>
                    <div className='space-y-5 md:text-base text-sm'>
                        <div className='uppercase text-[#F7684D] font-semibold'>
                            <p>Company</p>
                        </div>
                        <div className=' font-light font-serif'>
                            <p>About </p>
                        </div>
                        <div className=' font-light font-serif'>
                            <p>Team</p>
                        </div>
                        <div className=' font-light font-serif'>
                            <p>Contact</p>
                        </div>
                        <div className=' font-light font-serif'>
                            <p>Shop</p>
                        </div>
                    </div>
                    <div className='space-y-5 md:text-base text-sm'>
                        <div className='uppercase text-[#F7684D] font-semibold'>
                            <p>SECURITY</p>
                        </div>
                        <div className=' font-light font-serif'>
                            <p>Cookies</p>
                        </div>
                        <div className=' font-light font-serif'>
                            <p>Privacy Policy</p>
                        </div>
                        <div className=' font-light font-serif'>
                            <p>Terms and Conditions</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
