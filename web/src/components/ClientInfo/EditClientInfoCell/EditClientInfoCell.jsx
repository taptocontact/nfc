import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useEffect, useState } from 'react'
import { useAuth } from "src/auth"
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
  const { isAuthenticated, currentUser, logOut, hasRole } = useAuth()
  const [wait,setWait] = useState(false)
  const [updateClientInfo, { loading, error }] = useMutation(
    UPDATE_CLIENT_INFO_MUTATION,
    {
      onCompleted: () => {
        toast.success('ClientInfo updated')
        navigate(routes.editClientInfo({id:clientInfo.id}))
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateClientInfo({ variables: { id, input } })
  }
  useEffect(()=>{
    try {
      if(currentUser.id!==clientInfo.userId){
        navigate(routes.home())
      }
      else{
        setWait(true)
      }
    } catch (error) {
      navigate(routes.home())

    }

  },[])

  return (

    <>
   { wait &&        <ClientInfoForm
          clientInfo={clientInfo}
          onSave={onSave}
          error={error}
          loading={loading}
        />}

    </>

  )
}
