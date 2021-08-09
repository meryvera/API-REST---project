const { validationResult } = require('express-validator');

const validarCampos = (req, res, next) => {//38.a
  /* pero si no existen errores ocurre NEXT como 3er parametro */
  
  /* mostrando los errores */ // 36.e
  const errors = validationResult(req);
  if(!errors.isEmpty()){ //si es distinto a "vacío de errores"...
    return res.status(400).json(errors); // corta el flujo con return y manda status 400 y muestra en json todos los errroes
  }
  
  next(); // 38.a "si cae acá, entonces sigue con el siguiente middleware"
}

module.exports = {
  validarCampos,
}