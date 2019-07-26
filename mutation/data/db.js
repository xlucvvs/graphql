// aqui criaremos uma função para gerar IDS automaticamente 
let id = 3
function proximoId() {
    return id = id + 1
}

// aqui dizemos que existem os tipos de perfil comum e administrador, com os ids 1 e 1 respectivamente
const perfis = [
    { id: 1, nome: 'comum' },
    { id: 2, nome: 'administrador' }
]

// aqui dizemos que existem usuarios, onde cada usuario possui os dados id, nome, email, idade, perfil_id e status
const usuarios = [{
    id: 1,
    nome: 'João Silva',
    email: 'jsilva@zemail.com',
    idade: 29,
    perfil_id: 1,
    status: 'ATIVO'
}, {
    id: 2,
    nome: 'Rafael Junior',
    email: 'rafajun@wemail.com',
    idade: 31,
    perfil_id: 2,
    status: 'INATIVO'
}, {
    id: 3,
    nome: 'Daniela Smith',
    email: 'danismi@umail.com',
    idade: 24,
    perfil_id: 1,
    status: 'BLOQUEADO'
}]

module.exports = { usuarios, perfis, proximoId } // aqui exportamos os usuarios, os perfis e inclusive a função proximoId
// para que possamos utiliza-los em outros locais.