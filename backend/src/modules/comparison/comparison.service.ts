import { BadRequestException, Injectable } from '@nestjs/common';
import { JobOfferDto } from '@/src/modules/comparison/dtos';
import { AiAnalyzerService } from './services/ai-analyzer/ai-analyzer.service';

@Injectable()
export class ComparisonService {
  constructor(private readonly aiAnalyzerService: AiAnalyzerService) {}

  async comparisonJobOffer(jobOffer: JobOfferDto) {
    try {
      const analyzedJobOffer =
        await this.aiAnalyzerService.openAIChat(jobOffer);
      const formattedResponse = this.formatResponse(analyzedJobOffer);
      return { job_offer: formattedResponse };
    } catch (error) {
      console.error(error);
      throw new BadRequestException(
        'Failed to compare job offer with your profile',
      );
    }
  }

  private formatResponse(analyzedJobOffer: string) {
    try {
      const parsedResponse = JSON.parse(analyzedJobOffer);
      return {
        is_job_offer_adequate: parsedResponse.is_job_offer_adequate,
        tips: {
          profile:
            parsedResponse.tips.profile ||
            'Debes de mejorar tu perfil profesional',
          description:
            parsedResponse.tips.description ||
            'Debes de mejorar la descripción de tu perfil',
          skills:
            parsedResponse.tips.skills || 'Debes de mejorar tus habilidades',
          experience:
            parsedResponse.tips.experience || 'Debes de mejorar tu experiencia',
          education:
            parsedResponse.tips.education || 'Debes de mejorar tu educación',
        },
      };
    } catch (error) {
      console.error('Error parsing response:', error);
      throw new BadRequestException('Failed to format the AI response');
    }
  }
}
