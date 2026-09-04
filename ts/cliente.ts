import Endereco from "./endereco.js"
import Telefone from "./telefone.js"

export default class Cliente{
    #cpf

    endereco: Endereco
    telefones: Set<Telefone>
    nome: string

    constructor(nome: string, cpf: string, endereco: Endereco){
        this.nome = nome
        this.#cpf = cpf
        this.endereco = endereco
        this.telefones = new Set<Telefone>()
    }  

    public get cpf(){
        return this.#cpf
    }

    getNomeMaiusculo(): string {
        return this.nome.toUpperCase()
    }

    getNomeMinusculo(): string {
        return this.nome.toLowerCase()
    }

    getCpfMaiusculo(): string {
        return this.#cpf.toUpperCase()
    }

    getCpfMinusculo(): string {
        return this.#cpf.toLowerCase()
    }
}