import * as dotenv from 'dotenv';
dotenv.config();
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { ApiBody } from '@nestjs/swagger';

export const MainConfig = {
  mainPort: process.env.MAIN_PORT,
};

export const storageImage = {
  storage: diskStorage({
    destination: './uploads/images',
    filename: (req, file, cb) => {
      const filename: string = uuidv4();
      const extension: string = file.originalname.split('.')[1];
      cb(null, `${filename}.${extension}`);
    },
  }),
};

export const ApiFile =
  (fileName = 'file'): MethodDecorator =>
  (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          [fileName]: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    })(target, propertyKey, descriptor);
  };
