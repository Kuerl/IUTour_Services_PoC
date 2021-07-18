import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { FileManagerEntity } from '../entities/filemanager.entity';

@Injectable()
@EntityRepository(FileManagerEntity)
export class FileManagerRepository extends Repository<FileManagerEntity> {}
