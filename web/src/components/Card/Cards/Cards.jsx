import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Card/CardsCell'
import { jsonTruncate, timeTag, truncate } from 'src/lib/formatters'

const DELETE_CARD_MUTATION = gql`
  mutation DeleteCardMutation($id: Int!) {
    deleteCard(id: $id) {
      id
    }
  }
`

const CardsList = ({ cards }) => {
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

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Color</th>
            <th>Price</th>
            <th>Image url</th>
            <th>Type</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Extra</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => (
            <tr key={card.id}>
              <td>{truncate(card.id)}</td>
              <td>{truncate(card.name)}</td>
              <td>{truncate(card.color)}</td>
              <td>{truncate(card.price)}</td>
              <td>{truncate(card.imageUrl)}</td>
              <td>{truncate(card.type)}</td>
              <td>{timeTag(card.created_at)}</td>
              <td>{timeTag(card.updated_at)}</td>
              <td>{jsonTruncate(card.extra)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.card({ id: card.id })}
                    title={'Show card ' + card.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCard({ id: card.id })}
                    title={'Edit card ' + card.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete card ' + card.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(card.id)}
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

export default CardsList
