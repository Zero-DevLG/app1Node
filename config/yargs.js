const argv = require('yargs')
        .option('b',{
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Numero entero base necesario para crear la tabla de multiplos de la base'
        })
        .option('l',{
            alias: 'lista',
            type: 'boolean',
            demandOption: false,
            default: false,
            description: 'Listar multiplos creados en consola'
        })
        .option('m',{
            alias:  'multiplo',
            type:   'number',
            demandOption: false,
            default: 10,
            description:'Numero de multiplos para la operacion'
        })
        .check((argv,options) =>{
           if( isNaN(argv.b)){
                throw 'La base debe de ser un numero entero';
            }
            if(isNaN(argv.m)){
                throw 'El numero de multiplos debe de ser un numero entero';
            }
            return true;
            
        })
        .argv; 

        module.exports = argv;