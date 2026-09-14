const cliente = {
    nome: "João",
    idade: 24,
    email: "Joao@firma.com",
    telefone: ["115555550", "114444440"],
};

cliente.enderecos = {
    rua: "Rua Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
};

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if(tipo !== "object" && tipo !== "function"){
        console.log(`A chave é ${chave} e o valor é ${cliente[chave]}`);
    }

}