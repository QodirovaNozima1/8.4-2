import React from 'react'
import foto1 from '../assets/foto1.png'
import foto2 from '../assets/foto2.png'
import foto3 from '../assets/foto3.png'

const Testimonial = () => {
  return (
    <div className="container">
        <div className="flex gap-4 items-center flex-col mt-10 mb-9">
            <p className="text-[16px] font-bold text-[#295943]">Testimonial</p>
            <h2 className="text-[27px] font-bold">Discover your love</h2>
        </div>
        <div className="grid  sm:grid-cols-3  grid-cols-1 gap-6 mb-10 ">
            <div className="w-[380px] h-[207px]  bg-white  p-4 flex flex-col  justify-between hover:bg-[#43B97F] hover:duration-500 ease-in-out  hover:text-white">
                <div className="flex gap-2.5 items-center">
                    <img src={foto1} alt="" />  
                    <p className='text-[18px] font-bold'>Angelina Simple</p>
                </div> hover:text-white
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            </div>
            <div className="w-[380px] h-[207px]  bg-white  p-4 flex flex-col  justify-between hover:bg-[#43B97F] hover:duration-500 ease-in-out hover:text-white">
                <div className="flex gap-2.5 items-center">
                    <img src={foto2} alt="" />
                    <p className='text-[18px] font-bold'>Viola Natalie</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            </div>
            <div className="w-[380px] h-[207px]  bg-white  p-4 flex flex-col  justify-between hover:bg-[#43B97F] hover:duration-500 ease-in-out hover:text-white">
                <div className="flex gap-2.5 items-center">
                    <img src={foto3} alt="" />
                    <p className='text-[18px] font-bold'>Robert John K.</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            </div>
            <div className="w-[380px] h-[207px]  bg-white  p-4 flex flex-col  justify-between hover:bg-[#43B97F] hover:duration-500 ease-in-out hover:text-white">
                <div className="flex gap-2.5 items-center">
                    <img src={foto3} alt="" />
                    <p className='text-[18px] font-bold'>Robert John K.e</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            </div>
            <div className="w-[380px] h-[207px] text-black  bg-white  p-4 flex flex-col  justify-between hover:bg-[#43B97F] hover:duration-500 ease-in-out hover:text-white">
                <div className="flex gap-2.5 items-center">
                    <img src={foto2} alt="" />
                    <p className='text-[18px] font-bold'>Viola Natalie</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            </div>
            <div className="w-[380px] h-[207px]  bg-white  p-4 flex flex-col  justify-between hover:bg-[#43B97F] hover:duration-500 ease-in-out hover:text-white">
                <div className="flex gap-2.5 items-center">
                    <img src={foto1} alt="" />
                    <p className='text-[18px] font-bold'>Angelina Simple</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonial