import { PoCService } from './../services/poc.service';
import {
  Body,
  Param,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PoCDto } from '../common/dtos/poc.dto';
import { plainToClass } from 'class-transformer';
import { PoCEntity } from '../entities/poc.entity';
import {
  ApiTags,
  ApiOkResponse,
  ApiForbiddenResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';

@ApiTags('poc')
@Controller('poc')
@UsePipes(new ValidationPipe())
export class PoCController {
  constructor(private poCService: PoCService) {}

  @Get()
  @ApiOkResponse({ description: 'SUCCESSFULL RESPONSE: Get all users.' })
  @ApiForbiddenResponse({ description: 'FORBIDDEN.' })
  getData() {
    return this.poCService.getData();
  }

  @Post()
  @ApiCreatedResponse({ description: 'SUCCESSFULL RESPONSE: Create a user.' })
  @ApiForbiddenResponse({ description: 'FORBIDDEN.' })
  createData(@Body() data: PoCDto) {
    const dataEntity = plainToClass(PoCEntity, data);
    return this.poCService.createData(dataEntity);
  }

  @Get(':id')
  @ApiOkResponse({ description: 'SUCCESSFULL RESPONSE: Get a user by id.' })
  @ApiForbiddenResponse({ description: 'FORBIDDEN.' })
  getDataById(@Param('id') PoCId: number) {
    return this.poCService.getDataById(PoCId);
  }

  @Put(':id')
  @ApiOkResponse({ description: 'SUCCESSFULL RESPONSE: Update a user by id.' })
  @ApiForbiddenResponse({ description: 'FORBIDDEN.' })
  updateDataById(@Param('id') PoCId: number, @Body() data: PoCDto) {
    const dataEntity = plainToClass(PoCEntity, data);
    return this.poCService.updateDataById(PoCId, dataEntity);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'SUCCESSFULL RESPONSE: Delete a user by id.' })
  @ApiForbiddenResponse({ description: 'FORBIDDEN.' })
  removeDataById(@Param('id') PoCId: number) {
    return this.poCService.removeDataById(PoCId);
  }
}
