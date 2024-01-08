import { db } from 'src/lib/db'

export const cards = () => {
  return db.card.findMany()
}

export const card = ({ id }) => {
  return db.card.findUnique({
    where: { id },
  })
}

export const createCard = ({ input }) => {
  return db.card.create({
    data: input,
  })
}

export const updateCard = ({ id, input }) => {
  return db.card.update({
    data: input,
    where: { id },
  })
}

export const deleteCard = ({ id }) => {
  return db.card.delete({
    where: { id },
  })
}
