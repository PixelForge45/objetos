const clientes = require("./cliente.json");

function encontrar(lista, chave, valor) {
    return lista.find(
        (item) => item[chave].toLowerCase() === valor.toLowerCase()
    );
}

const encontrado = encontrar(clientes, "nome", "olva");

console.log(encontrado);