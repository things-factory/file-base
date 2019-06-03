import { File } from './file'
import { NewFile } from './new-file'
import { FilePatch } from './file-patch'
import { FileList } from './file-list'
import { Filter, Pagination, Sorting } from '@things-factory/shell'

export const Mutation = `
  createFile (
    file: NewFile!
  ): File

  updateFile (
    id: String!
    patch: FilePatch!
  ): File

  deleteFile (
    id: String!
  ): File

  publishFile (
    id: String!
  ): File
`

export const Query = `
  files(filters: [Filter], pagination: Pagination, sortings: [Sorting]): FileList
  file(id: String!): File
`

export const Types = [Filter, Pagination, Sorting, File, NewFile, FilePatch, FileList]
