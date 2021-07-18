import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileManagerService } from '../services/filemanager.service';
import { storageImage } from '../../../configs/config';
import { plainToClass } from 'class-transformer';
import { FileManagerEntity } from '../entities/filemanager.entity';

@Controller('upload')
export class FileManagerController {
  constructor(private fileManagerService: FileManagerService) {}

  @Get()
  getAllImage() {
    return this.fileManagerService.getAllImage();
  }

  @Post()
  @UseInterceptors(FileInterceptor('image', storageImage))
  upImage(@UploadedFile() file: Express.Multer.File, @Body() body) {
    const bodyPaid = {
      id: file.filename.split('.')[0],
      user_id: body.user_id,
    };
    console.log(bodyPaid);
    const photoEntity = plainToClass(FileManagerEntity, bodyPaid);
    console.log(photoEntity);
    return this.fileManagerService.upImage(photoEntity);
  }

  @Get(':image')
  getImage(@Param('image') image: string, @Res() res) {
    return res.sendFile(image, { root: 'uploads/images' });
  }
}
