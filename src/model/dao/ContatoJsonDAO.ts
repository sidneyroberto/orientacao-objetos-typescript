import { Contato } from '../entity/Contato'
import { IContatoDAO } from './IContatoDAO'
import { join } from 'path'
import { readFileSync } from 'fs'

export class ContatoJsonDAO implements IContatoDAO {

    private _caminhoArquivo: string

    constructor() {
        this._caminhoArquivo = join(__dirname, '../..', 'data', 'contatos.json')
    }

    recuperarContatos(): Contato[] {
        const conteudoStr = readFileSync(this._caminhoArquivo, 'utf-8')
        const listaObj: any[] = JSON.parse(conteudoStr)
        const contatos = listaObj.map(obj => new Contato(
            obj.nome,
            obj.telefone,
            obj.email,
            new Date(obj.dataNascimento)
        ))

        return contatos
    }
}