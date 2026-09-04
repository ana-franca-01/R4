import Empresa from "./empresa.js"
import Cliente from "./cliente.js"
import Telefone from "./telefone.js"
import Endereco from "./endereco.js"
import detalhamento from "./detalhamento.js"


const enderecoEmpresa = new Endereco(
    "São Paulo",
    "São José dos Campos",
    "Avenida Cassiano Ricardo",
    100
)

const empresa = new Empresa(
    "Empresa Exemplo LTDA",
    "Empresa Exemplo",
    "12.345.678/0001-90",
    enderecoEmpresa
)

empresa.telefones.add(new Telefone("12", "99999-1111"))
empresa.telefones.add(new Telefone("12", "98888-2222"))

const cliente1 = new Cliente(
    "Ana",
    "111.111.111-11",
    new Endereco("São Paulo", "São José dos Campos", "Rua A", 10)
)

cliente1.telefones.add(new Telefone("12", "97777-1111"))
cliente1.telefones.add(new Telefone("12", "96666-2222"))

empresa.clientes.add(cliente1)

const cliente2 = new Cliente(
    "Carlos",
    "222.222.222-22",
    new Endereco("São Paulo", "São José dos Campos", "Rua B", 20)
)

cliente2.telefones.add(new Telefone("12", "95555-1111"))
cliente2.telefones.add(new Telefone("12", "94444-2222"))

empresa.clientes.add(cliente2)

const cliente3 = new Cliente(
    "Maria",
    "333.333.333-33",
    new Endereco("São Paulo", "São José dos Campos", "Rua C", 30)
)

cliente3.telefones.add(new Telefone("12", "93333-1111"))
cliente3.telefones.add(new Telefone("12", "92222-2222"))

empresa.clientes.add(cliente3)

const cliente4 = new Cliente(
    "João",
    "444.444.444-44",
    new Endereco("São Paulo", "São José dos Campos", "Rua D", 40)
)

cliente4.telefones.add(new Telefone("12", "91111-1111"))
cliente4.telefones.add(new Telefone("12", "90000-2222"))

empresa.clientes.add(cliente4)

const cliente5 = new Cliente(
    "Beatriz",
    "555.555.555-55",
    new Endereco("São Paulo", "São José dos Campos", "Rua E", 50)
)

cliente5.telefones.add(new Telefone("12", "98888-3333"))
cliente5.telefones.add(new Telefone("12", "97777-4444"))

empresa.clientes.add(cliente5)

console.log(detalhamento(empresa))
