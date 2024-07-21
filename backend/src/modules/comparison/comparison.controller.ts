import { Body, Controller, Post } from '@nestjs/common';
import { ComparisonService } from './comparison.service';
import { JobOfferDto } from '@/src/modules/comparison/dtos';

@Controller('comparison')
export class ComparisonController {
  constructor(private readonly comparisonService: ComparisonService) {}

  @Post()
  async comparisonJobOffer(@Body() jobOffer: JobOfferDto) {
    return this.comparisonService.comparisonJobOffer(jobOffer);
  }
}
