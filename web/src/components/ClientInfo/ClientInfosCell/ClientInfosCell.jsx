import { Link, routes } from '@redwoodjs/router'

import ClientInfos from 'src/components/ClientInfo/ClientInfos'

export const QUERY = gql`
  query FindClientInfos {
    clientInfos {
      id
      client
      details
      created_at
      updated_at
      extra
      userId
      status
      user{
        id
        name
        email
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No clientInfos yet. '}
      <Link to={routes.newClientInfo()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ clientInfos }) => {
  return <ClientInfos clientInfos={clientInfos} />
}
