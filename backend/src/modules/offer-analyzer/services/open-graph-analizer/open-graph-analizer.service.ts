import ogs from 'open-graph-scraper';
import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';

import { Injectable } from '@nestjs/common';
import {
  QueryExtractUrlDto,
  ScrapedMetadataDto,
} from '@/src/modules/offer-analyzer/dto';

const window = new JSDOM('').window;
const purify = DOMPurify(window);

@Injectable()
export class OpenGraphAnalizerService {
  async scraper(
    queryExtractUrlDto: QueryExtractUrlDto,
  ): Promise<ScrapedMetadataDto> {
    try {
      const { url } = queryExtractUrlDto;
      const options = { url };
      const data = await ogs(options);

      const { error, result } = data;
      const jsonLD = result?.jsonLD;
      const parseData = jsonLD?.[0] as any | undefined;

      if (error) throw new Error('Error scraping metadata');

      const scrapedMetadata: ScrapedMetadataDto = {
        title: purify.sanitize(result.ogTitle) || '',
        summary: purify.sanitize(result.ogDescription) || '',
        description: purify.sanitize(parseData?.description) || '',
        image_url:
          result.ogImage && result.ogImage.length > 0
            ? purify.sanitize(result.ogImage[0].url)
            : '',
        provider_url: purify.sanitize(result.ogUrl) || '',
      };

      return scrapedMetadata;
    } catch (error) {
      throw new Error(error);
    }
  }
}
