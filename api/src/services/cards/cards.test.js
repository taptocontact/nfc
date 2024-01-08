import { cards, card, createCard, updateCard, deleteCard } from './cards'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('cards', () => {
  scenario('returns all cards', async (scenario) => {
    const result = await cards()

    expect(result.length).toEqual(Object.keys(scenario.card).length)
  })

  scenario('returns a single card', async (scenario) => {
    const result = await card({ id: scenario.card.one.id })

    expect(result).toEqual(scenario.card.one)
  })

  scenario('creates a card', async () => {
    const result = await createCard({
      input: {
        name: 'String',
        color: 'String',
        price: 9593049,
        imageUrl: 'String',
        type: 'String',
        updated_at: '2024-01-08T09:32:54.199Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.color).toEqual('String')
    expect(result.price).toEqual(9593049)
    expect(result.imageUrl).toEqual('String')
    expect(result.type).toEqual('String')
    expect(result.updated_at).toEqual(new Date('2024-01-08T09:32:54.199Z'))
  })

  scenario('updates a card', async (scenario) => {
    const original = await card({ id: scenario.card.one.id })
    const result = await updateCard({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a card', async (scenario) => {
    const original = await deleteCard({ id: scenario.card.one.id })
    const result = await card({ id: original.id })

    expect(result).toEqual(null)
  })
})
