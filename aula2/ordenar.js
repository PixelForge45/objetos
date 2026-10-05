const clientes = require("./cliente.json");

function ordenar(lista, propriedade) {
    const resultados = [...lista].sort((a, b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1;
        }
        if (a[propriedade] > b[propriedade]) {
            return 1;
        }
        return 0;
    });

    return resultados;
}

const ordenadoNome = ordenar(clientes, "nome");
console.log(ordenadoNome);
