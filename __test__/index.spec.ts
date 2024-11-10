describe('Express app', () => {
  afterAll(() => {
    vitest.clearAllMocks()
  })
  it('should import and run without error', () =>
    new Promise((done, reject) => {
      vitest.doMock('@/database/sequelize', () => ({
        default: { authenticate: () => true }
      }))
      import('@/index').then(() => done(true)).catch(reject)
    }))
})
