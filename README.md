# CLI Create Template

CLI para gerar uma estrutura de projeto base com Node.js + TypeScript, pronto para testes e escalabilidade.

📁 Estrutura gerada:
```
nome-do-projeto/
├── src/
│   ├── entities/
│   ├── repositories/
│   ├── routes/
│   ├── useCaes/
├── .env-example
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

---

## 🚀 Como usar

### 1. Via `npx` direto do GitHub

```bash
npx github:lucas2502/cli-create-template nome-do-projeto
```

Isso vai clonar e executar o CLI diretamente do repositório GitHub, criando a estrutura do projeto.

---

### 2. Uso local com `npm link` (modo dev)

Clone o projeto:

```bash
git clone https///github.com/lucas2502/cli-create-template.git
cd cli-create-template
npm install
npm link
```

Depois, execute de qualquer lugar:

```bash
criar-projeto nome-do-projeto
```

---

## 📦 Dependências

- [commander](https://www.npmjs.com/package/commander)
- [chalk](https://www.npmjs.com/package/chalk)
- [vitest](https://www.npmjs.com/package/vitest) (dev)

---

## 📁 Repositório

[🔗 https///github.com/lucas2502/cli-create-template.git](https///github.com/lucas2502/cli-create-template.git)
