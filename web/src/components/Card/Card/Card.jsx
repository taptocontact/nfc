import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { jsonDisplay, timeTag } from 'src/lib/formatters'

const DELETE_CARD_MUTATION = gql`
  mutation DeleteCardMutation($id: Int!) {
    deleteCard(id: $id) {
      id
    }
  }
`

const Card = ({ card }) => {
  const [deleteCard] = useMutation(DELETE_CARD_MUTATION, {
    onCompleted: () => {
      toast.success('Card deleted')
      navigate(routes.cards())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete card ' + id + '?')) {
      deleteCard({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Card {card.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{card.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{card.name}</td>
            </tr>
            <tr>
              <th>Color</th>
              <td>{card.color}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{card.price}</td>
            </tr>
            <tr>
              <th>Image url</th>
              <td>{card.imageUrl}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{card.type}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(card.created_at)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(card.updated_at)}</td>
            </tr>
            <tr>
              <th>Extra</th>
              <td>{jsonDisplay(card.extra)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCard({ id: card.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(card.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Card
