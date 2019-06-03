import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { File } from '../../../entities'

export const filesResolver = {
  async files(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(File).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}
