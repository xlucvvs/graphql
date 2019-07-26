const { perfis } =  require('../../data/db')

function IndicePerfil(filtro) {
    if(!filtro) return -1

    const {id, nome} = filtro
    if(id) {
        return perfis
            .findIndex(p => p.id === id)
    } else if (nome) {
        return perfis
            .findIndex(p => p.nome == nome)
    }
    return -1
}
module.exports = {
    novoPerfil(_, { dados }) {
        const nomeExistente = perfis
            .some(p => p.nome === dados.nome)

        if(nomeExistente) {
            throw new Error ('Nome de Perfil já cadastrado')
        }

        const novo = {
            ...dados
        }

        perfis.push(novo)
        return novo
    },

    alterarPerfil(_, {filtro, dados}){
        const i = IndicePerfil(filtro)

        if( i < 0 ) return null

        perfis[i].id = dados.id
        perfis[i].nome = dados.nome

        return perfis[i]
    },
    
    excluirPerfil(_, { filtro }) {
        const i = IndicePerfil(filtro)

        if( i < 0 ) return null

        const excluidos = perfis.splice(i, 1)

        return excluidos ? excluidos[0] : null
    }
}