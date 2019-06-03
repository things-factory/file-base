import { gql } from 'apollo-server-koa'

export const FileList = gql`
  type FileList {
    items: [File]
    total: Int
  }
`
