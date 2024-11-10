import { Sequelize } from 'sequelize-typescript'
import sequelizeConfig from './config'

/* const DB_DATABASE = config.db.database
const DB_USERNAME = config.db.username
const DB_PASSWORD = config.db.password
const DB_HOST = config.db.host
const DB_PORT = config.db.port
const DB_ENABLE_LOG = config.db.enableLog

const options: SequelizeOptions = {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
  logging: DB_ENABLE_LOG,
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
  models: [__dirname + '/src/database/models']
} */

const dbConnection = new Sequelize({
  ...sequelizeConfig
  //models: ['./src/database/models']
})

/* dbConnection.addModels([__dirname + '/src/database/models'])
dbConnection.addModels(['./src/database/models']) */
export default dbConnection
