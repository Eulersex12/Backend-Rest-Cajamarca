import { Table, Column, Model, DataType, Default } from 'sequelize-typescript'

@Table({
    tableName: 'users',
    timestamps: true
})

class User extends Model {
    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    declare name: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        unique: true,
        set(value: string) {
            // Elimina espacios adicionales y convierte a minúsculas
            this.setDataValue('gmail', value.trim().toLowerCase())
        }
    })
    declare gmail: string

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    declare password: string
    
    @Default(true)
    @Column({
        type: DataType.BOOLEAN()
    })
    declare confirmed: boolean
}
/* modelos de usuarios
  
"name": " "
"gmail": " "
"pasworld": " "
"confirmed": " "
*/
export default User


//default sirvepara datos no exactos, por ejemplo en una tienda un usuario hace un pedido 
//puede estar en no enviado y ya pago o algo se envia automatico
//id la  te lo da automaticamente cada ves que generas un registro, aqui se crean las tablas para la based de datos
//en los modelos  creas las columnas, especificas con el tipo.tipo de dato y lo que es string, boleano, numero, precios: lo que seria
//type: DataType.FLOAT(10,2) donde 10=al numero ejempo s/.2020.30 10 es el numero maximo del precio y dos son los decimales que se sigue etc
