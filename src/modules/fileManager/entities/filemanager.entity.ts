import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { PoCEntity } from '../../PoC/entities/poc.entity';

@Entity('photo')
export class FileManagerEntity {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => PoCEntity, (user) => user.fileManager)
  user: PoCEntity;
}
