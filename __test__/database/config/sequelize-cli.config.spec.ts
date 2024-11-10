import sequelizeConfig from '@/database/config'
import configToTest from '@/database/config/sequelize-cli.config.js'

vitest.mock('ts-node/register', () => ({
  default: true
}))
vitest.mock('tsconfig-paths/register', () => ({
  default: true
}))

describe('Sequelize config options', () => {
  let seqConfig: typeof sequelizeConfig
  beforeEach(
    () =>
      new Promise((done) => {
        import(`@/database/config/sequelize-cli.config.js`).then(
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

  it('should correctly map the config to sequelizeConfig', () => {
    expect(configToTest).toBeDefined()
    expect(seqConfig).toBeDefined()
  })
})
