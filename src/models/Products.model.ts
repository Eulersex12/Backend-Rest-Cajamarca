import { Table, Column, Model, DataType, Default } from 'sequelize-typescript'

@Table({
    tableName: 'products',
    timestamps: true
})

class Products extends Model {
    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    declare title: string

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    declare description: string
    

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    declare url: string

    @Column({
        type: DataType.DECIMAL(10,2),
        allowNull: false
    })
    declare precio: number
    
    @Default(true)
    @Column({
        type: DataType.BOOLEAN()
    })
    declare confirmed: boolean
}

export default Products