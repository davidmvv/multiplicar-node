const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabala de multimplicar', opts)
    .command('crear', 'Crea en un archivo la tabala de multimplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}