#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

const program = new Command();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

program
  .name('criar-projeto')
  .description('Cria estrutura de projeto Node com TypeScript')
  .argument('<nome>', 'Nome do projeto')
  .action((nome) => {
    const templateDir = path.join(__dirname, '../templates');
    const targetDir = path.join(process.cwd(), nome);

    if (fs.existsSync(targetDir)) {
      console.log(chalk.red('Já existe uma pasta com esse nome.'));
      process.exit(1);
    }

    fs.mkdirSync(targetDir);
    copyDir(templateDir, targetDir);

    console.log(chalk.green('✅ Projeto criado com sucesso em:'), chalk.bold(targetDir));
  });

program.parse();

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });

  for (const item of fs.readdirSync(src)) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      const content = fs.readFileSync(srcPath);
      fs.writeFileSync(destPath, content);
    }
  }
}