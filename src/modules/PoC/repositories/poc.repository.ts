import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { PoCEntity } from '../entities/poc.entity';

@Injectable()
@EntityRepository(PoCEntity)
export class PoCRepository extends Repository<PoCEntity> {}
