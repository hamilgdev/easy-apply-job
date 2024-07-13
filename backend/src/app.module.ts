import { Module } from '@nestjs/common';
import { OfferAnalyzerModule } from '@/src/modules/offer-analyzer/offer-analyzer.module';
import { FilesModule } from './modules/files/files.module';

@Module({
  imports: [OfferAnalyzerModule, FilesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
