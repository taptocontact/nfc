import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ClientInfo/ClientInfosCell'
import { jsonTruncate, timeTag, truncate } from 'src/lib/formatters'
import React, { createRef, useEffect, useRef, useState } from 'react';
import qrcode from 'qrcode'


const DELETE_CLIENT_INFO_MUTATION = gql`
  mutation DeleteClientInfoMutation($id: Int!) {
    deleteClientInfo(id: $id) {
      id
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

const ClientInfosList = ({ clientInfos }) => {



  const [canvasRefs, setCanvasRefs] = useState([]);

  useEffect(() => {
    setCanvasRefs(clientInfos.map(() => createRef()));
  }, [clientInfos]);

  useEffect(() => {
    // if(canvasRefs)
    // {
      try {


      const generateQRCode = (text, canvasRef) => {
        qrcode.toCanvas(canvasRef.current, text, function (error) {
          if (error) console.error(error);
          console.log('success!');
        });
      };

      clientInfos.forEach((clientInfo, index) => {
        generateQRCode(clientInfo.client, canvasRefs[index]);
      });
    } catch (error) {

    }
    // }
  }, [clientInfos, canvasRefs]);


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

  const [updateClientInfo, { loading, error }] = useMutation(
    UPDATE_CLIENT_INFO_MUTATION,
    {
      onCompleted: () => {
        toast.success('ClientInfo updated')
        navigate(routes.clientInfos())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onChange = ( id) => {
    let input = {}
    input['status'] = 'complete'
    updateClientInfo({ variables: { id, input } })
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Client</th>
            <th>Details</th>
            <th>Name</th>
            <th>Email</th>
            {/* <th>Created at</th>
            <th>Updated at</th>
            <th>Extra</th>
            <th>User id</th> */}
            <th>status</th>
            <th>Qr Code</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {clientInfos.map((clientInfo,index) => (
            <tr key={clientInfo.id}>
              <td>{truncate(clientInfo.id)}</td>
              <td>{truncate(clientInfo.client)}</td>
              <td>{jsonTruncate(clientInfo.details)}</td>
              <td>{clientInfo.user.name}</td>
              <td>{clientInfo.user.email}</td>
              {/* <td>{timeTag(clientInfo.created_at)}</td>
              <td>{timeTag(clientInfo.updated_at)}</td>
              <td>{jsonTruncate(clientInfo.extra)}</td>
              <td>{truncate(clientInfo.userId)}</td> */}
              <td>{truncate(clientInfo.status)}</td>
              <td><canvas id={`canvas-${clientInfo.id}`} ref={canvasRefs[index]}></canvas></td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.clientInfo({ id: clientInfo.client })}
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
                  <button
                    type="button"
                    title={'Change Status ' + clientInfo.id}
                    className="rw-button rw-button-small rw-button-small"
                    onClick={() => onChange(clientInfo.id)}
                  >
                    Status
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
