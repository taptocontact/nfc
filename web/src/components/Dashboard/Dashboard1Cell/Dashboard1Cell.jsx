import { Link, routes } from "@redwoodjs/router"
import { MdLocalPharmacy } from "react-icons/md"

export const QUERY = gql`
  query FindDashboard1Query($id: Int!) {
    user: user(id: $id) {
      id
      name
      email
      ClientInfo{
        id
        client
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ user }) => {
  return (
    <>
                    <li className="relative">
                    <Link to={routes.editClientInfo({id:user.ClientInfo[0].id})}>
                    <button
                      className="flex flex-row w-full items-center h-11 focus:outline-none  hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                      // onClick={routes.newClientInfo()}
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <MdLocalPharmacy />
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">Update Profile</span>
                    </button>
                    </Link>
                  </li>

                  <li className="relative">
                    <Link to={routes.clientInfo({id:user.ClientInfo[0].client})}>
                    <button
                      className="flex flex-row w-full items-center h-11 focus:outline-none  hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                      // onClick={routes.newClientInfo()}
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <MdLocalPharmacy />
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">Public View</span>
                    </button>
                    </Link>
                  </li>

    </>
  )
}
