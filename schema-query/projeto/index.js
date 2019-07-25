const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    scalar Date

    type Produto {
        nome : String!
        preco : Float!
        desconto : Float
        precoComDesconto : Float
    }

    type Usuario {
        id: ID!
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
        random: String
    }

    # Pontos de entrada da API
    type Query {
        titulo: String!
        horaAtual: Date!
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
        numerosMegaSena: [Int!]!
    }
`

const resolvers = {
    Produto: {
        precoComDesconto(produto) {
            if(produto.desconto) {
                return (produto.preco * (1 - produto.desconto))
            } else {
                return produto.preco
            }
        }
    },
    Usuario: {
        // resolver para resolver o tipo de dado que vem do banco para o modelo graphql
        salario(usuario) {
            return usuario.salario_real
        },
        random(usuario) {
            return 'randomico a ser resolvido'
        }
    },
    Query: {
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
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})