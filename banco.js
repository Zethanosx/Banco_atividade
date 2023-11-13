class Banco {
    constructor(cliente,CPF) {
        this.cliente = cliente;
        this.CPF = CPF
    }
}


function createCliente(nome) {
    if (typeof nome === 'string') {
        return new Banco(nome);
    } else {
        console.log("Insira um nome válido, por favor.");
    }
}
let p1 = new Banco ("Rafael",12150212451);
let p2 = new Banco ("Neymar",12150212451);
let p3 = new Banco ("Eduardo",12150212451);
let p4 = new Banco ("Cauly",12150212451);

console.log(`o nome do cliente é ${p1.cliente} e tem o cpf ${p1.setarCPF}`);
console.log(`o nome do cliente é ${p2.cliente} e tem o cpf ${p1.CPF}`);
console.log(`o nome do cliente é ${p3.cliente} e tem o cpf ${p1.CPF}`);
console.log(`o nome do cliente é ${p4.cliente} e tem o cpf ${p1.CPF}`);