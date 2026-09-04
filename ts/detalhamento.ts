import Empresa from "./empresa.js"

export default function detalhamento(empresa: Empresa): string {

    const texto: string[] = []

    texto.push(`Empresa: ${empresa.razaoSocial}`)
    texto.push(`Nome Fantasia: ${empresa.nomeFantasia}`)
    texto.push(`CNPJ: ${empresa.cnpj}`)

    texto.push("")
    texto.push("Endereço:")
    texto.push(`${empresa.endereco.estado}, ${empresa.endereco.cidade}, ${empresa.endereco.rua}, ${empresa.endereco.numero}`)

    texto.push("")
    texto.push("Telefones:")
    
    empresa.telefones.forEach(telefone => {
        texto.push(`(${telefone.ddd}) ${telefone.numero}`)
    })

    texto.push("")
    texto.push("Clientes:")

    empresa.clientes.forEach(cliente => {

        texto.push("")
        texto.push(`Nome: ${cliente.nome}`)
        texto.push(`CPF: ${cliente.cpf}`)

        texto.push("Endereço:")
        texto.push(`${cliente.endereco.estado}, ${cliente.endereco.cidade}, ${cliente.endereco.rua}, ${cliente.endereco.numero}`)

        texto.push("Telefones:")

        cliente.telefones.forEach(telefone => {
            texto.push(`(${telefone.ddd}) ${telefone.numero}`)
        })
    })

    return texto.join("\n")
}
