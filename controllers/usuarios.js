/* SEPARO ACÁ LOS CONTROLADORES DE LAS RUTAS */ //13.a
const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const  Usuario = require('../models/usuario'); //33.a es 1 standar que todo los q importmos de models lonombremos con mayuscula, pero no es obligatorio, esto xe vamos a instanciarlo con new 

// const { validationResult } = require('express-validator');

const usuariosGet = (req = request, res = response) => {

  const {q, nombre='No name', apikey, page='1', limit} = req.query // 16.d  podemos destructurar
    // cuando el cliente no pone query param completo - page
      // localhost:8080/api/usuarios/?q=hola&limit=10
      // https://api-rest-yrem.herokuapp.com/api/usuarios/?q=hola&limit=10
      // si paso -> localhost:8080/api/usuarios/?q=hola&limit=10&page=20
      // esto me da pagina 20 en la respuesta
  
    //const {q, nombre='No name', apikey, page, limit} = req.query // 16.c  podemos destructurar
    // cuando el cliente no pone  query params completos - nombre, igual BE tiene que preveerlo y setearlo
    // localhost:8080/api/usuarios/?q=hola&page=1&limit=10
    
  //const {q, nombre, apikey} = req.query // 16.b  podemos destructurar
    // localhost:8080/api/usuarios/?q=hola&nombre=fernando&apikey=1234567890, esto le da 3 parametros al objeto principal

  //const query = req.query; //16.a esto express me lo entrega parseado en el resposne, esto crea 1 propiedad query objeto dentro del objeto principal
  
  res.json({ 
    ok: true,
    msg:'get API - ccontrolodor',
    //query, //esto me retorna todo el objeto "query": {"q": "hola", "nombre": "fernando", "apikey": "1234567890"}
    q,
    nombre,
    apikey,
    page,
    limit,
  })
}

const usuariosPost = async(req, res = response) => {

  /* mostrando los errores */ // 36.e
  // const errors = validationResult(req);
  // if(!errors.isEmpty()){ //si es distinto a "vacío de errores"...
  //   return res.status(400).json(errors); // corta el flujo con return y manda status 400 y muestra en json todos los errroes
  // } // ahora si con esto si manda cualquier otro caracter que no sea propio de type: email, manda una propiedad msg:"el correo no es valido"
  

  const { nombre, correo, password, rol } = req.body; //34.a 
    //para corregir que el usuario manipule la data de google, yo simplemente lo dquito de mi destructuracion para NO MANDARLO A LA BD DE COMPASS
  //const body = req.body; //14.a esto express me lo entrega parseado en el resposne
    // esto me retorna en 1 objeto todo lo que l cliente ingresa
  //const {nombre, edad, id} = req.body; //14.b podemos destructurar
   //esto solo me retorna estas prpiedades, si el cliente ingresa otros datos, el BE no respondera mas que solo esto que tiene seteado
      // localhost:8080/api/usuarios
      // https://api-rest-yrem.herokuapp.com/api/usuarios

  //const usuario = new Usuario(body) // 33.b instanciamos a Usuario de la (L2) y le mandamos el body
  const usuario = new Usuario({ nombre, correo, password, rol }) //34.b
    // paso las propiedades del obejtos destructurado, pero menos a goole, y cuando corro el servidor en postman sale = google pero con false
  
 
  // 44 todo lo modularizamos en db-validators  , por ello lo ocultamos acá
  /* verificamos si el correo ya existe */ // 36.a
  // const existeEmail = await Usuario.findOne({correo:correo});
  // if(existeEmail){//si el correo existe ex porque estariamos queriendo crear nuevo usuario con el mismo mail, asi que es 1 error
  //   return res.status(400).json({
  //     msg:'Ese correo ya está registrado' // aun asi esto todavia no valida que se ingresen correo con @
  //   })
  // }

  /* Encriptamos contraseña, y hacemos hash de ella */ //35.a
  const salt = bcryptjs.genSaltSync(); //si ponemos 10 es el minimo nivel de seguridad, 100 es el maximo
  usuario.password = bcryptjs.hashSync( password, salt ); // con esto encriptamos el hash


  /* guardamos en la base de datos */ //35.c
  /* grabando la info del usuarioo */
  await usuario.save(); //33.d esto es para grabar la info del suaurio, pero falló el node app porqe segn el modelschema hay varios requireds
    // y no lo puSimos en el body requiest del POST en postman
    //una vez pasado en el body todos los paramteros definidos en el schema, ahora vamos a compass y ctrl+r ahora ya guarda dato

  res.json({ 
    ok: true,
    msg:'post API - ccontrolodor',
    usuario, // 33.c -> sto me retorna en postman dentro del main object, la propiedad usuario qe s 1 obj tmb y trae 1 propiedad"_id" qe la genera mongo db, pero si voy a compass no veo nada creado, entonces:...

    //body, // esto me retorna en 1 objeto todo lo que l cliente ingresa  //14.a
    // id, //14.b
    // nombre,//14.b
    // edad//14.b
  })
}

const usuariosPut = (req, res = response) => {
  
  const { id } = req.params; //15. esto express me lo entrega parseado en el resposne
  //const id = req.params.id -> sin destructurar
  //id es el nombre que le puse en routes/usuarios - router.put('/:id', usuariosPut) 
      // localhost:8080/api/usuarios/10
      // https://api-rest-yrem.herokuapp.com/api/usuarios/10
  
  res.json({ 
    ok: true,
    msg:'put API - ccontrolodor',
    id,
  })
}

const usuariosDelete = (req, res = response) => { 
  res.json({ 
    ok: true,
    msg:'delete API - ccontrolodor'
  })
}

const usuariosPatch = (req, res = response) => { 
  res.json({
    ok: true,
    msg:'patch API - ccontrolodor'
  })
}

// Lo exporto como objeto, xqe voy a crear varios controladores
module.exports = { //13.c
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuariosPatch,
}
