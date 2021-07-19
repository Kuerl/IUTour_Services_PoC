import { FileManagerRepository } from './../repositories/filemanager.repository';
import { Injectable } from '@nestjs/common';
import { PoCRepository } from '../../PoC/repositories/poc.repository';

@Injectable()
export class FileManagerService {
  constructor(
    private fileManagerRepository: FileManagerRepository,
    private poCRepository: PoCRepository
  ) {}
  getAllImage() {
    return 'getAllImage';
  }

  getImage() {
    return 'image';
  }

  async upImage(file: Express.Multer.File, user_id: number) {
    const userQuery = await this.poCRepository.findOne({
      where: { id: user_id },
    });
    const newPhotoEntity = this.fileManagerRepository.create({
      id: file.filename,
    });
    newPhotoEntity.user = userQuery;
    return await this.fileManagerRepository.save(newPhotoEntity);
  }
}
