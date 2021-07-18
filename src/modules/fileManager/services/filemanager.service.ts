import { FileManagerRepository } from './../repositories/filemanager.repository';
import { Injectable } from '@nestjs/common';
import { FileManagerEntity } from '../entities/filemanager.entity';

@Injectable()
export class FileManagerService {
  constructor(private fileManagerRepository: FileManagerRepository) {}
  getAllImage() {
    return 'getAllImage';
  }

  getImage() {
    return 'image';
  }

  upImage(photoEntity: FileManagerEntity) {
    return this.fileManagerRepository.save(photoEntity);
  }
}
