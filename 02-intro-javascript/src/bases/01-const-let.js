// Variables y constantes

const nombre = 'Isaac';
const apellido = 'Martinez';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

// var no se debe usar porque tiene scope global...
if ( true ) {
    const nombre = 'Peter';
    const valorDado = 6;
    console.log(nombre, valorDado);
}

console.log(nombre, valorDado);