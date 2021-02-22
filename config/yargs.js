const { describe } = require('yargs');

const argv = require('yargs')
    .option('b',{
      alias: 'base',
      type: 'number',
      demandOption: 'true',
      description: 'Es la base de la multiplicación'
    })
    .option('l' , {
      alias: 'list',
      type: 'boolean',
      default: false,
      description: 'Muestra la tabla en consola'
    })
    .option('h', {
      alias: 'hasta',
      type: 'number',
      default: 10,
      description: 'Hasta que número se multiplicará la base'
    })
    .check((argv, options) => {
      if( isNaN(argv.b)){
        throw 'La base tiene que ser un número'.red
      }
      return true
    })
    .argv;

module.exports = argv
