const express = require('express'); //3.b - requerimos express (L1 app.js)
var cors = require('cors'); // 10.a
const { dbConnection } = require('../database/config'); //31

class Server {// 3.a - abrimos class
  constructor(){
    //const app = express() //this sirve para acceso al app o al port, etc
    this.app = express() // 3.c - inicializams express en app, como instacia, como 1 propiedad en la misma class Server(L6 app.js)
    this.port = process.env.PORT // 3.h asignamos 1 vr al puerto
      // y lo subimos aca para que sea visible pa todo el mundo

    this.usuariosPath = '/api/usuarios'; // 12.a endpoint de usuarios

    /* CONECTAR A BASE DE DATOS */
    this.conectarDB();
    
    /* MIDDLEWARES */ 
    this.middlewares(); // 7.b

    /* RUTAS DE LA APLICACIÓN */
    this.routes(); // 3.f - LLAMO A MIS RUTAS DECLARADAS
  }

  /* MÉTODOS DE MI APLICACIÓN */
  async conectarDB(){ //31.
    await dbConnection();
  }


  middlewares(){ // 7.
    /* CORS */ //10.
    this.app.use( cors() ); // 10.b
      // x el lado del BE, no hay diferencia en poner esto o no, pero para FE si les va a dar errores de CORS
    
    /* LECTURA Y PARSEO DEL BODY */ //14.a
    this.app.use(express.json())
      //con esto seteamos que el formato de comunicacion entre FE y BE sera JSON

    /* DIRECTORIO PÚBLICO */ //7.
      // estos middlewares podemos ponerlos separado o dentro mismod e las rutas
      // hasta ahora haremos uno para la carpeta pública    
      this.app.use( express.static('public') ) //7.a
      // accedemos al app, y use (es kw para decir q esto es 1 middleware), 
      // y usamos express, la carpeta estática y publicar en la carpeta 'public'
      // este public se renderiza en la ruta principal , osea '/', por lo que la funcion 
      // routes() con ruta '/' ya no funciona más xque ya fue tomada, tendria que cambiar de ruta por (/api) x ejemplo

  }

  routes(){ //3.d- creo mi metodo routes
    // this.app.get('/api', (req, res) => { // 3.e - (L20 app.js)
    //     //res.send('Hello World')//en postman y thhunder esto me dice que es tipo text/html; charset=utf-8, pero yo quiero en json...
    //     res/* .status(403) */.json({ //9.a, si l metodo de autenticacion sta mal, o si falto token, etc ntonces aumento: .status(403) para saber l error
    //       ok: true,
    //       msg:'get API'
    //     })
    // })

    // this.app.put('/api', (req, res) => { // 3.e - (L8 app.js)
    //   //res.send('Hello World')//en postman y thhunder esto me dice que es tipo text/html; charset=utf-8, pero yo quiero en json...
    //   res.json({ //9.a, si l metodo de autenticacion sta mal, o si falto token, etc ntonces aumento: .status(403) para saber l error
    //     ok: true,
    //     msg:'put API'
    //   })
    // })

    // this.app.post('/api', (req, res) => { // 3.e - (L8 app.js)
    //   //res.send('Hello World')//en postman y thhunder esto me dice que es tipo text/html; charset=utf-8, pero yo quiero en json...
    //   res.json({ //9.a, si l metodo de autenticacion sta mal, o si falto token, etc ntonces aumento: .status(403) para saber l error
    //     ok: true,
    //     msg:'post API'
    //   })
    // })

    // this.app.delete('/api', (req, res) => { // 3.e - (L8 app.js)
    //   //res.send('Hello World')//en postman y thhunder esto me dice que es tipo text/html; charset=utf-8, pero yo quiero en json...
    //   res.json({ //9.a, si l metodo de autenticacion sta mal, o si falto token, etc ntonces aumento: .status(403) para saber l error
    //     ok: true,
    //     msg:'delete API'
    //   })
    // })

    this.app.use(this.usuariosPath, require('../routes/usuarios')) //12.b
      // 12.b reemplazo '/api/usuarios' x this.usuariosPath xqe ya lo setie en 12.a
    
      //this.app.use('/api/usuarios', require('../routes/usuarios')) // 11.c
      //llamo a las rutas que separé en usuarios.js
  }
  listen(){ //3.g- creo mi metodo listen
    this.app.listen(this.port, () => { // 3.i (L12 app.js)
      //este process.env.PORT no deberia estar acá xqe alguien podría no saber donde está el PORT
      //así que lo hago visible a todo el mundo
      console.log('servidor corriendo en puerto', this.port)
    })
  }
}

module.exports = Server;

// General:
// Se reemplaza app.'algo...' (sin clases) por --> this.app.'algo...' (con clases)
