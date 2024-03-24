import React, { useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import axios from 'axios'

const Herosection = () => {
    useEffect(()=>{
        async function fetching(){
            try {
                const blogs = await axios.get(`${process.env.REACT_APP_BASE_URL}blog/get-blog/65f06e4fe072597f10d7e56d`)
                console.log(blogs);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetching();
    })
    return (
        <div>
            <Splide
                options={{
                    type: "loop",
                    padding: "20rem",
                    focus: true,
                    gap: 50,
                    autoplay: true,
                    breakpoints:{
                        1200:{
                            padding: "15rem"
                        },
                        920:{
                            padding: "10rem"
                        },
                        730:{
                            padding: "5rem"
                        },
                        600:{
                            gap: 25,
                            padding: "0rem"
                        },
                    }
                }}
            >
                <SplideSlide className=''>
                    <div className='h-[35rem] bg-[#FAFAFA] relative'>
                        <div className='sm:h-40 sm:w-96 w-full max-sm:px-10 absolute flex flex-col justify-between bottom-16 left-[50%] translate-x-[-50%]'>
                            <div className='uppercase bg-white w-fit font-serif sm:text-base text-center px-3 mx-auto'>
                                <p className=''>tips and trick</p>
                            </div>
                            <div className=' text-xl sm:text-3xl max-[400px]:text-base font-semibold font-serif text-center h-20'>
                                <p className='h-full text-ellipsis '><span>How to become a good writer ? and you are ...</span> </p>
                            </div>
                            <div className='flex justify-between text-[#A1A1A1] sm:text-sm text-xs'>
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
