const argv = require('./config/yarg').argv;
var colors = require('colors');

const { crearArchivo, listarTabla } = require('./tablas/multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log("Comando no reconocido");
        break;
}