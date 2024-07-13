import { IsString } from 'class-validator';

export class QueryExtractUrlDto {
  @IsString()
  url: string;
}
