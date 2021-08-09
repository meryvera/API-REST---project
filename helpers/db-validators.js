const Role = require('../models/role');
const Usuario = require('../models/usuario'); // 44.b

/* modularizo aca esto para poder reutilizarlo en cualquier lado */ //42.
const esRoleValido = async(rol = '') => { //41.a acá va custom porq es una verificacion personalziada
  const existeRol = await Role.findOne({ rol: rol });//busco 1 rol que sea igual al q intetno validar contra la base dedatos donde cree roles
  if(!existeRol){
    throw new Error(`El rol ${ rol } no está registrado en la BD`); //arrojo 1 error personalizado si es que es otro rol distinto al de la bd
  }
}

const yaEmailExiste = async( correo = '' ) => { //44.a

  /* verificamos si el correo ya existe */ // 36.a
  const existeEmail = await Usuario.findOne({ correo:correo });// 44.c
  if(existeEmail){//si el correo existe ex porque estariamos queriendo crear nuevo usuario con el mismo mail, asi que es 1 error
    throw new Error(`El correo ${ correo } ya está registrado`);
  }
}

module.exports = {
  esRoleValido,
  yaEmailExiste
}