const clientes = require("./cliente.json");

function encontrar(lista, chave, valor) {
    return lista.find((item) => {
        const campo = item[chave];

        if (Array.isArray(campo)) {
            return campo.some((elemento) =>
                String(elemento).toLowerCase() === String(valor).toLowerCase()
            );
        }

        return String(campo).toLowerCase() === String(valor).toLowerCase();
    });
}

const encontrado = encontrar(clientes, "nome", "olva");

const encontrado2 = encontrar(clientes, "telefone", "1918820860");

console.log(encontrado2);