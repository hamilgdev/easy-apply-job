import { Injectable } from '@nestjs/common';
import pdfParse from 'pdf-parse';

@Injectable()
export class FileAnalizerService {
  async readPdfFile(file: Express.Multer.File) {
    const pdfData = await pdfParse(file.buffer);
    return pdfData.text;
  }
}
