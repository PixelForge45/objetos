const cliente = {
    nome: "João",
    idade:23,
    email:"Joao@firma.com",
    telefone:["115555550", "114444440"],
    saldo: 200
    efetuaPagamento: function (valor) {
        if (valor > this.valor) {
            console.log("Saldo Insulficiente")
        }
    }
};

cliente.enderecos = [
    {
        rua: "R. da silva",
        apartamento: true,
        complemento: "ap 934",
    },
],

cliente.enderecos.push({
    rua: "R. Joseph climber",
    numero:404,
    apartamento:false,
})

const listadeapartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true)
 

    console.log(listadeapartamentos);

