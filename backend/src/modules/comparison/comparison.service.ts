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
      return { job_comparison: formattedResponse };
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
          username: parsedResponse.user_profile.username,
          role: parsedResponse.user_profile.role,
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
          salary: parsedResponse.job_offer.salary,
        },
        recommendations: parsedResponse.recommendations,
        improvements: parsedResponse.improvements,
        tips: {
          profile: parsedResponse.tips.profile,
          description: parsedResponse.tips.description,
          skills: parsedResponse.tips.skills,
          experience: parsedResponse.tips.experience,
          education: parsedResponse.tips.education,
        },
      };
    } catch (error) {
      console.error('Error parsing response:', error);
      throw new BadRequestException('Failed to format the AI response');
    }
  }
}
