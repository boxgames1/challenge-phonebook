import { ApolloServer } from 'apollo-server'
import { resolvers } from './schema'
import { createContext } from './context'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { query } from './typeDefs/query'
import { contact } from './typeDefs/contact'
import { mutation } from './typeDefs/mutation'

const schema = makeExecutableSchema({
  typeDefs: [query, contact, mutation],
  resolvers,
})

new ApolloServer({ schema, context: createContext }).listen(
  { port: 4000 },
  () => console.log(`🚀 Server ready at: http://localhost:4000 ⭐️⭐️⭐️⭐️`),
)
