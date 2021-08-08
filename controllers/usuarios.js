/* SEPARO ACÁ LOS CONTROLADORES DE LAS RUTAS */ //13.a
const { response, request } = require('express')

const usuariosGet = (req = request, res = response) => {

  const {q, nombre='No name', apikey, page='1', limit} = req.query // 16.d  podemos destructurar
    // cuando el cliente no pone query param completo - page
    //localhost:8080/api/usuarios/?q=hola&limit=10
    // si paso -> localhost:8080/api/usuarios/?q=hola&limit=10&page=20
    //esto me da pagina 20 en la respuesta
  //const {q, nombre='No name', apikey, page, limit} = req.query // 16.c  podemos destructurar
    //cuando el cliente no pone  query params completos - nombre, igual BE tiene que preveerlo y setearlo
    //localhost:8080/api/usuarios/?q=hola&page=1&limit=10
  
  //const {q, nombre, apikey} = req.query // 16.b  podemos destructurar
  
  //const query = req.query; //16.a esto express me lo entrega parseado en el resposne
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

const usuariosPost = (req, res = response) => {

  //const body = req.body; //14.a esto express me lo entrega parseado en el resposne
    // esto me retorna en 1 objeto todo lo que l cliente ingresa
  const {id, nombre, edad} = req.body; //14.b podemos destructurar
   //esto solo me retorna estas prpiedades, si el cliente ingresa otros datos, el BE no respondera mas que solo esto que tiene seteado
  res.json({ 
    ok: true,
    msg:'post API - ccontrolodor',
    //body, // esto me retorna en 1 objeto todo lo que l cliente ingresa  //14.a
    id, //14.b
    nombre,//14.b
    edad//14.b
  })
}

const usuariosPut = (req, res = response) => {
  
  const { id } = req.params //15. esto express me lo entrega parseado en el resposne
  //const id = req.params.id -> sin destructurar
  //id es el nombre que le puse en routes/usuarios - router.put('/:id', usuariosPut) 
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
