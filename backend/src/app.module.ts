import { Module } from '@nestjs/common';
import { OfferAnalyzerModule } from '@/src/modules/offer-analyzer/offer-analyzer.module';
import { FilesModule } from './modules/files/files.module';
import { ComparisonModule } from './modules/comparison/comparison.module';

@Module({
  imports: [OfferAnalyzerModule, FilesModule, ComparisonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
