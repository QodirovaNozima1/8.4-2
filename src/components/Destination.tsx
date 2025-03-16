import img1 from "../assets/d1.png"
import { IoPaperPlaneSharp } from "react-icons/io5";
const Destination = () => {
  return (
    <div className="container">
        <div className="flex gap-4 items-center flex-col mt-10 mb-9">
            <p className="text-[16px] font-bold text-[#295943]">Top destination</p>
            <h2 className="text-[27px] font-bold">Discover your love</h2>
        </div>
        <div className="grid  sm:grid-cols-3  grid-cols-1 gap-3 mb-10 ">
            <div className="w-[380px] h-[363px] rounded-lg bg-white drop-shadow-md p-2 flex flex-col">
                <img src={img1} alt="" />
                <h1 className="pt-4 pb-10">Taman Nasional Komodo</h1>
                <div className="flex justify-between hover:scale:30% 60% hover:duration-500 ease-in-out">
                    <p className="text-[16px] font-bold text-[#295943]">Rp. 7,5jt</p>
                    <div className="flex gap-2 items-center">
                        <IoPaperPlaneSharp/>
                        <p className="font-light">7 days for trips</p>
                    </div>
                </div>
            </div>
            <div className="w-[380px] h-[363px] rounded-lg bg-white drop-shadow-md p-2.5 flex flex-col">
                <img src={img1} alt="" />
                <h1 className="pt-4 pb-10">Taman Nasional Komodo</h1>
                <div className="flex justify-between">
                    <p className="text-[16px] font-bold text-[#295943]">Rp. 7,5jt</p>
                    <div className="flex gap-2 items-center">
                        <IoPaperPlaneSharp/>
                        <p className="font-light">7 days for trips</p>
                    </div>
                </div>
            </div>
            <div className="w-[380px] h-[363px] rounded-lg bg-white drop-shadow-md p-2.5 flex flex-col">
                <img src={img1} alt="" />
                <h1 className="pt-4 pb-10">Taman Nasional Komodo</h1>
                <div className="flex justify-between">
                    <p className="text-[16px] font-bold text-[#295943]">Rp. 7,5jt</p>
                    <div className="flex gap-2 items-center">
                        <IoPaperPlaneSharp/>
                        <p className="font-light">7 days for trips</p>
                    </div>
                </div>
            </div>
            <div className="w-[380px] h-[363px] rounded-lg bg-white drop-shadow-md p-2.5 flex flex-col">
                <img src={img1} alt="" />
                <h1 className="pt-4 pb-10">Taman Nasional Komodo</h1>
                <div className="flex justify-between">
                    <p className="text-[16px] font-bold text-[#295943]">Rp. 7,5jt</p>
                    <div className="flex gap-2 items-center">
                        <IoPaperPlaneSharp/>
                        <p className="font-light">7 days for trips</p>
                    </div>
                </div>
            </div>
            <div className="w-[380px] h-[363px] rounded-lg bg-white drop-shadow-md p-2.5 flex flex-col">
                <img src={img1} alt="" />
                <h1 className="pt-4 pb-10">Taman Nasional Komodo</h1>
                <div className="flex justify-between">
                    <p className="text-[16px] font-bold text-[#295943]">Rp. 7,5jt</p>
                    <div className="flex gap-2 items-center">
                        <IoPaperPlaneSharp/>
                        <p className="font-light">7 days for trips</p>
                    </div>
                </div>
            </div>
            <div className="w-[380px] h-[363px] rounded-lg bg-white drop-shadow-md p-2.5 flex flex-col">
                <img src={img1} alt="" />
                <h1 className="pt-4 pb-10">Taman Nasional Komodo</h1>
                <div className="flex justify-between">
                    <p className="text-[16px] font-bold text-[#295943]">Rp. 7,5jt</p>
                    <div className="flex gap-2 items-center">
                        <IoPaperPlaneSharp/>
                        <p className="font-light">7 days for trips</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Destination