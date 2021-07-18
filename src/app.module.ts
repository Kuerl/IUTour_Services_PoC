import { PoCModule } from './modules/PoC/poc.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/infrastructures/database/database.module';
import { FileManagerModule } from './modules/fileManager/filemanager.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [DatabaseModule, PoCModule, FileManagerModule],
  controllers: [],
  providers: [],
})
export class MainModule {}
