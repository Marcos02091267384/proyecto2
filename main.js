const funciones = require('./funciones.js');
const AlumnoCurso = require('./AlumnoCurso.js');

const registro = [new AlumnoCurso('Pepe', 22, 10),new AlumnoCurso('Manuel', 45, 6)];
funciones.actualizar(registro, './Registro.json');
funciones.editar('./Registro.json', 0, new AlumnoCurso("Jose", 40, 3));
funciones.eliminarIndice(0,'./Registro.json');
console.log("Fin de la ejecucion");
//Como no me hablan nada de validar datos asumo que es imnecesario.