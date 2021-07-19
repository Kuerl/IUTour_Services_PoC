import { FileManagerRepository } from './../repositories/filemanager.repository';
import { Injectable } from '@nestjs/common';
import { PoCRepository } from '../../PoC/repositories/poc.repository';
import { plainToClass } from 'class-transformer';
import { FileManagerEntity } from '../entities/filemanager.entity';

@Injectable()
export class FileManagerService {
  constructor(
    private fileManagerRepository: FileManagerRepository,
    private poCRepository: PoCRepository
  ) {}
  async getAllImage(user: string) {
    const userQuery = await this.poCRepository.findOne({
      where: { username: user },
    });
    console.log(userQuery);
    return this.fileManagerRepository.find({ where: { user: userQuery } });
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

  async updateImage(file: Express.Multer.File, image: string) {
    const imageInfor = plainToClass(FileManagerEntity, { id: file.filename });
    return this.fileManagerRepository.update({ id: image }, imageInfor);
  }

  async removeImage(image: string) {
    return this.fileManagerRepository.delete(image);
  }
}
