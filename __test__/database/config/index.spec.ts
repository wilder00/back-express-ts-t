import sequelizeConfig from '@/database/config'
import path from 'path'

vitest.doMock('@/global.config', () => ({
  default: {
    db: {
      host: 'localhost',
      port: 3306,
      username: 'test_user',
      password: 'test_password',
      database: 'test_db',
      enableLog: true
    }
  }
}))

describe('Sequelize config options', () => {
  let seqConfig: typeof sequelizeConfig
  beforeEach(
    () =>
      new Promise((done) => {
        import(`@/database/config?${Date.now()}`).then(
          ({ default: config }) => {
            seqConfig = config
            done()
          }
        )
      })
  )

  afterAll(() => {
    vitest.clearAllMocks()
  })

  it('should correctly resolve the models path', () => {
    const expectedPath = path.resolve('src/database', 'models')
    expect(seqConfig.models?.[0]).toBe(expectedPath)
  })

  it('should correctly map the config to sequelizeConfig', () => {
    expect(seqConfig.username).toBe('test_user')
    expect(seqConfig.password).toBe('test_password')
    expect(seqConfig.database).toBe('test_db')
    expect(seqConfig.host).toBe('localhost')
    expect(seqConfig.port).toBe(3306)
    expect(seqConfig.logging).toBe(console.log)
    expect(seqConfig.dialect).toBe('mysql')
    expect(seqConfig.pool).toEqual({
      max: 50,
      min: 0,
      acquire: 60000,
      idle: 10000
    })
    expect(seqConfig.timezone).toBe('-05:00')
  })

  it('should resolve models path correctly', () => {
    const expectedPath = path.resolve(__dirname, '../../../src/database/models')
    expect(sequelizeConfig.models).toContain(expectedPath)
  })

  it('should have correct database configuration', () => {
    expect(sequelizeConfig.dialect).toBe('mysql')
  })
})
