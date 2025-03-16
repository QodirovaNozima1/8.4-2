import { MdOutlineLanguage } from "react-icons/md";
import { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="container  justify-between items-center bg-inherit relative px-8">
      <nav className= "py-5 flex items-center justify-between">
        <div className="navbar__img">
          <Link to={"/"}>
            <h2 className="text-white font-normal text-4xl">
              travelaja
            </h2>
          </Link>
        </div>
        <div className={`nav__collect items-center flex justify-center gap-6 ${isMenuOpen ? "show" : ""}`} >
           <ul className="navbar__collection flex gap-12">
          <li>
            <Link
              className="font-normal text-base leading-[180%] text-white hover:underline duration-100"
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="font-normal text-base leading-[180%] text-white hover:underline duration-100"
              to={"/discover"}
            >
              Discover
            </Link>
          </li>
          <li>
            <Link
              className="font-normal text-base leading-[180%] text-white hover:underline duration-100"
              to={"/service"}
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              className="font-normal text-base leading-[180%] text-white hover:underline duration-100"
              to={"/news"}
            >
              News
            </Link>
          </li>
          <li>
            <Link
              className="font-normal text-base leading-[180%] text-white hover:underline duration-100"
              to={"/about"}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="font-normal text-base leading-[180%] text-white hover:underline duration-100"
              to={"/contact"}
            >
              Contact 
            </Link>
          </li>
        </ul>
        </div>
        <div className='flex  gap-1.5 items-center justify-center select'>
        <p className='text-[20px] text-white text-center'><MdOutlineLanguage /></p>
        <select className=' text-white outline-none bg-transparent' name="langs" id="langs">
          <option value="Russian" className='text-slate-600'>Russian</option>
          <option value="English" className='text-slate-600'>English</option>
          <option value="Uzb" className='text-slate-600'>Uzb</option>
        </select>
      </div>
      <div onClick={toggleMenu} className="navbar__menu text-2xl">
        <AiOutlineMenuUnfold />
      </div>
      </nav>
    </div>
  )
}

export default Navbar