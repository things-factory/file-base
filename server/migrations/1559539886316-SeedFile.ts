import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Domain } from '@things-factory/shell'
import { File } from '../entities'

const SEED = []

export class SeedFile1559539886316 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(File)
    const domainRepository = getRepository(Domain)
    const domain = await domainRepository.findOne({
      name: 'SYSTEM'
    })

    try {
      SEED.forEach(async file => {
        await repository.save({
          ...file,
          domain
        })
      })
    } catch (e) {
      console.error(e)
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(File)
    SEED.reverse().forEach(async file => {
      let record = await repository.findOne({ filename: file.filename })
      await repository.remove(record)
    })
  }
}
