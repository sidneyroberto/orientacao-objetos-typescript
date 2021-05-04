import { Contato } from "../entity/Contato"

export interface IContatoDAO {
    recuperarContatos(): Contato[]
}