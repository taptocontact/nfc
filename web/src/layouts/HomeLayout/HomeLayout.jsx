import { useState } from 'react'

import { CgProfile } from 'react-icons/cg'
import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

import { Link, routes } from '@redwoodjs/router'

const HomeLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="relative flex justify-between bg-black p-3 px-5 text-white">
        <div className="">
          <img src="/logo.png" className="h-16 rounded-xl" alt="" />
        </div>

        <div
          className={`flex cursor-pointer items-center space-x-2 max-sm:absolute
      max-sm:top-full max-sm:w-full max-sm:flex-col
       max-sm:bg-gray-900 ${!isOpen && 'max-sm:left-full max-sm:hidden'} ${
            isOpen && 'max-sm:left-0'
          }

       transition-all

      `}
        >
          <Link
            to={routes.home()}
            className="p-3 transition-all hover:rounded-lg hover:bg-yellow-500"
          >
            <span>Home</span>
          </Link>
          <Link
            to={routes.products()}
            className="p-3 transition-all hover:rounded-lg hover:bg-yellow-500"
          >
            <span>Products</span>
          </Link>
          <Link
            to={routes.about()}
            className="p-3 transition-all hover:rounded-lg hover:bg-yellow-500"
          >
            <span>About</span>
          </Link>
          <Link
            to={routes.work()}
            className="p-3 transition-all hover:rounded-lg hover:bg-yellow-500"
          >
            <span>How it works</span>
          </Link>
        </div>
        <div className="flex items-center text-4xl">
          <Link to={routes.login()}>
            <CgProfile />
          </Link>
        </div>

        <div
          className="flex items-center text-4xl sm:hidden "
          onClick={() => setIsOpen((e) => !e)}
        >
          <span>
            <GiHamburgerMenu />
          </span>
        </div>
      </div>

      <div>{children}</div>

      <div className=" ">
        <div className="flex flex-col items-center space-y-3 bg-black p-3 text-white">
          <div>
            <img src="/logo.png" className="h-16" alt="" />
          </div>
          <div>
            <span>
              TapToContact NFC card is an essential tool for professionals to
              connect with potential clients and stay organized and
              productive.All rights reserved.
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
