import { Module } from '@nestjs/common';
import { OfferAnalyzerModule } from '@/src/modules/offer-analyzer/offer-analyzer.module';

@Module({
  imports: [OfferAnalyzerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
