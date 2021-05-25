import { readFileSync } from "fs"
import { join } from "path"
import { Contato } from "../entity/Contato"

export abstract class ContatoDAO {

    protected conteudoStr: string

    constructor(nomeArquivo: string) {
        const caminhoArquivo = join(__dirname, '../..', 'data', nomeArquivo)
        this.conteudoStr = readFileSync(caminhoArquivo, 'utf-8')
    }

    abstract recuperarContatos(): Contato[]
}