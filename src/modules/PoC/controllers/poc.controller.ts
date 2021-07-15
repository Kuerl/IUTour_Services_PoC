import { PoCService } from './../services/poc.service';
import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('poc')
export class PoCController {
  constructor(private poCService: PoCService) {}

  @Get()
  getData() {
    return this.poCService.getData();
  }

  @Post()
  createData() {
    return this.poCService.createData();
  }

  @Get(':id')
  getDataById() {
    return this.poCService.getDataById();
  }

  @Put(':id')
  updateDataById() {
    return this.poCService.updateDataById();
  }

  @Delete(':id')
  removeDataById() {
    return this.poCService.removeDataById();
  }

  @Patch(':id')
  modifyDataById() {
    return this.poCService.modifyDataById();
  }
}
