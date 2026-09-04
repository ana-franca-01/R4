import Telefone from './telefone.js'
import Endereco from './endereco.js'
import Cliente from './cliente.js'

export default class Empresa {
    #cnpj

    razaoSocial: string
    nomeFantasia: string
    telefones: Set<Telefone>
    clientes: Set<Cliente>
    endereco: Endereco

    constructor(
        razaoSocial: string,
        nomeFantasia: string,
        cnpj: string,
        endereco: Endereco
    ){
        this.endereco = endereco
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.#cnpj = cnpj
        this.telefones = new Set<Telefone>()
        this.clientes = new Set<Cliente>()
    }

    get cnpj(){
        return this.#cnpj
    }

    getRazaoSocialMaiusculo(): string {
        return this.razaoSocial.toUpperCase()
    }

    getRazaoSocialMinusculo(): string {
        return this.razaoSocial.toLowerCase()
    }

    getNomeFantasiaMaiusculo(): string {
        return this.nomeFantasia.toUpperCase()
    }

    getNomeFantasiaMinusculo(): string {
        return this.nomeFantasia.toLowerCase()
    }

    getCnpjMaiusculo(): string {
        return this.#cnpj.toUpperCase()
    }

    getCnpjMinusculo(): string {
        return this.#cnpj.toLowerCase()
    }
}