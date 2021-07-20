import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileManagerRepository } from './repositories/filemanager.repository';
import { FileManagerService } from './services/filemanager.service';
import { FileManagerController } from './controllers/filemanager.controller';
import { MulterModule } from '@nestjs/platform-express';
import { PoCRepository } from '../PoC/repositories/poc.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([FileManagerRepository, PoCRepository]),
    MulterModule.register({ dest: './uploads/images' }),
  ],
  controllers: [FileManagerController],
  providers: [FileManagerService],
})
export class FileManagerModule {}
