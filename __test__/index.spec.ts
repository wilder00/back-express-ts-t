describe('Express app', () => {
  it('should import and run without error', () =>
    new Promise((done, reject) => {
      import('@/index').then(done).catch(reject)
    }))
})
