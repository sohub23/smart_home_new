import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src', 'assets', 'smart home');

// These 3 logos still have background issues - process more aggressively
const filesToProcess = [
  { input: 'png-transparent-zigbee-full-logo-tech-companies.png', output: 'png-transparent-zigbee-full-logo-tech-companies-transparent.png' },
  { input: 'png-clipart-logo-scalable-graphics-z-wave-automation-blue-text.png', output: 'png-clipart-logo-scalable-graphics-z-wave-automation-blue-text-transparent.png' },
  { input: 'png-transparent-thread-internet-of-things-zigbee-ieee-802-15-4-nest-labs-others-text-trademark-logo.png', output: 'png-transparent-thread-internet-of-things-zigbee-ieee-802-15-4-nest-labs-others-text-trademark-logo-transparent.png' },
];

async function removeBackground(inputPath, outputPath) {
  try {
    const { data, info } = await sharp(inputPath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const pixels = Buffer.from(data);
    
    // Much more aggressive threshold - catch light grays too
    const threshold = 220;

    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];

      // Remove white, near-white, and light gray backgrounds
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

    console.log(`Done: ${path.basename(outputPath)}`);
  } catch (err) {
    console.error(`Error:`, err.message);
  }
}

async function main() {
  for (const file of filesToProcess) {
    const inputPath = path.join(assetsDir, file.input);
    const outputPath = path.join(assetsDir, file.output);
    await removeBackground(inputPath, outputPath);
  }
  console.log('All fixed!');
}

main();
