/* CON CLASES */ //3.
require('dotenv').config();//4. (ex 2.a)
  // importamos el metodo config del modulo dotenv

const Server = require('./models/server'); //5.a llamo a mi clase desde (server.js)
const server = new Server(); //5.b - instancio del servidor (server.js)

server.listen(); //5.c


/* SIN CLASES */
// require('dotenv').config(); //2.a
//   // importamos el metodo config del modulo dotenv

// /* initializing express */ // 1.a copiamos todo  esto desde la pagina de npm express
// const express = require('express') -> requerimos express
// const app = express() -> inicializamos express
 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
 
// app.listen(process.env.PORT, () => { //2.c 
      // Cambiamos de puerto físico en el dotenv .env de 3000 a 8080
//   console.log('servidor corriendo en puerto', process.env.PORT)
// })

// app.listen(3000) --> puerto x default, q luego se cambia al 8080 //2.b



// -------------------------------------------------
// 1. Instalamos npm i express dotenv
// 2. cambiaremos nuestro puerto de 3000 a 8080 en dotenv .env --> PORT=8080

// 3. Cambiaremos todo el servidor a CLASES --> y creamos models/server.js
    // 3.a - abrimos class
    // 3.b - requerimos express
    // 3.c - inicializams express en app, como instacia y TODO CON .THIS.APP, como 1 propiedad en la misma class Server
    // 3.d - creo mi metodo routes
    // 3.e - creamos GET y paramaetros, la ruta y fn cb (req, res)
    // 3.f - llamo mi fn routes creadas, dentro del constructor
    // 3.g - creo mi metodo listen, aqui digo en q puerto quiero ejecutar mi servidor localmente
    // 3.h - asignamos 1 vr al puerto dentro del cosntructor -> this.port = process.env.PORT
    // 3.i - cambiamos el process.env.PORT x this.port -> this.app.listen(this.port, () => {clg('servidor corriendo en puerto', this.port)}

// 4. importamos en app.js el metodo config del modulo instalado dotenv -> require('dotenv').config();
    
// 5. Importo el servidor desde (models/server.js) y lo instancio -> 
    // 5.a - const Server = require('./models/server'); 
    // 5.b - const server = new Server();
    // 5.c - ahora lanzo el metodo listen -> server.listen();

// 6. creamos carpeta public e index.html para FE si queremos
// 7. Creamos middelwares- qe son funciones que agregaran otras funcionalidades a mi web server
    //... osea es 1 fn que siempre va a ejecutarse cuando levantemos nuestro servidor
    // 7.a - creamos 1 middleware para la carpeta publica
    // 7.b - llamamos a todos los middlewares dentro del constructor

// ------------

// 8. Crearemos 4 endpoints 1 para cada elemento del CRUD - Get, Post, Put, Delete, patch(video 102)
// 9. Creamos  respuestas n formato json a las rutas '/api' en models/server.js 02:00 (9.a)

// ------------

// 10.Instalo Cors npm i cors y Setteo CORS como middleware en server.js
    // 10.a - Requiero cors
    // 10.b - this.app.use( cors() );

// --------------------------------------

// 11.Separaremos las rutas y el acceso con autenticion (si necesitara) 
//  ...y el controlador de la clase a dichas rutas en archivos independientes de acuerdo a su fn q cumplira cda ruta(clase 106)
    // cortaremos las rutas del router y lo mandamos a routes/usuarios.js en routes
    // 11.a - requiero Router de express
    // 11.b - le asigno 1 vr a la fn Router()
    // 11.c - llamo a las rutas que separé en routes/usuarios.js:
            //this.app.use('/api/usuarios', require('../routes/usuarios'))
    // 11.d - borramos api del /, xqe en server.js ya pusimos '/api/usuarios'

    //106


// 12. cuando no sabemos mapear bien donde estan las rutas, entonces lo mapeamos al inicio:
    // 12.a - endpoint de usuarios en server.js
    // 12.b - reemplazo '/api/usuarios' x this.usuariosPath xqe ya lo setie en 12.a :
    //   - this.app.use(this.usuariosPath, require('../routes/usuarios'))

// 13. EL route solo debe tener las rutas y tmb la proteccion de ellas 6:30 - clase 106
    // pero todo su controlador debe estar en un archivo independientepara controlar dicha funcion, entonces:
    // Creo archivos dentro de controller donde separar{e a lso controlodares de las rutas

// 14. Obteniendo datos de POST
    // usualmente con post (normalmente este), put, inclusive delete podemos mandar 1 body en la peticion, get no recibe esa info del body
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
    // $ heroku login
    // $ heroku git:remote -a api-rest-yrem  -> en bash
    // seteo en package json dentro de scripts ->  "start": "node app"
    // $ git add .
    // $ git commit -m "npm start added"
    // $ git push origin master
    // $ git push heroku master , esto me da https://api-rest-yrem.herokuapp.com/ q es el deploy
    // tomamos la url del deploy en heroku y lo cambiamos en postman o thunder
// 19. Ambiente de produccion y desarrollo en pstman
// 20. Reemplazamos las el dominio del psot man por {{url}} que seteamos en el ambiente de desarrollo en postman

//------------------------------------------------------

// 21. seccion9- Base de datos: Super café - 3 colecciones: Usuarios, Categorías, Productos
    // creo mi cluster en mongodb atlas, descargo mongodb atlas localmente
    // En database Access creo mi usuario y genero automaticamente mi contraseña
    // El user y pass, los copio en .env
    // USER = user_server_cafe
    // PASS = LmCfjERhuJP07UmJ
// 22. Probaremos si funciona la conexion con la bd, 
    // vamos a Databases (cluster) -> doy a conectar -> doy aallow access from anywhere -> IP 00000 (queda igual)
// 23. doy a connect with mongo compass -> descargo mongo compass -> copio el acceso a mongo db para conectarme a la bd de mongo compass     
    // copio la url -> mongodb+srv://user_server_cafe:<password>@apicafe.icutl.mongodb.net/test en .env
    // reemplzo el usuario y pass en la ur:  MONGODB_CNN = mongodb+srv://user_server_cafe:LmCfjERhuJP07UmJ@apicafe.icutl.mongodb.net/test
    // borro el user y pass del .env
    // al final la url tiene /test, acá lo cambio por el nombre que yo quiera que se llame mi bd:
        // MONGODB_CNN = mongodb+srv://user_server_cafe:LmCfjERhuJP07UmJ@apicafe.icutl.mongodb.net/cafeDB

// 24. Debo crear mi cuenta mongoDB compass 
// 25. en New connection -> pego mi string de conexion que lo sauqe de mongo-cnn, pero sin MONGODB_CNN:, osea solo: mongodb+srv://user_server_cafe:LmCfjERhuJP07UmJ@apicafe.icutl.mongodb.net/cafeDB
    // cada vez que cierre el programa de mongo compass el, se cae la bd, por ello debo seleccionarla y darle conectar denuevo, igual que docker que no levanta su servidor si no lo activo directamente en el mismo programa
    // para poder tenerlo alli guardado por nombre, HAY Q AGREGARLO A FAVORITOS sino se pierde el string connection    
// 26. Cierro mongodb atlas, aunque alli tmb puedo evr las colecciones de la bse de datos, alli podemos hacer todo lo del mongo compass y +
// 27. Vuelvo a levantar el servidor de node en bash (nodemon app. node app, npm start)
// 28. Creamos un nuevo request en postman con get y el localhost, 
    // si todo corre ok en el bash al mmento de levantar el servidor de node y tmb en postman , entonce seguirmos
// 29. Instalamos monngose en el bash, mongoose es un ODM, que es un modelador de data object. Object Data Modelling, como 1 modelador de objetos de informacion q vamos a grabar en la bd
    // npm i mongoose
// 30. Creamos una carpeta database -> config.js Y ALLI CREAMOS 1 FN ASINCRONA q conecta con el url de acceso a la bd q esta en .env
    // 30.a await mongoose.connect(process.env.MONGODB_CNN)
// 31. conectamos a la base de datos de mongoose en constructor de server.js mediante dbConnection de config.js
    // la conexcion fue bien xqe el bash mee rtorna: servidor corriendo en puerto 8080/ Base de datos online, al levantar node
// 32. Creamos los modelos de Schemas (typescript) -> models/usuario.js
// 33. POST creando 1 usuario en la coleccion
    // 33.d //una vez pasado en el body todos los paramteros definidos en el schema, ahora vamos a compass y ctrl+r ahora ya guarda dato
    // ... aunque el problema era en rol qe definimos solo 2 sin embargo cuando paso otro distinto, igual loa acepta
// 34. Bcrypt JS - encriptamos la contraseña
    //solucionamos el problema d las propiedad google para q el usuario no ponga true en la contraseña. Esto debemos asegurarnos nosotros y no solo esperar que el FE,x mas amigo nuetsro haga la validacion solamente el, nosotros tmb debemos hacerl sino RIP
// 35. Ahora si encriptamos la contraseña xd
    // instalamos en desarrollo npm i bcryptjs
// 36. Validamos los campos obligatorios, type email, etc para que mi bd solo acepte emails con @
    // 36.b instalamos npm i express-validator -> es una gran coleccion de middlewares que se ejecutan antes de llamar a 1 controlador o antes de seguir con la ejecucion de mis peticiones
    // 36.c esto lo podemos hacer enroutes/usuarios, antes de que se ejecuten los controladores, y despues de llamar a al ruta.
    // ...osea antes de ejecutar todos mis controloadores ubicados en controllers/usuarios,  y me lleven a sus rutas respectivas cda 1, valido la info con los middlewares
// 37. validar todos los campos necesarios
// 38. Para mostrar todos los errores en distintos middlewares, tenemos q repetir codigo pero sino queremos, podemos hacer 1 SOLO middleware para todas las validaciones de todos los controladores
    // 38.a cortamos la fn errors q muestra los errores, del controller/usuarios para lleevarlo a su propio archivo middleawares/ validar-campos,js
// 39. tomo a la fn validarCampos de su mismo modulo y lo pongo como ultimo dps de todas las validaciones del middleware check en routes/usuarios
// 40. Centralizaremos la validacion de rol, para que este en la bd y no en el check de routes/usuarios.js, osea para q este en bd y no en mi codigo
    // voy a mongo compas, cierro a ventanita cafe.DB.usuarios, click en cafeDB, y create collection.
    // important! debo darle nombre en plural
    // otra vez entro a cafeDB -> roles -> add data -> insert document -> borro todo y escribo objetos: { "rol": "ADMIN_ROLE"}, { "rol": "USER_ROLE"}, { "rol": "VENTAS_ROLE"},
    // automaticamente compas crea un _id para ese objeto
// 41. creo dentro de models/role.js para leer esos nuevos roles del compass,
    // elimino el check ya existente del role, y hago la validacion del check contra el compass

// 42. Centralizo la personalizacion del rol que hicimos en rutas/usuarios.js con check().custom()
    // ..esto con el fin de que vamos a reutilizar tmb en put y delete, entonces refactoricemos...
    // 42.a Creo una nueva carpta llamada helpers y alli corto del routes/usuarios check('rol').custom(...)
    // ... y lo pego en helpers
        // async(rol = '') => { //41.a acá va custom porq es una verificacion personalziada
        //     const existeRol = await Role.findOne({ rol: rol });//busco 1 rol que sea igual al q intetno validar contra la base dedatos donde cree roles
        //     if(!existeRol){
        //     throw new Error(`El rol ${ rol } no está registrado en la BD`); //arrojo 1 error personalizado si es que es otro rol distinto al de la bd
        //     }
        // }
// 43. Ahora quitamos la contraseña del postman en su respuesta
// 44. Tarea - custom validation - EmailExiste
    // para tmb reutilizar la fn de validacion de q si el correo ya existe (36.a)  
    // Primero -> cortamos dicha fn del controllers/usuarios.js -> lo pasamos a helpers/db-validator.js -> y lo ejecutaamos en routes/usuarios.js como controlador customizado o personalizado      
    // comentamos dentro de controller/usuarios.js toda la fn de validacion de correo ya exisente para pasarlo al helper
// 45. PUT: actulizamos infor del usuario ...PENDIENTE DE VEEEERRR
// 46. Validaciones adicionales en el PUT ...PENDIENTE DE VEEEERRR
// 47. GET: obtener todos los usuarios de forma paginada (129) ...PENDIENTE DE VEEEERRR
// 48. Retornar numero total de registros en una coleccion ...PENDIENTE DE VEEEERRR
// 49. Delete: Borrando un usuario de la abse de datos ...PENDIENTE DE VEEEERRR
// 50. Desplegar RESTServer en Heroku ...PENDIENTE DE VEEEERRR
// 51. Variables de entorno personalizadas Heroku ...PENDIENTE DE VEEEERRR




// . Introduccion a los tokens(seccion137)
