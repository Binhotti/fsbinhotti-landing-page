import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const originals = path.join(root, 'public', 'images', 'originals');
const output = path.join(root, 'public', 'images');
await mkdir(output, { recursive: true });

const images = [
  ['obra-urbana-caminhao-azul.png', 'obra-urbana-caminhao-azul.webp'],
  ['obra-entrada.png', 'obra-entrada.webp'],
  ['maquinas-estacionadas.png', 'maquinas-estacionadas.webp'],
  ['obra-acesso.png', 'obra-acesso.webp'],
  ['obra-corte-terreno.png', 'obra-corte-terreno.webp'],
  ['obra-drenagem.png', 'obra-drenagem.webp'],
  ['obra-frota.png', 'obra-frota.webp'],
  ['obra-escavacao.png', 'obra-escavacao.webp'],
  ['obra-terreno-residencial.png', 'obra-terreno-residencial.webp'],
  ['obra-transporte.png', 'obra-transporte.webp'],
  ['obra-carga.png', 'obra-carga.webp'],
];

for (const [source, destination] of images) {
  const input = sharp(path.join(originals, source)).rotate();
  const pipeline = input.resize({ width: 1600, withoutEnlargement: true }).modulate({ saturation: 1.07, brightness: 1.02 }).sharpen({ sigma: 0.65 }).webp({ quality: 85, effort: 6 });
  await pipeline.toFile(path.join(output, destination));
}

await sharp(path.join(output, 'brand', 'logo-premium.png'))
  .resize({ width: 1200, withoutEnlargement: true })
  .webp({ quality: 95, effort: 6 })
  .toFile(path.join(output, 'logo-premium.webp'));

await sharp(path.join(output, 'edited', 'obra-urbana-premium.png'))
  .resize({ width: 1600, withoutEnlargement: true })
  .webp({ quality: 88, effort: 6 })
  .toFile(path.join(output, 'obra-urbana-premium.webp'));

await sharp(path.join(output, 'edited', 'obra-corte-banner.png'))
  .resize({ width: 1920, withoutEnlargement: true })
  .webp({ quality: 90, effort: 6 })
  .toFile(path.join(output, 'obra-corte-banner.webp'));

await sharp(path.join(originals, 'hero-editorial.png'))
  .resize({ width: 1920, withoutEnlargement: true })
  .webp({ quality: 88, effort: 6 })
  .toFile(path.join(output, 'hero-editorial.webp'));

console.log(`Processed ${images.length + 4} images.`);
