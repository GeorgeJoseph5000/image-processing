import { promises as fs, existsSync } from 'fs';
import path from 'path';
import sharp from 'sharp';
import ImageProperties from '../models/image-properties';
import * as dotenv from 'dotenv';
import createOutDir from './dir_handlers';

dotenv.config();

const imgDir = process.env.IMG_DIR || ''; 
const outDir = process.env.OUT_DIR || '';

export async function getImage(inputImagePath: string): Promise<Buffer | null> {
  if (existsSync(inputImagePath)) {
    try {
      const image = await fs.readFile(inputImagePath);
      return image;
    } catch (err) {
      return null;
    }
  }
  return null;
}

export async function resizeImg(imgProperties: ImageProperties): Promise<string | null> {
  const inputImage = path.resolve(__dirname, imgDir, `${imgProperties.filename}.jpg`);
  const outputImage = path.resolve(
    __dirname,
    outDir,
    `${imgProperties.filename}_${imgProperties.width || 'unset'}_${imgProperties.height || 'unset'}.jpg`
  );

  await createOutDir(path.resolve(__dirname, outDir));

  if (!existsSync(outputImage)) {
    const image = await getImage(inputImage);
    if (!image) return null;
    const sharpInstance = sharp(image);
    sharpInstance.resize(imgProperties.width || undefined, imgProperties.height || undefined);
    await fs.writeFile(outputImage, sharpInstance);
  }
  return outputImage;
}

export default resizeImg;
