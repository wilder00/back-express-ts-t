import type appServer from '@/server'
import request from 'supertest'

describe('Express app', () => {
  let server: typeof appServer
  beforeEach(
    () =>
      new Promise((done, reject) => {
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
        server.close(() => done())
      })
  )

  it('should return "Hello World" on GET /', async () => {
    const response = await request(server).get('/').expect(200)
    expect(response.status).toBe(200)
    expect(response.text).toBe('Hello World 2')
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
