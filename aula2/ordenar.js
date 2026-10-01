const clientes = require("./clientes.json");

function ordenar(lista,propriedade){
    const resultados = lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]){
            return -1;
        }
        if (a[propriedade] > b[propriedade]){
            return 1;
        }
        return 0;
    });
    return resultado;
}