import { gql } from 'apollo-server-koa'

export const File = gql`
  type File {
    id: String
    name: String
    domain: Domain
    description: String
  }
`
