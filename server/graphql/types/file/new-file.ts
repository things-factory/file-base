import { gql } from 'apollo-server-koa'

export const NewFile = gql`
  input NewFile {
    name: String!
    description: String
  }
`
