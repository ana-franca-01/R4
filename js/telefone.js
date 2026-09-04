"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
    getDddMaiusculo() {
        return this.ddd.toUpperCase();
    }
    getDddMinusculo() {
        return this.ddd.toLowerCase();
    }
    getNumeroMaiusculo() {
        return this.numero.toUpperCase();
    }
    getNumeroMinusculo() {
        return this.numero.toLowerCase();
    }
}
exports.default = Telefone;
