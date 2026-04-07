import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src', 'assets', 'smart home');

const filesToProcess = [
  'Amazon-alexa-logo-vector.jpg',
  'Apple_HomeKit_logo.svg.png',
  'home-logo.png',
  'levant-SMART-THINGS-541517019.avif',
  'matter-icon-logo-png_seeklogo-477960.png',
  'png-clipart-logo-scalable-graphics-z-wave-automation-blue-text.png',
  'png-transparent-thread-internet-of-things-zigbee-ieee-802-15-4-nest-labs-others-text-trademark-logo.png',
  'png-transparent-zigbee-full-logo-tech-companies.png',
];

async function removeWhiteBackground(inputPath, outputPath) {
  try {
    const { data, info } = await sharp(inputPath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const pixels = Buffer.from(data);
    const threshold = 235;

    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];

      if (r >= threshold && g >= threshold && b >= threshold) {
        pixels[i + 3] = 0;
      }
    }

    await sharp(pixels, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4,
      },
    })
      .png()
      .toFile(outputPath);

    console.log(`Done: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
  } catch (err) {
    console.error(`Error ${path.basename(inputPath)}:`, err.message);
  }
}

async function main() {
  for (const file of filesToProcess) {
    const inputPath = path.join(assetsDir, file);

    if (!fs.existsSync(inputPath)) {
      console.log(`Not found: ${file}`);
      continue;
    }

    const baseName = path.parse(file).name;
    const outputPath = path.join(assetsDir, `${baseName}-transparent.png`);

    await removeWhiteBackground(inputPath, outputPath);
  }

  console.log('All done!');
}

main();
