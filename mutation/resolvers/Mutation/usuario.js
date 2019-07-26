const { usuarios, proximoId } =  require('../../data/db')

// Função para filtrar o Usuario de acordo com um parametro passado, podendo ser, email ou id.
function IndiceUsuario(filtro) {
    // se filtro não for valido (!) retorne -1
    if(!filtro) return -1
    // se houver um filtro valido, tire o id e o email de dentor do objeto filtro
    const { id, email } = filtro
    // se id for verdadeiro, ou seja, estiver setado, faça:
    if(id) {
        return usuarios
            .findIndex(u => u.id === id) // retorna usuario encontrado pelo id
    } // se id não for verdadeiro, faça: Se email for verdadeiro, ou seja, estiver setado, faça:
    else if(email) {
        return usuarios
            .findIndex(u => u.email === email) // retorna usuario encontrado pelo email
    } 
    // senão, retorna -1
    return -1
}

module.exports = {
    // Resolver para criar um NovoUsuario
    novoUsuario(_, { dados }) {
        // verifica se há algum emailexistente igual o email passado
        // pelo 'cliente' dentro dos usuarios
        const emailExistente = usuarios
            .some(u => u.email === dados.email)
        // se o email já estiver cadastro, retorne um erro
        if(emailExistente) {
            throw new Error('E-mail cadastrado')
        }
        // constante novo para criação do usuario
        const novo = {
            id: proximoId(), // proximoId() é o método definido em db.js
            ...dados,
            perfil_id: 1,
            status: 'ATIVO'
        }

        usuarios.push(novo) // insere o novo usuario em usuarios
        return novo // retorna o novo usuario
    },
    // Resolver para Excluir o Usuário
    excluirUsuario(_, { filtro }) {
        // Procura algum usuário com os parametros definidos na função 
        // IndiceUsuario
        const i = IndiceUsuario(filtro)

        // se o valor retornado for menor que 0, o usuário não existe
        if (i < 0) return null
        
        const excluidos = usuarios.splice(i, 1)
    
        return excluidos ? excluidos[0] : null
    }, 
    // Resolver para Alterar o Usuário
    alterarUsuario(_, { filtro, dados }){

        const i = IndiceUsuario(filtro)
        
        if ( i < 0) return null

        // Primeira forma de realizar as alterações

        /*
        const usuario = {
            ...usuarios[i],
            ...args
        }
        usuarios.splice(i, 1, usuario)
        
        return usuario
        */ 

        // Segunda forma de realizar as alterações
        usuarios[i].nome = dados.nome
        usuarios[i].email = dados.email
        if (dados.idade) {
            usuarios[i].idade = dados.idade
        }

        return usuarios[i]
    }
}