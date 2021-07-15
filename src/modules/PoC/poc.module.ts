import { PoCService } from './services/poc.service';
import { PoCController } from './controllers/poc.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [PoCController],
  providers: [PoCService],
})
export class PoCModule {}
