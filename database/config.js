/* setting de conexion con acceso a la URL de la base de datos, mediante fn asincrona */ //30.
const mongoose = require('mongoose')

const dbConnection = async() => { // 30.
  try {
    await mongoose.connect(process.env.MONGODB_CNN,{ //30.a
      useNewUrlParser: true,//30.b
      useUnifiedTopology: true,//30.b
      useCreateIndex: true,//30.b
      useFindAndModify: false //30.c - para prevenir ante funciones de mogoose que se deprecan
    })
    console.log('Base de datos online')
  } catch (error) {
    console.log(error)
    throw new Error('Error a la hora de iniciar la base de datos');
      // este error es el que yo armo pero tmb 1 clg para ver el error tal cual me bota la bd
  }
}

module.exports = {
  dbConnection
}