import React, { useState } from 'react'
import logo from '../Assests/logo.svg'
import search from '../Assests/search.svg'
import user from '../Assests/user.svg'
import {motion} from 'framer-motion'

const Navbar = () => {
    const [searchbtn,setSearchbtn] = useState(false);
  return (
    <nav className='px-10 py-4 fixed bg-white w-full'>
        <div className='flex justify-between'>
            <div className='flex w-[68%] justify-between'>
                <div className='flex items-center'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='flex '>
                    <div className='flex font-semibold items-center'>
                        <div className='py-2 px-3'>
                            <p>Home</p>
                        </div>
                        <div className='py-2 px-3'>
                            <p>Categories</p>
                        </div>
                        <div className='py-2 px-3'>
                            <p>Trending</p>
                        </div>
                        <div className='py-2 px-3'>
                            <p>Tools</p>
                        </div>
                        <div className='py-2 px-3'>
                            <p>About</p>
                        </div>
                        <div className='py-2 px-3'>
                            <p>Careers</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex ${searchbtn ? "w-[32%]" : "w-64"}`}>
                <div className='flex items-center w-full space-x-5 justify-end'>
                    <motion.div className='flex items-center' transition={{duration: 0.5}} animate={{width:searchbtn ? "32rem" : "" , height: searchbtn ? "100%" : ""}}>
                        {searchbtn ? (
                            <div onClick={()=>setSearchbtn(false)} className='w-full'>
                                <input type="text" name="" id="" className=' outline-black '/>
                            </div>
                        ):(
                            <div>
                                <img src={search} alt="search" className='w-8' onClick={()=>setSearchbtn(true)}/>
                            </div>
                        )}
                    </motion.div>
                    <div className=''>
                        <img src={user} alt="profile" className='w-8'/>
                    </div>
                    <div>
                        <button className='border-2 font-semibold py-2 px-5 border-black rounded-lg'><span>Post Blog</span></button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
