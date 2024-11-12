import server from './server'

server.listen(4000), () => {
    console.log('Rest api en el puerto 4000')
}

/*codigo json para usuario
{
  "name": "puta",
  "gmail": "gmail@gmial.com",
  "password": "estaconta",
  "confirmed": false
}
archivo json para los productos
{
  "title": "fruta",
  "description": "esta es una fruta",
  "url": "esta es una url",
  "precio": 16
  "confirmed": false
}
*/