import { Router } from "express";
import {body} from 'express-validator'
import { createUser, getUsers } from "../handlers/users"
import { handleImputErrors } from '../middleware/index'
const router = Router()

// Routing req == request, es para lo que tu envias(formularios, una api key a otras mas cosas)
//res == response, es la respuesta a lo que envias el requiest abajo un ejemplo una apgina una nda virtual la consulta es la base de datos  

router.get('/', 
    getUsers
)


router.post('/', 
    
    //validacion para que los formulariosnos se por ejemplo gmail, contraseña, etx
    body('name').notEmpty().withMessage('No Puede ir vacio'),
    body('gmail').notEmpty().withMessage('No Puede ir vacio'),
    body('password').notEmpty().withMessage('Coloca tu correo'),
    handleImputErrors,
    createUser
)

router.put('/', (req, res) => {
    res.send('hola mundo en Put')
})
router.patch('/', (req, res) => {
    res.send('hola mundo en path')
})
router.delete('/', (req, res) => {
    res.send('hola mundo en delete')
})

export default router