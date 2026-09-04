"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Cliente_cpf;
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    constructor(nome, cpf, endereco) {
        _Cliente_cpf.set(this, void 0);
        this.nome = nome;
        __classPrivateFieldSet(this, _Cliente_cpf, cpf, "f");
        this.endereco = endereco;
        this.telefones = new Set();
    }
    get cpf() {
        return __classPrivateFieldGet(this, _Cliente_cpf, "f");
    }
    getNomeMaiusculo() {
        return this.nome.toUpperCase();
    }
    getNomeMinusculo() {
        return this.nome.toLowerCase();
    }
    getCpfMaiusculo() {
        return __classPrivateFieldGet(this, _Cliente_cpf, "f").toUpperCase();
    }
    getCpfMinusculo() {
        return __classPrivateFieldGet(this, _Cliente_cpf, "f").toLowerCase();
    }
}
_Cliente_cpf = new WeakMap();
exports.default = Cliente;
