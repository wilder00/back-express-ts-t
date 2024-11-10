'use strict'
/** @type {import('sequelize-cli').Migration} */
import { QueryInterface } from 'sequelize'
import ImportedSequelize from 'sequelize/types/index'

module.exports = {
  async up(
    queryInterface: QueryInterface,
    Sequelize: typeof ImportedSequelize
  ) {
    await queryInterface.createTable('People', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    })
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('People')
  }
}
