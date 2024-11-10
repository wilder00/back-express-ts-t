'use strict'
import { randomUUID } from 'crypto'
import { QueryInterface } from 'sequelize'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(
      'People',
      [
        {
          id: randomUUID(),
          name: 'John Doe'
        },
        {
          id: randomUUID(),
          name: 'Rimero Smith'
        },
        {
          id: randomUUID(),
          name: 'Sandra Peterson'
        }
      ],
      {}
    )
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('People', {}, {})
  }
}
