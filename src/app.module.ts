import { PoCModule } from './modules/PoC/poc.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/infrastructures/database/database.module';

@Module({
  imports: [DatabaseModule, PoCModule],
  controllers: [],
  providers: [],
})
export class MainModule {}
