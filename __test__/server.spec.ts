import type appServer from '@/server'
import request from 'supertest'

describe('Express app', () => {
  let server: typeof appServer
  beforeEach(
    () =>
      new Promise((done, reject) => {
        vitest.doMock('@/database/sequelize', () => ({
          default: { authenticate: () => true }
        }))
        vitest.doMock('@/database/models/Person', () => ({
          default: {
            create: ({ name }: { name: string }) => Promise.resolve({ name })
          }
        }))

        import(`@/server?${Date.now()}`)
          .then(({ default: appServer }) => {
            server = appServer
            done()
          })
          .catch(reject)
      })
  )

  afterEach(
    () =>
      new Promise((done) => {
        server?.close(() => done())
      })
  )

  afterAll(() => {
    vitest.clearAllMocks()
  })

  it('should return "Hello World" on GET /', async () => {
    const response = await request(server).get('/').expect(200)
    expect(response.status).toBe(200)
    expect(response.text).toBe('Hello World 2')
  })

  it('should return a person on POST /', async () => {
    const response = await request(server)
      .post('/')
      .send({ name: 'test' })
      .expect(200)
    expect(response.status).toEqual(200)
    expect(response.body.name).toEqual('test')
  })
  /*   it('should return "Hello World" on GET /', async () => {
    app.emit('error', new Error('test'))
  }) */

  /* it('should handle server startup errors', () => {
    server.close(() => {
      import(`@/server?${Date.now()}`)
        .then(({ default: appServer }) => {
          appServer.emit('error', new Error('Simulated startup error2'))
        })
        .catch((error) => {
          expect((error as Error).message).toBe('Simulated startup error3')
        })
    })
  }) */
})
