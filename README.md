# Deck Mármores — site completo

Versão completa da Galeria Mineral Cinematográfica, pronta para GitHub e hospedagem.

## Estrutura

- `index.html`: página inicial pronta;
- `pedras/`: catálogo e 76 páginas individuais;
- `images/stones/`: 76 imagens locais das pedras;
- `ambientes/`, `projetos/`, `a-deck/`, `perguntas/` e `contato/`: páginas internas;
- `codigo-fonte/`: projeto editável em Next.js.

Não há dependência do antigo WordPress para carregar imagens.

## Publicar no GitHub

Abra o PowerShell dentro desta pasta e execute:

```powershell
.\publicar-no-github.ps1
```

Ou use os comandos disponíveis dentro do próprio arquivo.

## Hostinger

Esta pasta já é a versão estática pronta. Se a Hostinger estiver sincronizada com o repositório, mantenha a raiz do repositório como diretório de publicação. Para envio manual, copie todo o conteúdo desta pasta para `public_html`.
