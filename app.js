
// file system, guarda en disco

const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');
const colors = require('colors');

console.clear()

 console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(nombreArchivo.green,'creado!!'.green))
  .catch(err => console.log(err));

