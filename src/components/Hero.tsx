import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { FaLocationDot } from "react-icons/fa6";



const Hero = () => {
  return (
        <div className=" flex flex-col mx-auto container h-screen items-center justify-center text-center gap-5 md:w-full">
          <div className="flex flex-col gap-2">
            <h1 className="font-normal text-[47.78px] text-white text-center">
              Explore the world with a smile
            </h1>
            <h3 className="font-normal text-base leading-[180%] tracking-[0%] text-center capitalize text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet <br /> luctus venenatis, lectus magna
              fringilla urna, porttitor rhoncus dolor purus non enim <br />{" "}
              praesent elementum facilisis leo,
            </h3>
          </div>

          <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 gap-4 md:flex items-center justify-between bg-white text-slate-700 rounded-[8px] p-2 mt-[65px]">
          <p className="flex items-center gap-4 cursor-pointer">
            <FaLocationDot />
            City or Destination
          </p>
          <p className="hidden sm:flex md:border-l h-[49px] items-center pl-[10px] cursor-pointer">
            Date of stay
          </p>
          <p className="hidden sm:flex md:border-l h-[49px] items-center pl-[10px] cursor-pointer">
            Person
          </p>
          <button className="flex items-center bg-[#43B97F] text-white p-4 rounded-xl gap-5 active:bg-green-400 transition duration-300 ease-in-out cursor-pointer">
            Find Trip Now
          </button>
        </div>
        </div>
  )
}

export default Hero