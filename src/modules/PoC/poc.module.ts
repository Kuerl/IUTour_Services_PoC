import { PoCService } from './services/poc.service';
import { PoCController } from './controllers/poc.controller';
import { Module } from '@nestjs/common';
import { PoCRepository } from './repositories/poc.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PoCRepository])],
  controllers: [PoCController],
  providers: [PoCService],
})
export class PoCModule {}
