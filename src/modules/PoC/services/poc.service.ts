import { Injectable } from '@nestjs/common';
import { PoCEntity } from '../entities/poc.entity';
import { PoCRepository } from '../repositories/poc.repository';

@Injectable()
export class PoCService {
  constructor(private poCRepository: PoCRepository) {}
  getData(): Promise<PoCEntity[]> {
    return this.poCRepository.find({ select: ['id', 'username', 'status'] });
  }

  createData(dataEntity: PoCEntity): Promise<PoCEntity> {
    return this.poCRepository.save(dataEntity);
  }

  getDataById(PoCId: number): Promise<PoCEntity[]> {
    return this.poCRepository.find({ where: { id: PoCId } });
  }

  updateDataById(PoCId: number, dataEntity: PoCEntity) {
    return this.poCRepository.update({ id: PoCId }, dataEntity);
  }

  removeDataById(PoCId: number) {
    return this.poCRepository.delete(PoCId);
  }
}
