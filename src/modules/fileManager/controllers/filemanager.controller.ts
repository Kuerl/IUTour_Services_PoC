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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileManagerService } from '../services/filemanager.service';
import { storageImage, ApiFile } from '../../../configs/config';
import {
  ApiTags,
  ApiOkResponse,
  ApiForbiddenResponse,
  ApiCreatedResponse,
  ApiConsumes,
} from '@nestjs/swagger';

@ApiTags('file')
@Controller('file')
@UsePipes(new ValidationPipe())
export class FileManagerController {
  constructor(private fileManagerService: FileManagerService) {}

  @Get(':user')
  @ApiOkResponse({
    description: 'SUCCESSFULL RESPONSE: Get all images of a user.',
  })
  @ApiForbiddenResponse({ description: 'FORBIDDEN.' })
  getAllImageByUser(@Param('user') user_id: number) {
    return this.fileManagerService.getAllImage(user_id);
  }

  @Post(':user')
  @ApiConsumes('multipart/form-data')
  @ApiFile('image')
  @ApiCreatedResponse({ description: 'SUCCESSFULL RESPONSE: Create a file.' })
  @ApiForbiddenResponse({ description: 'FORBIDDEN.' })
  @UseInterceptors(FileInterceptor('image', storageImage))
  upImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('user') user_id: number
  ) {
    return this.fileManagerService.upImage(file, user_id);
  }

  @Get('src/:image')
  @ApiOkResponse({
    description: 'SUCCESSFULL RESPONSE: Get an image by its id.',
  })
  @ApiForbiddenResponse({ description: 'FORBIDDEN.' })
  getImage(@Param('image') image: string, @Res() res: any) {
    return res.sendFile(image, { root: 'uploads/images' });
  }

  @Put('src/:user_id/:image')
  @ApiConsumes('multipart/form-data')
  @ApiFile('image')
  @ApiOkResponse({ description: 'SUCCESSFULL RESPONSE: Update a file.' })
  @ApiForbiddenResponse({ description: 'FORBIDDEN.' })
  @UseInterceptors(FileInterceptor('image', storageImage))
  updateImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('user_id') user_id: number,
    @Param('image') image: string
  ) {
    return this.fileManagerService.updateImage(file, image, user_id);
  }

  @Delete('src/:user_id/:image')
  @ApiOkResponse({ description: 'SUCCESSFULL RESPONSE: Delete a file.' })
  @ApiForbiddenResponse({ description: 'FORBIDDEN.' })
  removeImage(
    @Param('user_id') user_id: number,
    @Param('image') image: string
  ) {
    return this.fileManagerService.removeImage(image, user_id);
  }
}
