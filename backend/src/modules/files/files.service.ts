import { BadRequestException, Injectable } from '@nestjs/common';
import { FileAnalizerService } from './services/file-analizer/file-analizer.service';

@Injectable()
export class FilesService {
  constructor(private readonly fileAnalizerService: FileAnalizerService) {}

  async uploadFile(file: Express.Multer.File) {
    try {
      const rawText = await this.fileAnalizerService.readPdfFile(file);
      const cleanedText = this.cleanText(rawText);
      return { user_information: cleanedText };
    } catch (error) {
      throw new BadRequestException('Failed to read file');
    }
  }

  private cleanText(text: string): string {
    return text
      .replace(/[\n\r]+/g, ' ')
      .replace(/\s\s+/g, ' ')
      .trim();
  }
}
