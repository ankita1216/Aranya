const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public', 'images');

async function processImages() {
  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    if (file.startsWith('UNIT-') && file.toLowerCase().endsWith('.jpg')) {
      const inputPath = path.join(inputDir, file);
      const outputFilename = file.substring(0, file.length - 4) + '.webp';
      const outputPath = path.join(inputDir, outputFilename);
      
      console.log(`Processing ${file}...`);
      try {
        // We use limitInputPixels to prevent sharp from throwing on huge images
        await sharp(inputPath, { limitInputPixels: false })
          .resize({ width: 2000, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outputPath);
        console.log(`Successfully converted to ${outputFilename}`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
}

processImages();
