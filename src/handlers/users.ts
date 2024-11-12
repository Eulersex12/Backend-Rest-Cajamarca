import { Request, Response } from "express"
import User from '../models/Usuarios.model'

//codigo para obtener loos usuarios 
export const getUsers = async (req : Request, res : Response): Promise<void> => {
  
  try {
    // siempre para encontrar/ obtener datos utiliza la func "find" all = todos
    // findAll({order:[ [ aqui el valor que deseas buscar por orden : aqui si quieres en asendente o desendentes ] ]})
    //lo que tenemos sirve para ecomerce; en los usuarios no creo que sirva
    const user = await User.findAll({
      attributes: {exclude: ['createdAt', 'updatedAt', 'confirmed', 'password']}
    })
    res.json({ data: user})

  } catch (error) {

    console.log('error al obtener usuarios')

  }
}


export const createUser = async (req : Request, res : Response): Promise<void> => {

      //codigo de vhtgp
      try {
        const user = await User.create(req.body);
        res.json({ data: user });
        
        } catch (error) {
        res.status(500).json({ error: "Error creating user" });
        }
    //const user = await User.create(req.body)
    //res.json({ data: user })
}