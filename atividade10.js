function filtrarPares(array) {
    return array.filter(numero => numero % 2 === 0);
}

let numeros = [1, 2, 3, 4, 5, 6];
console.log(filtrarPares(numeros)); 
