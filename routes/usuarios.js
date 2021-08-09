/* TRAEMOS LAS RUTAS DEL SERVER */ //11.
const { Router } = require('express'); //11.a
  //destructuro a express y me traigo su metodo Router
const { check } = require('express-validator');
const { esRoleValido, yaEmailExiste } = require('../helpers/db-validators')
// const Role = require('../models/role'); // 42.a lo paso a db-validator
const { validarCampos } = require('../middlewares/validar-campos');  
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

router.post('/', [ // 36.c si es solo 1 middleware, lo pas como 2do parametro, si son varios, los meto en array
  // aca SOLO SETEO LOS ERRORES PERO PARA MOSTRALOS LOS LLEVAMOS A CONTROLLERS/USUARIOS (36.e)
  
  check('nombre', 'El nombre es obligatorio').not().isEmpty(), //37.
  
  check('correo').custom( yaEmailExiste ), // 44.d customizamos y ocultamos al anterior 
  //check('correo', 'El correo no es válido').isEmail(), //36.d    
  // 36.d llamamos a check de express validator, chequea que campo del body queremos validar
  // ... pero de x si no valida que lleve @, solo apunta a que propiedad chequear. Para que valide el @ agrgo al final .isEmail()
  // ... pero en resumen todo esto solo prepara los errores pero no los muestra, para ello 37. en controllers/usuarios
  
  check('password', 'El password es obligatorio y más de 6 letras').isLength({ min:6 }), //37. 
     

  // check('rol', 'No es un rol permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']), //37. 
  
  // check('rol').custom( async(rol = '') => { //41.a acá va custom porq es una verificacion personalziada
  //   const existeRol = await Role.findOne({ rol: rol });//busco 1 rol que sea igual al q intetno validar contra la base dedatos donde cree roles
  //   if(!existeRol){
  //     throw new Error(`El rol ${ rol } no está registrado en la BD`); //arrojo 1 error personalizado si es que es otro rol distinto al de la bd
  //   }
  // }),

  check('rol').custom( esRoleValido ), //42.a
  //check('rol').custom( (rol) => esRoleValido(rol)  ), //42.b
    //cuando tengamos 1 cb cuyo argumento rol en (esValido(rol)), es el mismo q l argumento incial es rol en (custom(rol)=>...)
    // ...podemos obviar la fn flecha y el parametro principal, y solo poner la referencia de la fn
    // ... y automaticamente l 1er argumento q remite el custom, va a ser el 1er argumento q se le va a enviar al rol
    //...por ello nos quedamos con 42.a y no 42.b
  
    validarCampos //39.a esto al final xqe recien aca se comienzan a mostrar los errores depues de haber sido cheqeados con los checks, y...
    // ... si este ultimo middleware pasa entonces se ejecutaa el controlodaor usuariosPost
    // si todos los campos ingresados discrepan de mis validaciones --> me daraun lista de errores, cada error va en 1 objeto x cada check seteado
 
  ] ,usuariosPost) 
router.delete('/', usuariosDelete) 
router.put('/:id', usuariosPut) 
router.patch('/', usuariosPatch) 

module.exports = router;