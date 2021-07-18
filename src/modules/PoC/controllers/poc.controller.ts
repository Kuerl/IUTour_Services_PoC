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

@Controller('poc')
@UsePipes(new ValidationPipe())
export class PoCController {
  constructor(private poCService: PoCService) {}

  @Get()
  getData() {
    return this.poCService.getData();
  }

  @Post()
  createData(@Body() data: PoCDto) {
    const dataEntity = plainToClass(PoCEntity, data);
    return this.poCService.createData(dataEntity);
  }

  @Get(':id')
  getDataById(@Param('id') PoCId: number) {
    console.log(PoCId);
    return this.poCService.getDataById(PoCId);
  }

  @Put(':id')
  updateDataById(@Param('id') PoCId: number, @Body() data: PoCDto) {
    const dataEntity = plainToClass(PoCEntity, data);
    return this.poCService.updateDataById(PoCId, dataEntity);
  }

  @Delete(':id')
  removeDataById(@Param('id') PoCId: number) {
    return this.poCService.removeDataById(PoCId);
  }
}
