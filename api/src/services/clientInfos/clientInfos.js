import { db } from 'src/lib/db'

export const clientInfos = () => {
  return db.clientInfo.findMany()
}

export const clientInfo = ({ id }) => {
  return db.clientInfo.findUnique({
    where: { id },
  })
}
export const clientInfoClientId = ({ client }) => {
  return db.clientInfo.findUnique({
    where: { client },
  })
}

export const createClientInfo = ({ input }) => {
  return db.clientInfo.create({
    data: input,
  })
}

export const updateClientInfo = ({ id, input }) => {
  return db.clientInfo.update({
    data: input,
    where: { id },
  })
}

export const deleteClientInfo = ({ id }) => {
  return db.clientInfo.delete({
    where: { id },
  })
}

export const ClientInfo = {
  user: (_obj, { root }) => {
    return db.clientInfo.findUnique({ where: { id: root?.id } }).user()
  },
}
