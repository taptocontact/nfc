import { Link, routes } from "@redwoodjs/router"
import { useState } from "react"

export const QUERY = gql`
  query FindProductQuery {
    products: cards {
      id
      name
      color
      price
      imageUrl
      type
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ products }) => {


  const [selectedFilter, setSelectedFilter] = useState('All')

  const filteredProducts =
    selectedFilter === 'All'
      ? products
      : products.filter((item) => item.type == selectedFilter)

  return (
    <>
    <div className="mb-12 ml-12 max-md:ml-0 max-md:text-center">
      <h1 className="mt-7 text-3xl font-bold">
        Want Business Cards for your Team with your own Logo? Call 9741229670
        or for Special Offers.
      </h1>
    </div>
    <div className="flex justify-evenly max-lg:flex-wrap">
      <button
        className={`rounded-2xl bg-gray-200  p-3 px-10 max-lg:m-2  ${
          selectedFilter === 'All' ? 'bg-gray-500' : ''
        }`}
        onClick={() => setSelectedFilter('All')}
      >
        All
      </button>
      <button
        className={`rounded-2xl bg-gray-200 p-3 px-10  max-lg:m-2 ${
          selectedFilter === 'gold' ? 'bg-gray-500' : ''
        }`}
        onClick={() => setSelectedFilter('gold')}
      >
        NFC Gold Card
      </button>
      <button
        className={`rounded-2xl bg-gray-200 p-3 px-10  max-lg:m-2 ${
          selectedFilter === 'silver' ? 'bg-gray-500' : ''
        }`}
        onClick={() => setSelectedFilter('silver')}
      >
        NFC Silver Card
      </button>
      <button
        className={`rounded-2xl bg-gray-200 p-3 px-10  max-lg:m-2 ${
          selectedFilter === 'google gold' ? 'bg-gray-500' : ''
        }`}
        onClick={() => setSelectedFilter('google gold')}
      >
        Google Review Gold Card
      </button>
      <button
        className={`rounded-2xl bg-gray-200 p-3 px-10  max-lg:m-2 ${
          selectedFilter === 'google' ? 'bg-gray-500' : ''
        }`}
        onClick={() => setSelectedFilter('google silver')}
      >
        Google Review Silver Card
      </button>
    </div>
    {/* <div className="mb-5 ml-12 grid grid-cols-3 max-lg:grid-cols-2 max-sm:ml-16 max-sm:grid-cols-1"> */}
    <div className="mb-12 grid grid-cols-2 max-md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {filteredProducts.map((item) => (
        <div className="relative mt-6 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md max-sm:w-full">
          <div className="bg-blue-gray-500 shadow-blue-gray-500/40 relative mx-4 mt-12 h-72 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg">
            <img src={item.imageUrl} alt="card-image" className="h-full " />
          </div>
          <div className="p-6">
            <h5 className="text-blue-gray-900 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
              {item.name}
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              {item.color}
            </p>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              ₹{item.price}
            </p>
          </div>
          <div className="p-6 pt-0">
            <Link to={routes.signup()}>
            <button
              className="select-none rounded-lg bg-gray-900 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Buy Now
            </button>
            </Link>
          </div>
        </div>
      ))}
    </div>

  </>
  )
}
