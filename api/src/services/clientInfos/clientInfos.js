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

function generateRandomString(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}
export const createClientInfo = ({ input }) => {
  const client = generateRandomString(7)
  input['client'] = client
  input['user'] = {
    create: {
      // provide necessary user information here
      // for example:
      hashedPassword: 'hashedPassword',
      salt: 'salt',
      roles:'dummy',
      email: client
      // ... other user fields
    }
  }

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
