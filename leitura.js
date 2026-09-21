const dados = require('./cliente.json');

console.log(dados);
console.log( typeof dados);

const clienteEmstring = JSON.stringify(dados);
console.log(clienteEmstring);
console.log(typeof clienteEmstring);

const clienteEmObjeto = JSON.parse(clienteEmstring);

console.log(clienteEmObjeto);
console.log(typeof clienteEmObjeto);