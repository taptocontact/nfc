import { useState } from "react";
import { CgProfile } from "react-icons/cg"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaInstagramSquare,FaLinkedin } from "react-icons/fa";
import { Link, routes } from "@redwoodjs/router";


const HomeLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="bg-black flex justify-between p-3 px-5 text-white relative">
        <div className="">
          <img src="/logo.jpg" className="h-16 rounded-xl" alt="" />

        </div>

        <div className={`flex space-x-2 items-center cursor-pointer max-sm:flex-col
      max-sm:absolute max-sm:bg-gray-900 max-sm:top-full
       max-sm:w-full ${!isOpen && 'max-sm:hidden max-sm:left-full'} ${isOpen && 'max-sm:left-0'}

       transition-all

      `}>
          <Link  to={routes.home()} className="hover:bg-yellow-500 p-3 hover:rounded-lg transition-all">
            <span>Home</span>
          </Link>
          <Link to={routes.products()} className="hover:bg-yellow-500 p-3 hover:rounded-lg transition-all">
            <span>Products</span>
          </Link>
          <Link to={routes.about()} className="hover:bg-yellow-500 p-3 hover:rounded-lg transition-all">
            <span>About</span>
          </Link>
          <Link to={routes.work()} className="hover:bg-yellow-500 p-3 hover:rounded-lg transition-all">
            <span>How it works</span>
          </Link>

        </div>
        <div className="flex items-center text-4xl">
          <span>
            <CgProfile />
          </span>
        </div>

        <div className="sm:hidden flex items-center text-4xl " onClick={() => setIsOpen((e) => !e)}>
          <span>
            <GiHamburgerMenu />

          </span>
        </div>
      </div>

      <div>
        {children}
      </div>


      <div className=" ">
        <div className="bg-black text-white p-3 flex flex-col items-center space-y-3">
          <div>
            <img src="/logo.jpg" className="h-20" alt="" />
          </div>
          <div>
            <span>TapToContact NFC card is an essential tool for professionals to connect with potential clients and stay organized and productive.All rights reserved.

              </span>
          </div>

          <div className="flex space-x-2">
            <span className="">
            <FaInstagramSquare size={30} />
            </span>
            <span>
            <FaLinkedin size={30} />

            </span>
          </div>

        </div>


      </div>


    </>
  )
}

export default HomeLayout
