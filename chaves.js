const cliente = {
    nome: "João",
    idade: 24,
    email: "Joao@firma.com",
    telefone: ["115555550", "114444440"],
};

//cliente.enderecos = {
   // rua: "Rua Joseph Climber",
   // numero: 1337,
  //  apartamento: true,
  //  complemento: "ap 934",
//};
const chavesDoObjeto = Object.keys(cliente);

if (!chavesDoObjeto.includes("enderecos")) {
console.error("Erro. É necessário ter um endereço cadastrado.");
}
console.log( chavesDoObjeto);