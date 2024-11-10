import config from '@/global.config'
import path from 'path'
import { SequelizeOptions } from 'sequelize-typescript'

export interface SequelizeConfig
  extends Omit<SequelizeOptions, 'database' | 'username'> {
  database: string
  username: string
}

const modelsPath = path.resolve(__dirname, '../models')
const sequelizeConfig: SequelizeConfig = {
  // export default {
  username: config.db.username,
  password: config.db.password,
  port: config.db.port,
  database: config.db.database,
  host: config.db.host,
  logging: config.db.enableLog && console.log,
  dialect: 'mysql',
  dialectOptions: {
    dateStrings: true,
    typeCast: true
  },
  pool: {
    max: 50,
    min: 0,
    acquire: 60000,
    idle: 10000
  },
  timezone: '-05:00',
  models: [modelsPath]
}

export default sequelizeConfig
