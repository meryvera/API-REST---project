/* CON CLASES */
require('dotenv').config();//4. (ex 2.a)
  // importamos el metodo config del modulo dotenv

const Server = require('./models/server'); //5. llamo a mi clase desde (server.js)
const server = new Server(); //5.a -e instancio del servidor (server.js)

server.listen();


/* SIN CLASES */
// require('dotenv').config(); //2.a
//   // importamos el metodo config del modulo dotenv

// /* initializing express */
// const express = require('express')
// const app = express()
 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
 
// app.listen(process.env.PORT, () => { //2.b 
//   console.log('servidor corriendo en puerto', process.env.PORT)
//   // Cambiamos de puerto físico en el dotenv .env
//   // app.listen(3000) --> xdefault
// })
// // 2. cambiaremos nuestro puerto en dotenv .env --> PORT=8080
// // 3. Cambiaremos todo el servidor a CLASES --> models/server.js
// 6. creamos carpeta pubic e index.html para FE si queremos
// 7. Creamos middelwares- qe son funciones que agregaran otra funcionalidad a mi web server
//  ... osea es 1 fn que siempre va a ejecutarse cuando levantemos nuestro servidor

// ------------

// 8. Crearemos 4 endpoints 1 para cada elemento del CRUD - Get, Post, Put, Delete, patch(video 102)
// 9. Creamos 1 respuesta  json a la ruta '/app' 02:00
// ------------
// 10.Setteo CORS como middleware en server.js
// 11.Separaremos las rutas y el acceso con autentic (si necesitara) 
//  ...y el controlador de la clase a dichas rutas en archivos independientes de acuerdo a su fn q cumplira cda ruta(clase 106)
    // cortaremos las rutas del router y lo mandamos a usuarios.js en routes
// 12. cuando no sabemos mapear bien donde estan las rutas, entonces lo mapeamos al inicio:
// 13. EL route solo debe tener las rutas y tmb la proteccion de ellas 6:30 - clase 106
    // pero todo su controlador debe estar en un archivo independientepara controlar dicha funcion, entonces:
    // Creo archivos dentro de controller donde separar{e a lso controlodares de las rutas
// 14. Obteniendo datos de POST
    // usualmente con post, put, inclusive delete podemos mandar 1 body en la peticion, get no recibe esa info del body
    // en postman cambiamos el body de la peticion a raw y la opcion JSON xqe normalmente ese el formtato en q se comunican FE y BE
// 15. Parámetros de segmento) - modificamos 1 obejto en especifico con PUT. 
    //Poonemos en la url un numero cualquiera como param  
// 16. query params (?=&)(108-4:20) - modificamos 1 obejto en especifico con GET 
    //Ponemos en la url los querys localhost:8080/api/usuarios/?q=hola&nombre=fernando&apikey=123
// 17. respaldo del rest server en github - 109
    // 17.a creamos .gitignore y ponemos los node_modules/
    // 17.b luego subimos git commit
    // 17.c creamos tag
    // 17.d se hace release
// 18. subir el rest server a heroku
    //instalo CLI desde web herku con mi mail mery...
    // heroku git:remote -a api-rest-yrem  -> en bash
    // seteo en package json