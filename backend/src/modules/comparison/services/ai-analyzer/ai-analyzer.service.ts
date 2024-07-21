// eslint-disable-next-line @typescript-eslint/no-var-requires
const { streamText } = require('ai');
import { openai } from '@ai-sdk/openai';

import { Injectable } from '@nestjs/common';

import { USE_CASES } from '@/src/modules/comparison/constant';
import { JobOfferDto } from '@/src/modules/comparison/dtos';

@Injectable()
export class AiAnalyzerService {
  async openAIChat(prompt: JobOfferDto) {
    const { job_offer, user_information } = prompt;
    const { comparisonJob } = USE_CASES;

    const result = await streamText({
      model: openai('gpt-3.5-turbo-1106'),
      system: comparisonJob.prompt(job_offer),
      messages: [
        {
          role: 'user',
          content: `Este es mi perfil: ${JSON.stringify(user_information)}`,
        },
      ],
      ...comparisonJob.settings,
    });

    let fullResponse = '';
    for await (const delta of result.textStream) fullResponse += delta;

    return fullResponse;
  }
}
