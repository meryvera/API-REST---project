const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'] 
  },
  correo: {
    type: String,
    required: [true, 'El correo es obligatorio'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'LA contraseña es obligatoria'],
  },
  img: {
    type: String, //url de la imgen del usuario
  },
  rol: {
    type: String,
    required: true,
    enumerac: ['ADMIN_ROLE', 'USER_ROLE'] //solo es 1 de estos 2
  },
  estado: {
    type: Boolean,
    default: true // esto es true x qe cuando cree 1 usuario x defecto esta activado y cuando lo borre deberia cambiar a false
  },
  google: {//metodo de autenticacion de google
    type: Boolean,
    default: false// a menos que yo especifique la creacion va a ser 1 usuario credo x google
  }
})

/* crearemos 1 metodo para sobrescribir alguno preexistentes de mongoose */ //43.con esto sacamos el pasword y __v de la repsuesta de postman
UsuarioSchema.methods.toJSON = function(){ // DEBE SER 1 FN NORMAL XQE USARE EL OBJETO THIS, xqe 1 fn flecha apunta el this fuera de la misma, y nosotros necestimaos el this dentro de la fn
  const { __v, password, ...vpassword} = this.toObject();
    // con esto los saco del objeto a estas propiedades y los guardo en 1 nuevo objeto llamado vpassword
  return vpassword;
}//osea con esta fn cuando mandemos en el body del request passw , la respuesta del servidor no tendra ese passwor ingresado ni __v 

module.exports = model('Usuario', UsuarioSchema)
// el 1er psrametro: nombre no solo del modelo sino tmb de la coleccion, y
  // mongoose x defecto va a ponerle 1 nombre a la collecion, agrando 1 "s" al final del nombre