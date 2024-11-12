import { Router } from "express";
import {body, param} from 'express-validator'
import { createProduct, deleteProduct, getProducts, getProductsId, updateProductPatch, updateProductPut } from "../handlers/product";
import { handleImputErrors } from '../middleware/index'
const routerProducts = Router()

// Routing req == request, es para lo que tu envias(formularios, una api key a otras mas cosas)
//res == response, es la respuesta a lo que envias el requiest abajo un ejemplo una apgina una nda virtual la consulta es la base de datos  

routerProducts.get('/', getProducts )
//router para obtener por medio de su id
routerProducts.get('/:id',
    param('id').isInt().withMessage('ID no valido'),
    handleImputErrors,
    getProductsId 
)

routerProducts.post('/', 
    
    //validacion para que los formulariosnos se por ejemplo gmail, contraseña, etx
    body('title').notEmpty().withMessage('No puede ir vacío'),
    body('description').notEmpty().withMessage('No puede ir vacío'),
    body('url').isURL().withMessage('Debe ser una URL válida de la imagen'),
    body('precio')
            .notEmpty().withMessage('Debes colocar el precio del producto')
            .isFloat({ gt: 0 }).withMessage('El precio debe ser un número mayor a cero'),
    
    handleImputErrors,
    createProduct)
//put actualiza todo la lista
routerProducts.put('/:id',
    updateProductPut
)

//patch actualiza parte del contenido
routerProducts.patch('/:id', updateProductPatch)



routerProducts.delete('/:id', deleteProduct)

export default routerProducts
