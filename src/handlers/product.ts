import { Request, Response } from "express"
import Products from '../models/Products.model'

export const getProducts = async (req : Request, res : Response): Promise<void> => {

  try {
    //tanbien puedes limitar la  obtencion de cuntos va a traer usando "limit: `valor de los qeu quieras`"
    // "Exclude" sirve para exxcluir lo que vas a obtener de tu base de datos
    const product = await Products.findAll({

      attributes: {exclude: ['createdAt', 'updatedAt', 'confirmed']}
    })
    res.json({ data: product })
  } catch (error) {
    console.log('Error al obtener datos del producto')
  }
}
// codigo para obtener a los productos por medio de si id
export const getProductsId = async (req : Request, res : Response): Promise<void> => {
  try {
      //findByPk todos con la primera llave, llave es la id= que 
      //obtienes del req.params que a la ves lo obtirnes al buscar por su id
      const { id } = req.params 
      const product = await Products.findByPk(id)
      if(!product) {
        res.status(404).json({
          error: 'Producto no encotrado'
        })
      }
      res.json({ data: product })

      
  } catch (error) {
    console.log('Error al obtener datos del producto')
  }
}

export const createProduct = async (req : Request, res : Response): Promise<void> => {

      try {
        const product = await Products.create(req.body);
        res.json({ data: product });
        
        } catch (error) {
        res.status(500).json({ error: "Error creating user" });
        }
}

// edita los productos
export const updateProductPut = async (req : Request, res : Response): Promise<void> => {
  const { id } = req.params 
      const product = await Products.findByPk(id)
      if(!product) {
        res.status(404).json({
          error: 'Producto no encotrado'
        })
      }
  //actualizar
  await product.update(req.body)   
  await product.save()

  res.json({ data: product });
}

export const updateProductPatch = async (req : Request, res : Response): Promise<void> => {
  const { id } = req.params 
      const product = await Products.findByPk(id)
      if(!product) {
        res.status(404).json({
          error: 'Producto no encotrado'
        })
      }
  //actualizar, el boleano, de el stok por ejemplo 5 naranjas, 
  //cuando llega a falso se pasa a falso o true

  product.confirmed = !product.dataValues.confirmed 
  await product.save()

  res.json({ data: product });
}

export const deleteProduct = async (req : Request, res : Response): Promise<void> => {
  const { id } = req.params 
      const product = await Products.findByPk(id)
      if(!product) {
        res.status(404).json({
          error: 'Producto no encotrado'
        })
      }
      await product.destroy()
      res.json({data: 'Producto Eliminado'})

}
