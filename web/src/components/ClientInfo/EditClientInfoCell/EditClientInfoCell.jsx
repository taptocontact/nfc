import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ClientInfoForm from 'src/components/ClientInfo/ClientInfoForm'

export const QUERY = gql`
  query EditClientInfoById($id: Int!) {
    clientInfo: clientInfo(id: $id) {
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
const UPDATE_CLIENT_INFO_MUTATION = gql`
  mutation UpdateClientInfoMutation($id: Int!, $input: UpdateClientInfoInput!) {
    updateClientInfo(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ clientInfo }) => {
  const [updateClientInfo, { loading, error }] = useMutation(
    UPDATE_CLIENT_INFO_MUTATION,
    {
      onCompleted: () => {
        toast.success('ClientInfo updated')
        navigate(routes.editClientInfo({id:1}))
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateClientInfo({ variables: { id, input } })
  }

  return (
    // <div className="rw-segment">
    //   <header className="rw-segment-header">
    //     <h2 className="rw-heading rw-heading-secondary">
    //       Edit ClientInfo {clientInfo?.id}
    //     </h2>
    //   </header>
    //   <div className="rw-segment-main">
        <ClientInfoForm
          clientInfo={clientInfo}
          onSave={onSave}
          error={error}
          loading={loading}
        />
    //   {/* </div>
    // </div> */}
  )
}
