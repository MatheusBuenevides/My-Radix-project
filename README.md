
# **My Radix Project**

Este é um projeto de demonstração que utiliza **React**, **Vite**, **Radix UI**, e **Tailwind CSS** para criar uma interface interativa e estilizada. Ele apresenta componentes básicos do Radix UI, como Toggle Group, Accordion e Dialog.

---

## **Tabela de Conteúdos**

- [Recursos](#recursos)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Componentes Utilizados](#componentes-utilizados)
- [Tecnologias e Ferramentas](#tecnologias-e-ferramentas)
- [Como Contribuir](#como-contribuir)
- [Licença](#licença)

---

## **Recursos**

- Configuração com **Vite** para desenvolvimento rápido.
- Componentes interativos usando **Radix UI**:
  - Toggle Group
  - Accordion
  - Dialog
- Estilização com **Tailwind CSS**.
- Estrutura modular e de fácil manutenção.

---

## **Pré-requisitos**

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

## **Instalação**

Siga os passos abaixo para configurar o projeto em sua máquina:

1. Clone este repositório:
   ```bash
   git clone https://github.com/MatheusBuenevides/my-radix-project.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd my-radix-project
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Abra o navegador em `http://localhost:5173` para visualizar o projeto.

---

## **Scripts Disponíveis**

Os seguintes scripts estão disponíveis no `package.json`:

- **`npm run dev`**: Inicia o servidor de desenvolvimento.
- **`npm run build`**: Gera a versão de produção do projeto.
- **`npm run preview`**: Serve a versão de produção gerada pelo comando `build`.
- **`npm run lint`**: Analisa o código para encontrar e corrigir problemas.

---

## **Estrutura do Projeto**

Abaixo está a estrutura básica do projeto:

```
my-radix-project/
├── public/                # Arquivos públicos
├── src/                   # Código-fonte
│   ├── components/        # Componentes React
│   │   ├── Accordion.tsx  # Componente Accordion
│   │   ├── Dialog.tsx     # Componente Dialog
│   │   └── ToggleGroup.tsx# Componente Toggle Group
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Arquivo de entrada
│   └── index.css          # Estilos globais
├── package.json           # Gerenciamento de dependências e scripts
├── tailwind.config.js     # Configuração do Tailwind CSS
├── tsconfig.json          # Configuração do TypeScript
└── vite.config.ts         # Configuração do Vite
```

---

## **Componentes Utilizados**

### **1. Toggle Group**
- Um grupo de botões alternáveis.
- Mostra como alternar estados de seleção.
- Implementado no arquivo: `src/components/ToggleGroup.tsx`.

### **2. Accordion**
- Um componente colapsável para organizar conteúdo.
- Implementado no arquivo: `src/components/Accordion.tsx`.

### **3. Dialog**
- Um modal interativo para exibir informações ou ações.
- Implementado no arquivo: `src/components/Dialog.tsx`.

---

## **Tecnologias e Ferramentas**

Este projeto utiliza as seguintes tecnologias:

- **React**: Biblioteca para criação de interfaces.
- **Vite**: Ferramenta de build rápida e moderna.
- **Radix UI**: Componentes acessíveis e de alto desempenho.
- **Tailwind CSS**: Framework para estilização com utilitários.
- **TypeScript**: Superconjunto do JavaScript para tipagem estática.

---

## **Como Contribuir**

Se você deseja contribuir com este projeto, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma branch para a sua feature ou correção:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça commit das suas alterações:
   ```bash
   git commit -m "Descrição da minha feature"
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

---

## **Licença**

Este projeto está sob a licença MIT. Para mais detalhes, consulte o arquivo [LICENSE](./LICENSE).

---

Se precisar de ajuda, sinta-se à vontade para abrir uma [issue](https://github.com/MatheusBuenevides/my-radix-project/issues)!
