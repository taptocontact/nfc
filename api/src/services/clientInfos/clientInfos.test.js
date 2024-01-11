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

  scenario('creates a clientInfo', async () => {
    const result = await createClientInfo({
      input: {
        client: 'String4502045',
        details: { foo: 'bar' },
        updated_at: '2024-01-11T06:45:40.425Z',
        status: 'String',
      },
    })

    expect(result.client).toEqual('String4502045')
    expect(result.details).toEqual({ foo: 'bar' })
    expect(result.updated_at).toEqual(new Date('2024-01-11T06:45:40.425Z'))
    expect(result.status).toEqual('String')
  })

  scenario('updates a clientInfo', async (scenario) => {
    const original = await clientInfo({
      id: scenario.clientInfo.one.id,
    })
    const result = await updateClientInfo({
      id: original.id,
      input: { client: 'String86406892' },
    })

    expect(result.client).toEqual('String86406892')
  })

  scenario('deletes a clientInfo', async (scenario) => {
    const original = await deleteClientInfo({
      id: scenario.clientInfo.one.id,
    })
    const result = await clientInfo({ id: original.id })

    expect(result).toEqual(null)
  })
})
