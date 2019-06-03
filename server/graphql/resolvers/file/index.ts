import { fileResolver } from './file'
import { filesResolver } from './files'

import { updateFile } from './update-file'
import { createFile } from './create-file'
import { deleteFile } from './delete-file'

export const Query = {
  ...filesResolver,
  ...fileResolver
}

export const Mutation = {
  ...updateFile,
  ...createFile,
  ...deleteFile
}
