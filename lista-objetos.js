const cliente = {
    nome: "joão",
    idade: 24,
    email: "joaofirm@gmail.com",
    telefone: "11 2233445566, 22 113344556677"
}

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 67,
        apartamento: true,
        complemento: "ap 94"
    }
]

cliente.enderecos.push({
    rua: "R. Joseph Climber",
        numero: 67,
        apartamento: false,
})

console.log(cliente.enderecos);