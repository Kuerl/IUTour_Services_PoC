import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileManagerService } from '../services/filemanager.service';
import { storageImage } from '../../../configs/config';
import { UpDto } from '../common/dtos/filemanager.dto';

@Controller('file')
export class FileManagerController {
  constructor(private fileManagerService: FileManagerService) {}

  @Get(':user')
  getAllImageByUser(@Param('user') user: string) {
    return this.fileManagerService.getAllImage(user);
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

  @Put(':image')
  @UseInterceptors(FileInterceptor('image', storageImage))
  updateImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('image') image: string
  ) {
    return this.fileManagerService.updateImage(file, image);
  }

  @Delete(':image')
  removeImage(@Param('image') image: string) {
    return this.fileManagerService.removeImage(image);
  }
}
