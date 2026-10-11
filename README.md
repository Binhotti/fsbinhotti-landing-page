# FS Binhotti — Landing Page

Landing page em Next.js (App Router) para FS Binhotti Transporte e Terraplanagem.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Imagens

Os arquivos recebidos estão em `public/images/originals`. As versões otimizadas em WebP ficam em `public/images` e são usadas pela página. O logotipo novo, refeito em alta resolução, está em `public/images/brand/logo-premium.png`; a página usa sua versão `logo-premium.webp`. Para refazer a otimização após substituir uma foto, rode `npm run images`.

A foto `hero-editorial.png` é uma variação visual tratada para o destaque. As demais imagens WebP preservam as cenas originais, com ajustes leves de brilho, cor e nitidez. O logotipo novo é uma reconstrução visual gerada a partir da referência original; para impressão em grande formato, recomenda-se um arquivo vetorial revisado.

A foto `public/images/edited/obra-urbana-premium.png` é uma versão editorial em alta resolução da obra com o caminhão azul e a retroescavadeira. Sua versão WebP aparece no terceiro cartão da seção de projetos.

A faixa "Presença em cada etapa" usa `public/images/obra-corte-banner.webp`, gerada a partir de `public/images/edited/obra-corte-banner.png` com enquadramento horizontal e espaço para o texto.

O carrossel vertical da seção "Trabalho que ganha forma" está em `src/components/ui/carousel-03.tsx`. Para adicionar imagens depois, inclua um novo item no array `projects` em `src/app/page.tsx` com `src` e `title`.

## Contato

WhatsApp e Instagram estão configurados em `src/app/page.tsx`.
