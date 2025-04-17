# CLI Template de Projeto Node + TypeScript

Este projeto é um CLI personalizado que gera uma estrutura inicial de projeto com TypeScript, separação por camadas, e testes incluídos.

## Instalação

Clone o repositório ou baixe o `.zip`, depois instale as dependências:

```bash
npm install
```

## Uso

Depois de instalado com `npm link` ou via `npx` (após publicar), você pode rodar:

```bash
criar-projeto nome-do-projeto
```

Isso vai criar a seguinte estrutura de diretórios:

```
nome-do-projeto/
├── src/
│   ├── controllers/
│   ├── routes/
│   └── index.ts
├── tests/
│   └── controllers/
├── package.json
├── tsconfig.json (você pode adicionar)
```

## Dependências

- [commander](https://www.npmjs.com/package/commander)
- [chalk](https://www.npmjs.com/package/chalk)
