const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dirs = [
  path.join(__dirname, 'public', 'images'),
  path.join(__dirname, 'public', 'logo')
];

async function optimizeAll() {
  let totalOriginal = 0;
  let totalOptimized = 0;
  let count = 0;

  console.log("Starting universal image optimization...\n");

  for (const inputDir of dirs) {
    const files = fs.readdirSync(inputDir);
    
    for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      const inputPath = path.join(inputDir, file);
      const outputFilename = path.parse(file).name + '.webp';
      const outputPath = path.join(inputDir, outputFilename);
      
      // Skip if optimized version is newer than original
      if (fs.existsSync(outputPath)) {
        const inputStats = fs.statSync(inputPath);
        const outputStats = fs.statSync(outputPath);
        if (outputStats.mtime > inputStats.mtime) {
          // console.log(`Skipping ${file} (already up-to-date)`);
          continue;
        }
      }

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
        count++;

        console.log(` -> Optimized to ${(optimizedSize / 1024 / 1024).toFixed(2)} MB`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
    }
  }

  if (count > 0) {
    console.log(`\nOptimization Complete!`);
    console.log(`Images Processed: ${count}`);
    console.log(`Total Original Size: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Total Optimized Size: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Space Saved: ${((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(2)} MB (${((1 - totalOptimized/totalOriginal)*100).toFixed(1)}%)`);
  } else {
    console.log("\nNo new images to optimize.");
  }
}

optimizeAll();
