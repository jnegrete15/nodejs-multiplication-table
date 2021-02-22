const { describe } = require('yargs');

const argv = require('yargs')
    .option('b',{
      alias: 'base',
      type: 'number',
      demandOption: 'true',
      description: 'Multiplicand number'
    })
    .option('l' , {
      alias: 'list',
      type: 'boolean',
      default: false,
      description: 'Show product in console'
    })
    .option('h', {
      alias: 'hasta',
      type: 'number',
      default: 10,
      description: 'Multiplier number'
    })
    .check((argv, options) => {
      if( isNaN(argv.b)){
        throw 'Multiplicand has to be a number'.red
      }
      return true
    })
    .argv;

module.exports = argv
