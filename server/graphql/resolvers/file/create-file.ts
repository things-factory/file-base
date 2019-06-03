import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { File } from '../../../entities'

export const createFile = {
  async createFile(_, { file: attrs }) {
    const repository = getRepository(File)
    const newFile = {
      id: uuid(),
      ...attrs
    }

    return await repository.save(newFile)
  }
}
