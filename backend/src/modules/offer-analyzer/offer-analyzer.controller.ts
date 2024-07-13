import { Controller, Get, Query } from '@nestjs/common';
import { OfferAnalyzerService } from './offer-analyzer.service';
import { QueryExtractUrlDto } from '@/src/modules/offer-analyzer/dto';

@Controller('offer-analyzer')
export class OfferAnalyzerController {
  constructor(private readonly offerAnalyzerService: OfferAnalyzerService) {}

  @Get()
  async queryExtractUrl(@Query() queryExtractUrlDto: QueryExtractUrlDto) {
    return this.offerAnalyzerService.offerAnalyzerMetadata(queryExtractUrlDto);
  }
}
