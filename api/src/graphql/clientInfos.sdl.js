export const schema = gql`
  type ClientInfo {
    id: Int!
    client: String!
    user: User!
    details: JSON!
    created_at: DateTime!
    updated_at: DateTime!
    extra: JSON
    userId: Int!
  }

  type Query {
    clientInfos: [ClientInfo!]! @requireAuth
    clientInfo(id: Int!): ClientInfo @requireAuth
    clientInfoClientId(client: String!):  ClientInfo @skipAuth
  }

  input CreateClientInfoInput {
    client: String!
    details: JSON!
    extra: JSON
    userId: Int!
  }

  input UpdateClientInfoInput {
    client: String
    details: JSON
    extra: JSON
    userId: Int
  }

  type Mutation {
    createClientInfo(input: CreateClientInfoInput!): ClientInfo! @requireAuth
    updateClientInfo(id: Int!, input: UpdateClientInfoInput!): ClientInfo!
      @requireAuth
    deleteClientInfo(id: Int!): ClientInfo! @requireAuth
  }
`
