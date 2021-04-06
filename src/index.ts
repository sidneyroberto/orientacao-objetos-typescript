import { ContaBancaria } from './models/ContaBancaria'

const conta1 = new ContaBancaria()
conta1.depositar(500)
conta1.sacar(120)
console.log(conta1.consultar())