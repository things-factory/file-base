import { Entity, Index, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Domain, DomainBaseEntity } from '@things-factory/shell'

@Entity('files')
@Index('ix_file_0', (file: File) => [file.domain, file.filename, file.mimetype], { unique: true })
export class File extends DomainBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text')
  filename: string

  @Column('text')
  mimetype: string

  @Column('text')
  encoding: string

  @Column('text')
  path: string

  @Column('text', {
    nullable: true
  })
  description: string
}
