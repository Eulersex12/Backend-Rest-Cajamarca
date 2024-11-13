import express from "express";
import colors from "colors";
import cors from "cors"
import morgan from 'morgan'
import router from "./router/routerUser";
import routerProducts from "./router/routerProducts";

import db from "./config/db";
import { CorsOptions } from "cors";

// conectar la base de datos con una funcion
// se usan las opciones try catch para revisar si se realizo corectamente la conecion
async function conectDB () {
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.bgCyan.bold('Conexion exitosa a la DB'))
    }catch (error) {
        console.log(error)
        console.log(colors.bgRed.white('Hubo un error'))
    }
}

conectDB()
//instancia de expres
const server = express()
//Permitir conexiones hacia url exterior
const corsOptions : CorsOptions = {
    origin : function (origin , callback) {
        if (!origin || origin === process.env.FRONTEND_URL) {
            callback(null, true)
        } else {
            callback(new Error('Error de conexion')
            )
        }
    }
}
server.use(cors(corsOptions))
// aqui codigo para atraer datos de formularios, prueva tecnica usando tunder clien
server.use(express.json())
server.use(morgan('dev', {
    stream: {
        write: (message) => console.log(colors.bgBlue.white(message.trim())),
      },
}))
server.use('/user', router)
server.use('/products', routerProducts)


export default server