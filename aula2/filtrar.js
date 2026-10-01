const clientes = require("./clientes.json");

function filtraApartamentoSemcomplemento(clientes){
    return clientes.filter ((cliente) => {
        return (
            cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento")
        );
     });
    }

    const filtrados = filtraApartamentoSemcomplemento(clientes);

    console.log(filtrados);