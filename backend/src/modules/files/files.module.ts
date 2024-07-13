import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { FileAnalizerService } from '@/src/modules/files/services/file-analizer/file-analizer.service';

@Module({
  // imports: [
  //   MulterModule.register({
  //     storage: memoryStorage(),
  //   }),
  // ],
  controllers: [FilesController],
  providers: [FilesService, FileAnalizerService],
})
export class FilesModule {}
