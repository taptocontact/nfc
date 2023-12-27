import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ClientInfoForm from 'src/components/ClientInfo/ClientInfoForm'

const CREATE_CLIENT_INFO_MUTATION = gql`
  mutation CreateClientInfoMutation($input: CreateClientInfoInput!) {
    createClientInfo(input: $input) {
      id
    }
  }
`

const NewClientInfo = () => {
  const [createClientInfo, { loading, error }] = useMutation(
    CREATE_CLIENT_INFO_MUTATION,
    {
      onCompleted: () => {
        toast.success('ClientInfo created')
        navigate(routes.clientInfos())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createClientInfo({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ClientInfo</h2>
      </header>
      <div className="rw-segment-main">
        <ClientInfoForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewClientInfo
