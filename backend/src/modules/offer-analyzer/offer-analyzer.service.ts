import { Injectable, NotFoundException } from '@nestjs/common';
import { QueryExtractUrlDto } from '@/src/modules/offer-analyzer/dto';
import { OpenGraphAnalizerService } from '@/src/modules/offer-analyzer/services/open-graph-analizer/open-graph-analizer.service';

@Injectable()
export class OfferAnalyzerService {
  constructor(
    private readonly openGraphAnalizerService: OpenGraphAnalizerService,
  ) {}

  async offerAnalyzerMetadata(queryExtractUrlDto: QueryExtractUrlDto) {
    try {
      const scrapedMetadata =
        await this.openGraphAnalizerService.scraper(queryExtractUrlDto);

      return scrapedMetadata;
    } catch (error) {
      console.log(error);

      throw new NotFoundException('Failed to scrape metadata');
    }
  }
}
