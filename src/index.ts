import { ContatoCsvDAO } from "./model/dao/ContatoCsvDAO"

const contatoDAO = new ContatoCsvDAO()
console.log(contatoDAO.recuperarContatos())