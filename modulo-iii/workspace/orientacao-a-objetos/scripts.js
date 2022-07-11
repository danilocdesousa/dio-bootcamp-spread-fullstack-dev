"use strict";

class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(value) {
        this._saldo = value;
    }

    sacar(value) {
        if (value > this._saldo)
            return console.log("Saldo isuficiente.");
        this._saldo -= value;
        return this._saldo;
    }

    depositar(value) {
        this._saldo += value;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = "Conta Corrente";
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(value) {
        this._cartaoCredito = value;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = "Conta Poupança";
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = "Conta Universitária";
    }

    sacar(value) {
        if (value > 500)
            return console.log("Operação negada.");
        this._saldo -= value;
        return this._saldo;
    }
}

const minhaConta = new ContaCorrente(1, 456789, true);
console.log(minhaConta.saldo);

minhaConta.depositar(1000);
console.log(minhaConta.saldo);

minhaConta.sacar(600);
console.log(minhaConta.saldo);

minhaConta.sacar(600);
console.log(minhaConta.saldo);

const minhaContaPoupanca = new ContaPoupanca(1, 12345);
const minhaContaUniversitaria = new ContaUniversitaria(1, 34567);

minhaContaUniversitaria.depositar(1000);
minhaContaUniversitaria.sacar(600);
console.log(minhaContaUniversitaria.saldo);

minhaContaUniversitaria.sacar(400);
console.log(minhaContaUniversitaria.saldo);