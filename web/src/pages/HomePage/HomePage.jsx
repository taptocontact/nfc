import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
<div className="grid grid-cols-2 bg-gray-900 max-md:grid-cols-1">
        <div className="ml-7 mt-12">
          <h1 className="m-2 text-3xl text-white">
            Personalized NFC Enabled Digital Smart Business Cards
          </h1>
          <p className="m-2 text-base text-white">
            TapToContact is an NFC-based digital card. With just a tap, you can
            share your contact information using this.
          </p>
          <h1 className="m-2 text-3xl text-white">
            Revolutionise your Networking game:
          </h1>
          <h1 className="m-2 text-3xl font-bold text-white">TapToContact</h1>
          <button className="ml-2 mt-4 rounded-3xl bg-white p-2 transition hover:bg-[#FFB400]">
            Buy Now
          </button>
        </div>
        <div>
          <img
            src={'/logo.jpg'}
            alt="sir"
            className="mt-12 h-3/4 rounded-2xl max-md:ml-7"
          ></img>
        </div>
      </div>

      <div className="mt-12">
        <h1 className="mb-2 text-center text-3xl">
          The Benefits of <b>TapToContact</b>
        </h1>
        <h1 className="text-center text-lg max-md:w-full">
          Say goodbye to the hassle of paper business cards by embracing the
          ease and convenience of Rich Kardz. With Rich Kardz, you can
          effortlessly connect with potential clients and customers, all while
          being environmentally conscious. Stand out from the crowd with the
          latest in smart technology and make networking a breeze
        </h1>
      </div>
    </>
  )
}

export default HomePage
