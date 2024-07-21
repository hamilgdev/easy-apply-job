// enums

export enum OPEN_AI_TYPES {
  CHAT = 'chat',
}

// types

export type OpenAITypes = (typeof OPEN_AI_TYPES)[keyof typeof OPEN_AI_TYPES];

export type PromptKey = 'comparisonJob';

export type PromptType = {
  prompt: (jobOffer: {
    title: string;
    summary: string;
    description: string;
  }) => string;
  settings: {
    maxTokens: number;
    temperature?: number;
    maxRetries?: number;
  };
};

export type PromptObject = {
  [key in PromptKey]: PromptType;
};
