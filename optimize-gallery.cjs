const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public', 'images');

async function processGallery() {
  const files = fs.readdirSync(inputDir);
  
  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const file of files) {
    // Only target new gallery images, avoid UNIT-* and hero* files, and existing webp files
    if (
      !file.startsWith('UNIT-') && 
      !file.startsWith('hero') && 
      !file.startsWith('floor_plan') && 
      (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg'))
    ) {
      const inputPath = path.join(inputDir, file);
      const outputFilename = path.parse(file).name + '.webp';
      const outputPath = path.join(inputDir, outputFilename);
      
      const stats = fs.statSync(inputPath);
      const originalSize = stats.size;
      totalOriginal += originalSize;

      console.log(`Processing ${file}... (${(originalSize / 1024 / 1024).toFixed(2)} MB)`);
      try {
        await sharp(inputPath, { limitInputPixels: false })
          .resize({ width: 2000, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outputPath);
        
        const newStats = fs.statSync(outputPath);
        const optimizedSize = newStats.size;
        totalOptimized += optimizedSize;

        console.log(` -> Optimized to ${(optimizedSize / 1024 / 1024).toFixed(2)} MB`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }

  console.log(`\nOptimization Complete!`);
  console.log(`Total Original Size: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total Optimized Size: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Space Saved: ${((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(2)} MB (${((1 - totalOptimized/totalOriginal)*100).toFixed(1)}%)`);
}

processGallery();
