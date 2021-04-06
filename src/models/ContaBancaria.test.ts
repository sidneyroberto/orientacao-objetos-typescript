import { ContaBancaria } from "./ContaBancaria"

describe('Testa as funcionalidades de uma conta bancária', () => {

    test('Deve criar uma conta bancária com número e agência padrões', () => {
        const conta = new ContaBancaria()
        expect(conta.agencia).toBe('0000-0')
        expect(conta.numero).toBe('00000-0')
    })

    test('Deve criar uma conta bancária com o número e a agência especificados', () => {
        const numero = '01234-5'
        const agencia = '0123-4'
        const conta = new ContaBancaria(numero, agencia)
        expect(conta.agencia).toBe(agencia)
        expect(conta.numero).toBe(numero)
    })

    test('O saldo de uma conta recém criada deve ser igual a zero', () => {
        const conta = new ContaBancaria()
        expect(conta.consultar()).toBe(0)
    })

    test('O saldo deve ser alterado corretamente após se realizar os depósitos', () => {
        const conta = new ContaBancaria()
        conta.depositar(25)
        conta.depositar(50)
        conta.depositar(100)
        expect(conta.consultar()).toBe(175)
    })

    test('O saldo deve ser alterado corretamente após se realizar os saques', () => {
        const conta = new ContaBancaria()
        conta.depositar(500)
        conta.sacar(150.54)
        expect(conta.consultar().toFixed(2)).toBe('349.46')
    })
})