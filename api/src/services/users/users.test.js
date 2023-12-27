import { users, user, createUser, updateUser, deleteUser } from './users'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('users', () => {
  scenario('returns all users', async (scenario) => {
    const result = await users()

    expect(result.length).toEqual(Object.keys(scenario.user).length)
  })

  scenario('returns a single user', async (scenario) => {
    const result = await user({ id: scenario.user.one.id })

    expect(result).toEqual(scenario.user.one)
  })

  scenario('creates a user', async () => {
    const result = await createUser({
      input: {
        email: 'String1595722',
        hashedPassword: 'String',
        salt: 'String',
        roles: 'String',
        updated_at: '2023-12-27T06:51:14.993Z',
      },
    })

    expect(result.email).toEqual('String1595722')
    expect(result.hashedPassword).toEqual('String')
    expect(result.salt).toEqual('String')
    expect(result.roles).toEqual('String')
    expect(result.updated_at).toEqual(new Date('2023-12-27T06:51:14.993Z'))
  })

  scenario('updates a user', async (scenario) => {
    const original = await user({ id: scenario.user.one.id })
    const result = await updateUser({
      id: original.id,
      input: { email: 'String93874822' },
    })

    expect(result.email).toEqual('String93874822')
  })

  scenario('deletes a user', async (scenario) => {
    const original = await deleteUser({ id: scenario.user.one.id })
    const result = await user({ id: original.id })

    expect(result).toEqual(null)
  })
})
