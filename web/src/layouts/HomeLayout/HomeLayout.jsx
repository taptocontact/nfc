import { useState } from "react";
import { CgProfile } from "react-icons/cg"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaInstagramSquare,FaLinkedin } from "react-icons/fa";


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
          <div className="hover:bg-yellow-500 p-3 hover:rounded-lg transition-all">
            <span>Home</span>
          </div>
          <div className="hover:bg-yellow-500 p-3 hover:rounded-lg transition-all">
            <span>Products</span>
          </div>
          <div className="hover:bg-yellow-500 p-3 hover:rounded-lg transition-all">
            <span>About</span>
          </div>
          <div className="hover:bg-yellow-500 p-3 hover:rounded-lg transition-all">
            <span>How it works</span>
          </div>

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
        <div className="bg-black text-white p-3">
          <div>
            <img src="/logo.jpg" className="h-20" alt="" />
          </div>
          <div>
            <span>Rich Kardz NFC card is an essential tool for professionals to connect with potential clients and stay organized and productive.All rights reserved.

              J2D FASHIONS PRIVATE LIMITED</span>
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

        {/* <p className="text-xs">
          When you give someone a PVC Glossy NFC Card, you're not just giving them a piece of paper, you're giving them something that will open up a whole new world of possibilities. Watch their face light up when they tap your card and experience the magic of NFC technology.
          <br />

          Done carrying paper business cards? Let Rich Kardz be your guide to a more effortless approach to networking and help you put your best foot forward in a matter of seconds. Now you can craft an unforgettable digital introduction and maximise your business connections from anywhere, at any time.
          <br />

          Don't get caught in the shadows, become an innovator and stay ahead of the times. Embark on the movement with stunningly designed business cards with NFC technology, and never again worry about making a dull first impression. Join us now and elevate your networking opportunities!
          <br />

          In our ever-changing digital world, paper business cards are becoming outdated. If you're tired of searching through piles of traditional business cards at networking events, Rich Kardz's NFC chip business cards are the solution for you.
          <br />

          Use premium NFC business cards to get ahead in the future of networking. Give your business the dependability and convenience of contactless technology, and share your unique brand story. With this innovative NFC embedded business card approach, you can make a lasting first impression, enjoy the networking process, and build a reputation for excellence.
          <br />

          Looking for business cards NFC on a larger scale? Browse our NFC enabled business cards wholesale options. Share the innovation with your team or customers and watch your connections grow.
          <br />
        </p> */}

      </div>


    </>
  )
}

export default HomeLayout
