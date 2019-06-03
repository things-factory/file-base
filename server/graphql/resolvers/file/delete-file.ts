import { getRepository } from 'typeorm'
import { File } from '../../../entities'

export const deleteFile = {
  async deleteFile(_, { id }) {
    const repository = getRepository(File)

    return await repository.delete(id)
  }
}
