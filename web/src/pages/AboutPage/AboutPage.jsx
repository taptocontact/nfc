import { FaShoppingCart } from 'react-icons/fa'
import { MdOutlineQrCode2 } from 'react-icons/md'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import sir from './sir.jpg'

const AboutPage = () => {
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
      <div className="grid grid-cols-2 max-md:grid-cols-1">
        <div className="flex justify-center">
          <img
            src={'card/1.jpg'}
            alt="card1"
            className="m-12 h-60 rounded-xl max-md:m-0 max-md:mt-7 max-md:h-40"
          ></img>
        </div>
        <div>
          <h1 className="mb-7 mt-12 text-3xl max-md:text-center">
            About TapToContact
          </h1>
          <p className="mb-12 pr-12 max-md:m-7 max-md:p-0 max-md:text-center max-md:text-justify">
            Welcome to TapToContact, where innovation meets connection. We are a team of passionate individuals dedicated to transforming the way professionals network and exchange information. At TapToContact, we believe that networking should be seamless, sustainable, and leave a lasting impression.
            <br />
            <br /> We are a diverse team of tech enthusiasts, designers, and
            business minds who share a common goal: to bring innovation to the
            world of networking. Our collective passion for technology and
            commitment to sustainability drive us to create solutions that make
            a meaningful impact.
          </p>
        </div>
      </div>

      <div>
        <h1 className="mb-2 text-center text-3xl transition">
          How to Own Our Digital TapToContact Card
        </h1>
        <p className="mb-2 text-center text-base">
          Own your smart business card today in three simple steps
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fceb01] text-2xl text-black">
            1
          </div>
          <div className="mx-4 h-1 w-72 bg-gray-900 max-lg:w-60 max-md:w-12"></div>
        </div>

        <div className="flex items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fceb01] text-2xl text-black">
            2
          </div>
          <div className="mx-4 h-1 w-72 bg-gray-900  max-lg:w-60 max-md:w-12"></div>
        </div>

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fceb01] text-2xl text-black">
          3
        </div>
      </div>

      <div className="mb-12 mt-8 grid grid-cols-3 gap-8 max-md:grid-cols-1">
        <div className="flex flex-col items-center text-center">
          <FaShoppingCart className="mb-4 text-4xl" />
          <h1 className="mb-2 text-xl font-bold">Order TapToContact</h1>
          <p className="max-md:w-3/4">
            Check out our cards, customize or finalize your choice and place the
            order. You will have your smart business card within days.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <MdOutlineQrCode2 className="mb-4 text-4xl" />
          <h1 className="mb-2 text-xl font-bold">Customize QR Code</h1>
          <p className="max-md:w-3/4">
            Personalize your QR code to showcase your brand. Choose colors,
            styles, and add information you want to share.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaShoppingCart className="mb-4 text-4xl" />
          <h1 className="mb-2 text-xl font-bold">Fast Delivery</h1>
          <p className="max-md:w-3/4">
            We ensure a quick turnaround time. Receive your customized cards
            delivered to your doorstep.
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutPage
