import React, { useState } from 'react'
import logo from '../Assests/logo.svg'
import search from '../Assests/search.svg'
import user from '../Assests/user.svg'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [searchbtn, setSearchbtn] = useState(false);
    return (
        <div className='px-10 py-4 fixed bg-white w-full z-[999]'>
            <div className='flex justify-between'>
                <div className='flex w-full justify-between'>
                    <div className='flex items-center w-64'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='lg:flex hidden'>
                        <div className='flex font-semibold items-center'>
                            <div className='py-2 px-3 '>
                                <p className='cursor-pointer'>Home</p>
                            </div>
                            <div className='py-2 px-3 '>
                                <p className='cursor-pointer'>Categories</p>
                            </div>
                            <div className='py-2 px-3 '>
                                <p className='cursor-pointer'>Trending</p>
                            </div>
                            <div className='py-2 px-3 '>
                                <p className='cursor-pointer'>Tools</p>
                            </div>
                            <div className='py-2 px-3 '>
                                <p className='cursor-pointer'>About</p>
                            </div>
                            <div className='py-2 px-3 '>
                                <p className='cursor-pointer'>Careers</p>
                            </div>
                        </div>
                    </div>
                    <div className={`w-64 lg:flex hidden`}>
                        <div className='flex items-center w-full space-x-5 justify-end'>
                            <div>
                                <img src={search} alt="search" className='w-8' />
                            </div>
                            <div className=''>
                                <img src={user} alt="profile" className='w-8' />
                            </div>
                            <div>
                                <button className='border-2 font-semibold py-2 px-5 border-black rounded-lg'><span>Post Blog</span></button>
                            </div>
                        </div>
                    </div>
                    <div className='text-3xl max-lg:block hidden flex items-center'>
                        <RxHamburgerMenu />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
