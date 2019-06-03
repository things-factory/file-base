import { gql } from 'apollo-server-koa'

export const FilePatch = gql`
  input FilePatch {
    name: String
    description: String
  }
`
