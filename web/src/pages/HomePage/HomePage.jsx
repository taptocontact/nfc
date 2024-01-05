import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import sir from './sir.jpg'

const HomePage = () => {
  return (
    <>
      <div className="grid grid-cols-2 bg-gray-900 max-md:grid-cols-1">
        <div className="ml-7 mt-12">
          <h1 className="m-2 text-3xl text-white">Welcome to TapToContact </h1>
          <p className="m-2 text-base text-white">
            Your Digital Business Card Solution!
          </p>
          <h1 className="m-2 text-3xl text-white">
            Elevate your networking game with our innovative platform.
          </h1>
          <h1 className="m-2 text-3xl font-bold text-white">TapToContact</h1>
          <button className="ml-2 mt-4 rounded-3xl bg-white p-2 transition hover:bg-[#FFB400]">
            Buy Now
          </button>
        </div>
        <div>
          <img
            src={sir}
            alt="sir"
            className="mt-12 h-3/4 rounded-2xl max-md:ml-7"
          ></img>
        </div>
      </div>

      <div className="mt-12">
        <h1 className="mb-2 text-center text-3xl">
          The Benefits of <b>TapToContact</b>
        </h1>
        <h1 className="mb-10 text-center text-lg max-md:w-full">
          Embrace the future of networking with a modern, paperless solution.
          TapToContact's digital business cards not only showcase
          <br /> your professionalism but also contribute to a greener
          environment by eliminating the need for printed cards.
          <br />
          Say goodbye to fumbling with paper cards.
        </h1>
      </div>
      <div className="grid grid-cols-2 bg-gray-900 py-10 max-md:grid-cols-1">
        <div className="">
          <h1 className="m-8 text-3xl text-white">About Us</h1>
          <p className="m-8 text-white">
            Our mission is to revolutionize the way professionals connect and
            exchange information. In a world dominated by digital interactions,
            we saw an opportunity to redefine networking, making it more
            efficient, environmentally friendly, and tailored to the modern
            professional.
          </p>
          <button className=" ml-6 rounded-3xl bg-white p-2 transition hover:bg-[#FFB400] max-md:mb-7">
            Read More
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img src={'/card/1.jpg'} alt="card1" className="h-52"></img>
        </div>
      </div>

      <marquee direction="right">
        <div className="m-12 flex">
          <img
            src={'/card/1.jpg'}
            alt="card1"
            className="m-5 h-36 rotate-12"
          ></img>
          <img src={'/card/2.jpg'} alt="card1" className="m-5 h-36"></img>
          <img
            src={'/card/3.jpg'}
            alt="card1"
            className="m-5 h-36 rotate-12"
          ></img>
          <img src={'/card/4.jpg'} alt="card1" className="m-5 h-36"></img>
          <img
            src={'/card/5.jpg'}
            alt="card1"
            className="m-5 h-36 rotate-12"
          ></img>
          <img src={'/card/6.jpg'} alt="card1" className="m-5 h-36 "></img>
          <img
            src={'/card/7.jpg'}
            alt="card1"
            className="m-5 h-36 rotate-12"
          ></img>
          <img src={'/card/8.jpg'} alt="card1" className="m-5 h-36"></img>
        </div>
      </marquee>

      <div>
        <h1 className="mb-2 mt-3 text-center text-3xl">
          Get Your NFC Smart Business Cards
        </h1>
      </div>
      <div className="flex justify-center">
        <button className="mb-2 ml-2 mt-4 rounded-3xl bg-black p-2 text-white transition hover:bg-[#FFB400]">
          Buy Now
        </button>
      </div>
    </>
  )
}

export default HomePage
