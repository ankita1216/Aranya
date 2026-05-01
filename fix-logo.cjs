const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'images', 'RANG HOMES-New1.jpg');
const outputPath = path.join(__dirname, 'public', 'images', 'RANG HOMES-New1.webp');

async function fixLogo() {
  console.log("Fixing logo transparency...");
  try {
    // We use a threshold to make white pixels transparent
    // Since it's a clean logo, we can assume white is (255, 255, 255)
    await sharp(inputPath)
      .ensureAlpha()
      .unflatten()
      .composite([{
        input: Buffer.from([255, 255, 255, 255]),
        raw: { width: 1, height: 1, channels: 4 },
        blend: 'dest-out',
        gravity: 'centre'
      }]) // This is not the right way to do chroma key in sharp easily
      // Better way: use neg-alpha or similar, but sharp doesn't have a simple "white to alpha"
      // However, we can use a trick: invert, then use as alpha channel
      .toFormat('webp')
      .toFile(outputPath);
      
    // Actually, a simpler way in Node without complex sharp logic is hard.
    // Let's try to just use the original without the white-block filter for now,
    // or better, I'll just remove the 'invert brightness-0' classes in FooterSection.jsx
    // and let it show its colors. It might look better than a white block.
    
    console.log("Logo fixed (re-converted without extra filters).");
  } catch (err) {
    console.error("Error fixing logo:", err);
  }
}

// Re-running the standard optimization for it without forcing a white block
async function simpleOptimize() {
  await sharp(inputPath)
    .resize({ width: 500 }) // Logo doesn't need to be 2000px
    .webp({ quality: 90 })
    .toFile(outputPath);
  console.log("Logo optimized to WebP.");
}

simpleOptimize();
