import { IsObject, IsString } from 'class-validator';

export class JobOfferDto {
  @IsObject()
  job_offer: {
    title: string;
    summary: string;
    description: string;
  };

  @IsString()
  user_information: string;
}
