describe('Global config options', () => {
  beforeEach(() => {
    vi.resetModules()
    vitest.mock('dotenv', () => ({
      default: {
        config: () => {
          console.log('should set the dotenv ')
        }
      }
    }))
  })
  afterEach(() => {
    vi.unstubAllEnvs()
  })
  afterAll(() => {
    vi.unstubAllEnvs()
  })

  it('should import and run without error', async () => {
    const module = await import('@/global.config')
    expect(module.default).toBeDefined()
  })

  it('should render default values', async () => {
    vi.stubEnv('PORT', '5555')
    vi.stubEnv('DB_PORT', '2023')
    vi.stubEnv('DB_USERNAME', 'db_username_test')
    vi.stubEnv('DB_PASSWORD', 'db_password_test')
    vi.stubEnv('DB_NAME', 'db_name_test')

    const module = await import('@/global.config')
    const config = module.default

    expect(config.server.port).toBe(5555)
    expect(config.db.port).toBe(2023)
    expect(config.db.username).toBe('db_username_test')
    expect(config.db.password).toBe('db_password_test')
    expect(config.db.database).toBe('db_name_test')
  })

  it('should use default values if environment variables are not set', async () => {
    vi.stubEnv('PORT', '')
    vi.stubEnv('DB_HOST', '')
    vi.stubEnv('DB_PORT', '')
    vi.stubEnv('DB_USERNAME', '')
    vi.stubEnv('DB_PASSWORD', '')
    vi.stubEnv('DB_NAME', '')
    vi.stubEnv('DB_ENABLE_LOG', '')

    expect(process.env.PORT).toBe('')
    expect(process.env.DB_HOST).toBe('')
    expect(process.env.DB_PORT).toBe('')
    expect(process.env.DB_USERNAME).toBe('')
    expect(process.env.DB_PASSWORD).toBe('')
    expect(process.env.DB_NAME).toBe('')
    expect(process.env.DB_ENABLE_LOG).toBe('')

    delete process.env.PORT
    delete process.env.DB_HOST
    delete process.env.DB_PORT
    delete process.env.DB_USERNAME
    delete process.env.DB_PASSWORD
    delete process.env.DB_NAME
    delete process.env.DB_ENABLE_LOG

    const module = await import('@/global.config')
    const defaultConfig = module.default
    console.log('defaultConfig', defaultConfig)

    expect(defaultConfig.server.port).toBe(3000)
    expect(defaultConfig.db.host).toBe('localhost')
    expect(defaultConfig.db.port).toBe(3306)
    expect(defaultConfig.db.username).toBe('')
    expect(defaultConfig.db.password).toBe('')
    expect(defaultConfig.db.database).toBe('')
    expect(defaultConfig.db.enableLog).toBe(false)
  })

  it('should use environment variable values if set', async () => {
    vi.stubEnv('PORT', '5000')
    vi.stubEnv('DB_HOST', '127.0.0.1')
    vi.stubEnv('DB_PORT', '5432')
    vi.stubEnv('DB_USERNAME', 'admin')
    vi.stubEnv('DB_PASSWORD', 'secret')
    vi.stubEnv('DB_NAME', 'testdb')
    vi.stubEnv('DB_ENABLE_LOG', 'true')

    const module = await import('@/global.config')
    const envConfig = module.default

    expect(envConfig.server.port).toBe(5000)
    expect(envConfig.db.host).toBe('127.0.0.1')
    expect(envConfig.db.port).toBe(5432)
    expect(envConfig.db.username).toBe('admin')
    expect(envConfig.db.password).toBe('secret')
    expect(envConfig.db.database).toBe('testdb')
    expect(envConfig.db.enableLog).toBe(true)
  })

  it('should handle falsy values correctly', async () => {
    vi.stubEnv('PORT', '0')
    vi.stubEnv('DB_ENABLE_LOG', 'false')

    const module = await import('@/global.config')
    const falsyConfig = module.default

    expect(falsyConfig.server.port).toBe(3000) // Should use the default because '0' is falsy
    expect(falsyConfig.db.enableLog).toBe(false) // Should be false because 'false' !== 'true'
  })

  it('should handle non-boolean string for DB_ENABLE_LOG', async () => {
    vi.stubEnv('DB_ENABLE_LOG', 'someRandomValue')

    const module = await import('@/global.config')
    const logConfig = module.default

    expect(logConfig.db.enableLog).toBe(false) // Because 'someRandomValue' !== 'true'
  })

  it('should handle non-number string for PORT', async () => {
    vi.stubEnv('PORT', 'someRandomValue')

    const module = await import('@/global.config')
    const portConfig = module.default

    expect(portConfig.server.port).toBe(3000) // Because 'someRandomValue' is not a number
  })

  it('should render default values', async () => {
    vi.stubEnv('PORT', '5555')
    vi.stubEnv('DB_HOST', 'test_host')
    vi.stubEnv('DB_PORT', '1234')
    vi.stubEnv('DB_USERNAME', 'test_user')
    vi.stubEnv('DB_PASSWORD', 'test_pass')
    vi.stubEnv('DB_NAME', 'test_db')
    vi.stubEnv('DB_ENABLE_LOG', 'true')

    const module = await import('@/global.config')
    const config = module.default

    expect(config.server.port).toBe(5555)
    expect(config.db.host).toBe('test_host')
    expect(config.db.port).toBe(1234)
    expect(config.db.username).toBe('test_user')
    expect(config.db.password).toBe('test_pass')
    expect(config.db.database).toBe('test_db')
    expect(config.db.enableLog).toBe(true)
  })
})
