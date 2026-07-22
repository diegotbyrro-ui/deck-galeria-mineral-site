# Deck Mármores — Galeria Mineral Cinematográfica

Código-fonte completo do site institucional da Deck, com todas as páginas e imagens locais.

## O que está incluído

- Início cinematográfico;
- Acervo com 76 pedras e filtros;
- Pop-up com história, origem e aplicações de cada pedra;
- Página individual de cada material;
- Ambientes, Projetos, A Deck, Perguntas e Contato;
- Logo Deck 40 anos;
- Botão de WhatsApp;
- Layout responsivo para computador e celular;
- Exportação estática pronta para hospedagem.

## Rodar no computador

```powershell
npm install
npm run dev
```

Depois, abra o endereço exibido no terminal.

## Gerar a versão pronta para hospedagem

O ZIP já inclui a pasta `site-pronto-hostinger`, com a versão estática completa e testada. Para publicar na Hostinger, envie o conteúdo dessa pasta para `public_html`.

Se quiser gerar novamente essa pasta depois de futuras alterações:

```powershell
npm install
npm run build
```

A pasta `out` será criada. O conteúdo dessa pasta pode ser enviado para a `public_html` da Hostinger.

## Enviar ao GitHub

Execute `publicar-no-github.ps1` pelo PowerShell ou use:

```powershell
git init
git branch -M main
git remote remove origin 2>$null
git remote add origin "https://github.com/diegotbyrro-ui/deck-galeria-mineral-site.git"
git add -A
git commit -m "Publica site completo da Deck Galeria Mineral"
git push -u origin main --force
```

Todas as imagens utilizadas pelo site ficam em `public/images`. O projeto não depende do antigo WordPress para carregar fotos.
