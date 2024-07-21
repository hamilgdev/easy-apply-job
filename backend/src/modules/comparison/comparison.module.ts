import { Module } from '@nestjs/common';
import { ComparisonService } from './comparison.service';
import { ComparisonController } from './comparison.controller';
import { AiAnalyzerService } from './services/ai-analyzer/ai-analyzer.service';

@Module({
  controllers: [ComparisonController],
  providers: [ComparisonService, AiAnalyzerService],
})
export class ComparisonModule {}
