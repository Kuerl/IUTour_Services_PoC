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
import { UpDto } from '../common/dtos/filemanager.dto';

@Controller('upload')
export class FileManagerController {
  constructor(private fileManagerService: FileManagerService) {}

  @Get()
  getAllImage() {
    return this.fileManagerService.getAllImage();
  }

  @Post()
  @UseInterceptors(FileInterceptor('image', storageImage))
  upImage(@UploadedFile() file: Express.Multer.File, @Body() body: UpDto) {
    return this.fileManagerService.upImage(file, body.user_id);
  }

  @Get(':image')
  getImage(@Param('image') image: string, @Res() res) {
    return res.sendFile(image, { root: 'uploads/images' });
  }
}
