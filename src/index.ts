import { ContaBancaria } from './models/ContaBancaria'

const conta1 = new ContaBancaria()
let saldoAtual: number = conta1.consultar()
console.log(`Saldo inicial: ${saldoAtual}`)
let deuCerto: boolean = conta1.depositar(50)
if (deuCerto) {
    saldoAtual = conta1.consultar()
    console.log(`Saldo atual: ${saldoAtual}`)
} else {
    console.log('Não foi possível realizar o depósito')
}

deuCerto = conta1.depositar(120)
if (deuCerto) {
    saldoAtual = conta1.consultar()
    console.log(`Saldo atual: ${saldoAtual}`)
} else {
    console.log('Não foi possível realizar o depósito')
}

deuCerto = conta1.sacar(130)
if (deuCerto) {
    saldoAtual = conta1.consultar()
    console.log(`Saldo atual: ${saldoAtual}`)
} else {
    console.log('Não foi possível realizar o saque')
}

deuCerto = conta1.sacar(100)
if (deuCerto) {
    saldoAtual = conta1.consultar()
    console.log(`Saldo atual: ${saldoAtual}`)
} else {
    console.log('Não foi possível realizar o saque')
}
