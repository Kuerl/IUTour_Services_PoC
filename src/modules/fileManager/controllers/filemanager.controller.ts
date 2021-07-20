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
import { storageImage, ApiFile } from '../../../configs/config';
import { UpDto } from '../common/dtos/filemanager.dto';
import {
  ApiTags,
  ApiOkResponse,
  ApiForbiddenResponse,
  ApiCreatedResponse,
  ApiConsumes,
} from '@nestjs/swagger';

@ApiTags('file')
@Controller('file')
export class FileManagerController {
  constructor(private fileManagerService: FileManagerService) {}

  @Get(':user')
  @ApiOkResponse({
    description: 'SUCCESSFULL RESPONSE: Get all images of a user.',
  })
  @ApiForbiddenResponse({ description: 'FORBIDDEN.' })
  getAllImageByUser(@Param('user') user: string) {
    return this.fileManagerService.getAllImage(user);
  }

  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiFile('image')
  @ApiCreatedResponse({ description: 'SUCCESSFULL RESPONSE: Create a file.' })
  @ApiForbiddenResponse({ description: 'FORBIDDEN.' })
  @UseInterceptors(FileInterceptor('image', storageImage))
  upImage(@UploadedFile() file: Express.Multer.File, @Body() body: UpDto) {
    return this.fileManagerService.upImage(file, body.user_id);
  }

  @Get(':image')
  @ApiOkResponse({
    description: 'SUCCESSFULL RESPONSE: Get an image by its id.',
  })
  @ApiForbiddenResponse({ description: 'FORBIDDEN.' })
  getImage(@Param('image') image: string, @Res() res) {
    return res.sendFile(image, { root: 'uploads/images' });
  }

  @Put(':image')
  @ApiConsumes('multipart/form-data')
  @ApiFile('image')
  @ApiOkResponse({ description: 'SUCCESSFULL RESPONSE: Update a file.' })
  @ApiForbiddenResponse({ description: 'FORBIDDEN.' })
  @UseInterceptors(FileInterceptor('image', storageImage))
  updateImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('image') image: string
  ) {
    return this.fileManagerService.updateImage(file, image);
  }

  @Delete(':image')
  @ApiOkResponse({ description: 'SUCCESSFULL RESPONSE: Delete a file.' })
  @ApiForbiddenResponse({ description: 'FORBIDDEN.' })
  removeImage(@Param('image') image: string) {
    return this.fileManagerService.removeImage(image);
  }
}
