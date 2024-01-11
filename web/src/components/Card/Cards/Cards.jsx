import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useEffect, useState } from 'react'

import { QUERY } from 'src/components/Card/CardsCell'
import SearchTable from 'src/components/SearchTable/SearchTable'
import { jsonTruncate, timeTag, truncate } from 'src/lib/formatters'

const DELETE_CARD_MUTATION = gql`
  mutation DeleteCardMutation($id: Int!) {
    deleteCard(id: $id) {
      id
    }
  }
`

const CardsList = ({ cards }) => {

  const [search_data, setSearch_data] = useState(cards)
  const [rows_count, setRows_count] = useState(cards.length <= 5 ? 5 : 10)

  useEffect(()=>{
    setSearch_data(cards)

  },[cards])


  const [deleteCard] = useMutation(DELETE_CARD_MUTATION, {
    onCompleted: () => {
      toast.success('Card deleted')
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
    if (confirm('Are you sure you want to delete card ' + id + '?')) {
      deleteCard({ variables: { id } })
    }
  }

  const change = (search)=>{
    const search_val = search.target.value

    let filterData = cards.filter((val) => {
      return (
        val.name
          .toString()
          .toLowerCase()
          .includes(search_val.toLowerCase())
      )
    })
    setRows_count(filterData.length <= 5 ? 5 : 10)
    setSearch_data(filterData)
  }

  const columns = [
    {
      headerClassName: 'text-left',
     Header:  'SL. No',
      accessor: 'id',
           Cell: ({index}) => (
           index+1
       )
   },
    {
       headerClassName: 'text-left',
      Header:  'Card Name',
      accessor: 'name',
    },
    {
      headerClassName: 'text-left',
     Header:  'Type',
     accessor: 'type',
   },
    {
       headerClassName: 'text-left',
      Header:  'Color',
      accessor: 'color',
    },
    {
       headerClassName: 'text-left',
      Header:  'Price',
      accessor: 'price',
    },
    {
       headerClassName: 'text-left',
      Header:  'Image',
      // accessor: 'name',
      Cell: ({original}) => (
        <img src={original.imageUrl} alt="" srcset="" height={20} />
      )
    },

    {
       headerClassName: 'text-left',
      Header:  'Action',
      accessor: 'actionColumn',
      disableSortBy: true,
      Cell: ({ original }) => (
        <nav className="rw-table-actions">
        <Link
          to={routes.card({ id: original.id })}
          title={'Show card ' + original.id + ' detail'}
          className="rw-button rw-button-small"
        >
          Show
        </Link>
        <Link
          to={routes.editCard({ id: original.id })}
          title={'Edit card ' + original.id}
          className="rw-button rw-button-small rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          title={'Delete card ' + original.id}
          className="rw-button rw-button-small rw-button-red"
          onClick={() => onDeleteClick(original.id)}
        >
          Delete
        </button>
      </nav>

      ),
    },
  ]


  return (

    <>
                    <SearchTable
    change={change}
    placeholder={"Search By Typing Card Name"}
    columns={columns}
    rows_count={rows_count}
    search_data={search_data}
    />

    </>
    // <div className="rw-segment rw-table-wrapper-responsive">
    //   <table className="rw-table">
    //     <thead>
    //       <tr>
    //         <th>Id</th>
    //         <th>Name</th>
    //         <th>Color</th>
    //         <th>Price</th>
    //         <th>Image url</th>
    //         <th>Type</th>
    //         <th>Created at</th>
    //         <th>Updated at</th>
    //         <th>Extra</th>
    //         <th>&nbsp;</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {cards.map((card) => (
    //         <tr key={card.id}>
    //           <td>{truncate(card.id)}</td>
    //           <td>{truncate(card.name)}</td>
    //           <td>{truncate(card.color)}</td>
    //           <td>{truncate(card.price)}</td>
    //           <td>{truncate(card.imageUrl)}</td>
    //           <td>{truncate(card.type)}</td>
    //           <td>{timeTag(card.created_at)}</td>
    //           <td>{timeTag(card.updated_at)}</td>
    //           <td>{jsonTruncate(card.extra)}</td>
    //           <td>
    //             <nav className="rw-table-actions">
    //               <Link
    //                 to={routes.card({ id: card.id })}
    //                 title={'Show card ' + card.id + ' detail'}
    //                 className="rw-button rw-button-small"
    //               >
    //                 Show
    //               </Link>
    //               <Link
    //                 to={routes.editCard({ id: card.id })}
    //                 title={'Edit card ' + card.id}
    //                 className="rw-button rw-button-small rw-button-blue"
    //               >
    //                 Edit
    //               </Link>
    //               <button
    //                 type="button"
    //                 title={'Delete card ' + card.id}
    //                 className="rw-button rw-button-small rw-button-red"
    //                 onClick={() => onDeleteClick(card.id)}
    //               >
    //                 Delete
    //               </button>
    //             </nav>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  )
}

export default CardsList
