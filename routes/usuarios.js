/* TRAEMOS LAS RUTAS DEL SERVER */ //11.
const { Router } = require('express'); //11.a
  //destructuro a express y me traigo su metodo Router
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');
const router = Router(); //11.b le asigno 1 vr a la fn Router()

  //11.d - borramos api del /, xqe en server.js ya pusimos '/api/usuarios'

// router.get('/', (req, res) => { // 3.e - (L8 app.js)
//   //res.send('Hello World')//en postman y thhunder esto me dice que es tipo text/html; charset=utf-8, pero yo quiero en json...
//   res/* .status(403) */.json({ //9.a, si l metodo de autenticacion sta mal, o si falto token, etc ntonces aumento: .status(403) para saber l error
//     ok: true,
//     msg:'get API'
//   })
// })

// router.put('/', (req, res) => { // 3.e - (L8 app.js)
//   //res.send('Hello World')//en postman y thhunder esto me dice que es tipo text/html; charset=utf-8, pero yo quiero en json...
//   res.json({ //9.a, si l metodo de autenticacion sta mal, o si falto token, etc ntonces aumento: .status(403) para saber l error
//     ok: true,
//     msg:'put API'
//   })
// })

// router.post('/', (req, res) => { // 3.e - (L8 app.js)
//   //res.send('Hello World')//en postman y thhunder esto me dice que es tipo text/html; charset=utf-8, pero yo quiero en json...
//   res.json({ //9.a, si l metodo de autenticacion sta mal, o si falto token, etc ntonces aumento: .status(403) para saber l error
//     ok: true,
//     msg:'post API'
//   })
// })

// router.delete('/', (req, res) => { // 3.e - (L8 app.js)
//   //res.send('Hello World')//en postman y thhunder esto me dice que es tipo text/html; charset=utf-8, pero yo quiero en json...
//   res.json({ //9.a, si l metodo de autenticacion sta mal, o si falto token, etc ntonces aumento: .status(403) para saber l error
//     ok: true,
//     msg:'delete API'
//   })
// })

// router.patch('/', (req, res) => { // 3.e - (L8 app.js)
//   //res.send('Hello World')//en postman y thhunder esto me dice que es tipo text/html; charset=utf-8, pero yo quiero en json...
//   res.json({ //9.a, si l metodo de autenticacion sta mal, o si falto token, etc ntonces aumento: .status(403) para saber l error
//     ok: true,
//     msg:'patch API'
//   })
// })

router.get('/', usuariosGet) //13.d - REEMPLAZO todo el req,res de las lienas anteriores por solo la referencia de la fn q esta en controler/usuarios
  //no hago usuariosGet(), xqe no ejecuto acá la fn solo hago referencia a la misma

router.post('/', usuariosPost) 
router.delete('/', usuariosDelete) 
router.put('/:id', usuariosPut) 
router.patch('/', usuariosPatch) 

module.exports = router;