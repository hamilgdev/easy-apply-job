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
        user_profile: {
          profile: parsedResponse.user_profile.profile,
          description: parsedResponse.user_profile.description,
          skills: parsedResponse.user_profile.skills,
        },
        job_offer: {
          title: parsedResponse.job_offer.title,
          summary: parsedResponse.job_offer.summary,
          description: parsedResponse.job_offer.description,
          key_responsibilities: parsedResponse.job_offer.key_responsibilities,
          company_name: parsedResponse.job_offer.company_name,
          job_type: parsedResponse.job_offer.job_type,
        },
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
