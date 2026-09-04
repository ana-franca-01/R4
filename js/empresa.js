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
var _Empresa_cnpj;
Object.defineProperty(exports, "__esModule", { value: true });
class Empresa {
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        _Empresa_cnpj.set(this, void 0);
        this.endereco = endereco;
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        __classPrivateFieldSet(this, _Empresa_cnpj, cnpj, "f");
        this.telefones = new Set();
        this.clientes = new Set();
    }
    get cnpj() {
        return __classPrivateFieldGet(this, _Empresa_cnpj, "f");
    }
    getRazaoSocialMaiusculo() {
        return this.razaoSocial.toUpperCase();
    }
    getRazaoSocialMinusculo() {
        return this.razaoSocial.toLowerCase();
    }
    getNomeFantasiaMaiusculo() {
        return this.nomeFantasia.toUpperCase();
    }
    getNomeFantasiaMinusculo() {
        return this.nomeFantasia.toLowerCase();
    }
    getCnpjMaiusculo() {
        return __classPrivateFieldGet(this, _Empresa_cnpj, "f").toUpperCase();
    }
    getCnpjMinusculo() {
        return __classPrivateFieldGet(this, _Empresa_cnpj, "f").toLowerCase();
    }
}
_Empresa_cnpj = new WeakMap();
exports.default = Empresa;
