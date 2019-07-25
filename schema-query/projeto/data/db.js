const perfis = [
    {
        id: 1,
        tipo: 'COMUM',
    }, {
        id: 2,
        tipo: 'ADM',
    }
]

const usuarios = [
    {
        id: 1,
        nome: 'Lucas B Ribeiro',
        email: 'ribeiro@lucas.com',
        idade: 20,
        perfil_id: 2,
        status: 'ATIVO'
    }, {
        id: 2,
        nome: 'João Brito',
        email: 'joao@brito.com',
        idade: 19,
        perfil_id: 1,
        status: 'INATIVO'
    }, {
        id: 3,
        nome: 'Icaro Carvalho',
        email: 'carvalho@icaro.com',
        idade: 21,
        perfil_id: 1,
        status: 'BLOQUEADO'
    }
]

module.exports = { usuarios, perfis}