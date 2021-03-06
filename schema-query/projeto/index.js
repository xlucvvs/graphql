const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers')

const SchemaPath = './schema/index.graphql'

const server = new ApolloServer({
    typeDefs: importSchema(SchemaPath),
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})