import { ContatoCsvDAO } from "./ContatoCsvDAO"
import { ContatoJsonDAO } from "./ContatoJsonDAO"
import { IContatoDAO } from "./IContatoDAO"

describe('Testa os DAOs de Contato', () => {

    test('Deve recuperar todos os contatos dos repositórios', () => {
        let contatoDAO: IContatoDAO = new ContatoJsonDAO()
        let contatos = contatoDAO.recuperarContatos()
        expect(contatos.length).toBe(100)

        contatoDAO = new ContatoCsvDAO()
        contatos = contatoDAO.recuperarContatos()
        expect(contatos.length).toBe(100)
    })
})