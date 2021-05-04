import { writeFileSync } from 'fs'
import { join } from 'path'
import {
    setLocale,
    name,
    phone,
    internet,
    date
} from 'faker'

setLocale('pt_BR')

const contatos = []
let linhasCSV = ''
const numeroContatos = 100
for (let i = 0; i < numeroContatos; i++) {
    const obj = {
        nome: name.findName(),
        telefone: phone.phoneNumber(),
        email: internet.email(),
        dataNascimento: date.past()
    }

    contatos.push(obj)
    const linha = `${obj.nome},${obj.telefone},${obj.email},${obj.dataNascimento}`
    linhasCSV += linha + '\n'
}

const caminhoDiretorioArquivos = join(__dirname, 'data')
const strJson = JSON.stringify(contatos)
const caminhoArquivoJSON = join(caminhoDiretorioArquivos, 'contatos.json')
writeFileSync(caminhoArquivoJSON, strJson)

const caminhoArquivoCSV = join(caminhoDiretorioArquivos, 'contatos.csv')
writeFileSync(caminhoArquivoCSV, linhasCSV)
console.log('Arquivos gravados')