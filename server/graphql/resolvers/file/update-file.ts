import { getRepository } from 'typeorm'
import { File } from '../../../entities'

export const updateFile = {
  async updateFile(_, { id, patch }) {
    const repository = getRepository(File)

    const file = await repository.findOne({ id })

    return await repository.save({
      ...file,
      ...patch
    })
  }
}
