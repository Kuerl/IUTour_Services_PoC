import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FileManagerEntity } from '../../fileManager/entities/filemanager.entity';

@Entity('PoC')
export class PoCEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  username: string;

  @Column()
  status: string;

  @OneToMany(() => FileManagerEntity, (fileManager) => fileManager.user)
  fileManager: FileManagerEntity[];
}
