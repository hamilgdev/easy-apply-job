import { Module } from '@nestjs/common';
import { OfferAnalyzerService } from './offer-analyzer.service';
import { OfferAnalyzerController } from './offer-analyzer.controller';
import { OpenGraphAnalizerService } from '@/src/modules/offer-analyzer/services/open-graph-analizer/open-graph-analizer.service';

@Module({
  imports: [],
  controllers: [OfferAnalyzerController],
  providers: [OfferAnalyzerService, OpenGraphAnalizerService],
})
export class OfferAnalyzerModule {}
