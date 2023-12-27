import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ClientInfo/ClientInfosCell'
import { jsonTruncate, timeTag, truncate } from 'src/lib/formatters'

const DELETE_CLIENT_INFO_MUTATION = gql`
  mutation DeleteClientInfoMutation($id: Int!) {
    deleteClientInfo(id: $id) {
      id
    }
  }
`

const ClientInfosList = ({ clientInfos }) => {
  const [deleteClientInfo] = useMutation(DELETE_CLIENT_INFO_MUTATION, {
    onCompleted: () => {
      toast.success('ClientInfo deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete clientInfo ' + id + '?')) {
      deleteClientInfo({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Client</th>
            <th>Details</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Extra</th>
            <th>User id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {clientInfos.map((clientInfo) => (
            <tr key={clientInfo.id}>
              <td>{truncate(clientInfo.id)}</td>
              <td>{truncate(clientInfo.client)}</td>
              <td>{jsonTruncate(clientInfo.details)}</td>
              <td>{timeTag(clientInfo.created_at)}</td>
              <td>{timeTag(clientInfo.updated_at)}</td>
              <td>{jsonTruncate(clientInfo.extra)}</td>
              <td>{truncate(clientInfo.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.clientInfo({ id: clientInfo.id })}
                    title={'Show clientInfo ' + clientInfo.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editClientInfo({ id: clientInfo.id })}
                    title={'Edit clientInfo ' + clientInfo.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete clientInfo ' + clientInfo.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(clientInfo.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ClientInfosList
