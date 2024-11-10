import { getValueIfTruthy } from '@/utils/nullish'
import dotenv from 'dotenv'
dotenv.config()

export interface GlobalConfig {
  server: {
    port: number
  }
  db: {
    host: string
    port: number
    username: string
    password: string
    database: string
    enableLog: boolean
  }
}

const config: GlobalConfig = {
  server: {
    port: getValueIfTruthy(Number(process.env.PORT || ''), 3000)
  },
  db: {
    host: getValueIfTruthy(process.env.DB_HOST, 'localhost'),
    port: getValueIfTruthy(Number(process.env.DB_PORT || ''), 3306),
    username: getValueIfTruthy(process.env.DB_USERNAME, ''),
    password: getValueIfTruthy(process.env.DB_PASSWORD, ''),
    database: getValueIfTruthy(process.env.DB_NAME, ''),
    enableLog: process.env.DB_ENABLE_LOG === 'true'
  }
}
export default config
