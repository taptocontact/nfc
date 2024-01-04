import ClientInfo from 'src/components/ClientInfo/ClientInfo'

export const QUERY = gql`
  query FindClientInfoById($id: String!) {
    clientInfo: clientInfoClientId(client: $id) {
      id
      client
      details
      created_at
      updated_at
      extra
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ClientInfo not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ clientInfo }) => {
  return <ClientInfo clientInfo={clientInfo} />
}
