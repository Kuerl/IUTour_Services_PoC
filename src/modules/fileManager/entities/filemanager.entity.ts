import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { PoCEntity } from '../../PoC/entities/poc.entity';

@Entity('photo')
export class FileManagerEntity {
  @PrimaryColumn({ nullable: false, unique: true })
  id: string;

  // @Column({ nullable: false })
  @ManyToOne(() => PoCEntity, (user) => user.fileManager)
  user: PoCEntity;
}
