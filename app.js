const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');


crearArchivo( argv.b, argv.l,argv.m )
   .then( nombreArchivo => console.log(`Archivo ${nombreArchivo} creado con exito`.underline.green))
   .catch( err => console.log(`${ err }`.underline.bgRed));

