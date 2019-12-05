//requireds
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        console.log("=================".red);
        console.log(`Tabla de ${ base}`.red);
        console.log("=================".red);


        for (a = 1; a <= limite; a++) {
            console.log(`${base} * ${a} = ${base*a}`);
        }
    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base }, no es un numero`);

            return;
        }
        let data = '';

        for (a = 1; a <= limite; a++) {
            data += (`${base} * ${a} = ${base*a}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) throw err
            else
                resolve(`tablas- ${ base }.txt `);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}