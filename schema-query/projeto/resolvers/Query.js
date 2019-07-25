const {usuarios, perfis} = require ('../data/db')

module.exports = {
    titulo() {
        return 'Purp Company!'
    },
    horaAtual() {
        return new Date
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Lucas',
            email: 'luquera@lucs.com',
            idade: 23,
            // salario_real pois vem do banco com esse nome e será resolvido com um resolver, logo acima
            salario_real: 1400,
            vip: true
        }
    },
    produtoEmDestaque() {
        return {
            nome: 'Camisa',
            preco: 50.00,
            desconto: 0.50
        }
    },
    numerosMegaSena(){
        const crecente = (a,b) => a - b
        return Array(6).fill(0)
        .map(n => parseInt(Math.random() * 60 + 1))
        .sort(crecente)
    },
    usuarios() {
        return usuarios
    },
    usuario(_, args) {
        const selecionados = usuarios
            .filter(u => u.id == args.id)
        return selecionados ? selecionados[0] : null
    },
    perfis(){
        return perfis
    },
    perfil(_, args) {
        const perfisselecionados = perfis
            .filter(p => p.id == args.id)
        return perfisselecionados ? perfisselecionados[0] : null
    }
}