export const schema = gql`
  type Card {
    id: Int!
    name: String!
    color: String!
    price: Int!
    imageUrl: String!
    type: String!
    created_at: DateTime!
    updated_at: DateTime!
    extra: JSON
  }

  type Query {
    cards: [Card!]! @skipAuth
    card(id: Int!): Card @skipAuth
  }

  input CreateCardInput {
    name: String!
    color: String!
    price: Int!
    imageUrl: String!
    type: String!
    extra: JSON
  }

  input UpdateCardInput {
    name: String
    color: String
    price: Int
    imageUrl: String
    type: String
    extra: JSON
  }

  type Mutation {
    createCard(input: CreateCardInput!): Card! @requireAuth
    updateCard(id: Int!, input: UpdateCardInput!): Card! @requireAuth
    deleteCard(id: Int!): Card! @requireAuth
  }
`
