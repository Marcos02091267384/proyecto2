const fs = require('fs');
function cargar(fichero) {
    try {
        const data = fs.readFileSync(fichero, 'utf8');
        const usuariosData = JSON.parse(data);
        return usuariosData;
    } catch (err) {
        if (err.code === 'ENOENT') {
            return [];
        } else {
            throw err;
        }
    }
}

function actualizar(registro, fichero) {
    const data = JSON.stringify(registro);
    fs.writeFileSync(fichero, data);
}
function editar(fichero, index, alumno) {
    let registro = cargar(fichero);
    registro[index] = alumno;
    actualizar(registro, fichero);
}
function eliminarIndice(index, fichero) {
    const registro = cargar(fichero).splice(index, 1);
    actualizar(registro, fichero);
}

module.exports = { actualizar, cargar, editar, eliminarIndice };