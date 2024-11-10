// se agregan middleware register para que interpreten los ts en este archivo js
require('ts-node/register')
require('tsconfig-paths/register')
const { default: sequelizeConfig } = require('./index')

module.exports = sequelizeConfig
