import { Optional } from 'sequelize'
import {
  Column,
  CreatedAt,
  DataType,
  Model,
  Table,
  UpdatedAt
} from 'sequelize-typescript'

interface PersonAttributes {
  id: number
  name: string
}

// interface PersonCreationAttributes extends Optional<PersonAttributes, 'id'> {
//   name: string
// }
type PersonCreationAttributes = Optional<PersonAttributes, 'id'>

@Table({
  timestamps: true,
  tableName: 'people',
  modelName: 'Person'
})
export default class Person extends Model<
  PersonAttributes,
  PersonCreationAttributes
> {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
  declare id: string

  @Column({
    type: DataType.STRING
  })
  declare name: string

  @CreatedAt
  declare createdAt?: Date

  @UpdatedAt
  declare updatedAt?: Date
}
