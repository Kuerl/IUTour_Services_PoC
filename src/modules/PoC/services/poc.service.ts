import { Injectable } from '@nestjs/common';

@Injectable()
export class PoCService {
  getData() {
    return 'getData';
  }

  createData() {
    return 'createData';
  }

  getDataById() {
    return 'getDataById';
  }

  updateDataById() {
    return 'updateDataById';
  }

  removeDataById() {
    return 'removeDataById';
  }

  modifyDataById() {
    return 'modifyDataById';
  }
}
