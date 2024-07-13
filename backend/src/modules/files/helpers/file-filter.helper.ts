import { BadRequestException } from '@nestjs/common';

export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: (error: Error | null, acceptFile: boolean | undefined) => void,
) => {
  if (!file) return cb(new BadRequestException('No file provided'), false);

  if (!file.mimetype.match(/\/(pdf)$/))
    return cb(new BadRequestException('Only pdf files are allowed!'), false);
  cb(null, true);
};
