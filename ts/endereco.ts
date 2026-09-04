export default class Endereco {
    estado: string
    cidade: string
    rua: string
    numero: number
    constructor(estado: string, cidade: string, rua: string, numero: number){
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero    
    }
    getEstadoMaiusculo(): string {
        return this.estado.toUpperCase()
    }
    //$%##%$&#%$#@@#@!W$&%R&ˆ&(ˆ&*ˆˆ$##$@)

    getEstadoMinusculo(): string {
        return this.estado.toLowerCase()
    }

    getCidadeMaiusculo(): string {
        return this.cidade.toUpperCase()
    }

    getCidadeMinusculo(): string {
        return this.cidade.toLowerCase()
    }

    getRuaMaiusculo(): string {
        return this.rua.toUpperCase()
    }

    getRuaMinusculo(): string {
        return this.rua.toLowerCase()
    }

    getNumeroMaiusculo(): string {
        return String(this.numero).toUpperCase()
    }

    getNumeroMinusculo(): string {
        return String(this.numero).toLowerCase()
    }

}