// Index da Pasta Mutation é o arquivo principal por onde a aplicação é iniciada

const { ApolloServer, gql } = require('apollo-server') // importamos o servidor Apollo Server e GraphQL
const { importSchema } = require('graphql-import') // graphql-import se torna necessário para realizar os imports de
// arquivos que utilizaremos para nossos schemas, resolvers e etc
const resolvers = require('./resolvers') // aqui importamos nosso resolver, o arquivo não é referenciado, pois, 
// dentro da pasta resolvers há um index, logo, se acessa os resolvers por lá.

const schemaPath = './schema/index.graphql' // aqui importamos nosso schema, onde o arquivo index.graphql é o primeiro
// arquivo a ser acessado que nos direcionará para os outros schemas.

// Referenciamos então o nosso Servidor
const server = new ApolloServer({ 
    typeDefs: importSchema(schemaPath), // typeDefs é onde seria inserido nossos schemas, utilizamos o schemaPath para referenciar
    // o endereço, mas poderiamos simplesmente referencia-lo aqui.
    resolvers // resolvers irá acessar o import acima, onde endereçamos onde estão nossos resolvers.
})

// Aqui, o servidor é iniciado
server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})