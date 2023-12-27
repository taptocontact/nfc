import {
  clientInfos,
  clientInfo,
  createClientInfo,
  updateClientInfo,
  deleteClientInfo,
} from './clientInfos'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('clientInfos', () => {
  scenario('returns all clientInfos', async (scenario) => {
    const result = await clientInfos()

    expect(result.length).toEqual(Object.keys(scenario.clientInfo).length)
  })

  scenario('returns a single clientInfo', async (scenario) => {
    const result = await clientInfo({ id: scenario.clientInfo.one.id })

    expect(result).toEqual(scenario.clientInfo.one)
  })

  scenario('creates a clientInfo', async (scenario) => {
    const result = await createClientInfo({
      input: {
        client: 'String',
        details: { foo: 'bar' },
        updated_at: '2023-12-27T07:12:35.813Z',
        userId: scenario.clientInfo.two.userId,
      },
    })

    expect(result.client).toEqual('String')
    expect(result.details).toEqual({ foo: 'bar' })
    expect(result.updated_at).toEqual(new Date('2023-12-27T07:12:35.813Z'))
    expect(result.userId).toEqual(scenario.clientInfo.two.userId)
  })

  scenario('updates a clientInfo', async (scenario) => {
    const original = await clientInfo({
      id: scenario.clientInfo.one.id,
    })
    const result = await updateClientInfo({
      id: original.id,
      input: { client: 'String2' },
    })

    expect(result.client).toEqual('String2')
  })

  scenario('deletes a clientInfo', async (scenario) => {
    const original = await deleteClientInfo({
      id: scenario.clientInfo.one.id,
    })
    const result = await clientInfo({ id: original.id })

    expect(result).toEqual(null)
  })
})
