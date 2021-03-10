export class ContaBancaria {

    saldo: number

    constructor() {
        this.saldo = 0
    }

    consultar(): number {
        return this.saldo
    }

    depositar(valor: number): boolean {
        if (valor >= 0) {
            this.saldo += valor
            return true
        }

        return false
    }

    sacar(valor: number): boolean {
        if (valor >= 0 && this.saldo >= valor) {
            this.saldo -= valor
            return true
        }

        return false
    }
}