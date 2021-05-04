import { Contato } from "./Contato"

describe('Testa o modelo de Contato', () => {

    test('Deve criar um novo objeto de contato com os atributos válidos', () => {
        const contato = new Contato(
            'Sidney Sousa',
            '+55 (67) 8898-6594',
            'sidney@email.com',
            new Date('1999-7-15')
        )
        expect(contato.nome).toBe('Sidney Sousa')
        expect(contato.telefone).toBe('+55 (67) 8898-6594')
        expect(contato.email).toBe('sidney@email.com')
        expect(contato.dataNascimento).toStrictEqual(new Date('1999-7-15'))
    })
})