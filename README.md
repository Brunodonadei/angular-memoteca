# Memoteca - Aplicação Educacional em Angular

## Visão Geral

O Memoteca é um projeto educacional desenvolvido em Angular que permite aos usuários adicionar, editar e excluir pensamentos, juntamente com informações sobre seus autores. A aplicação utiliza TypeScript para o front-end e JSON Server para simular o backend.
## Funcionalidades Principais

- **Adição de Pensamentos:** Os usuários podem facilmente adicionar novos pensamentos, especificando o autor e o conteúdo.

- **Edição de Pensamentos:** É possível editar pensamentos existentes, permitindo correções ou atualizações.

- **Exclusão de Pensamentos:** Os usuários têm a capacidade de remover pensamentos da memoteca.

- **Modelo de Card:** Cada pensamento é exibido em um card informativo.

## Tecnologias Utilizadas

- **Angular:** A estrutura Angular é usada para criar uma experiência de usuário interativa e dinâmica.

- **TypeScript:** O projeto é desenvolvido principalmente em TypeScript, que adiciona tipagem estática e outras melhorias à linguagem JavaScript.

- **JSON Server:** Para simular um backend, o JSON Server é usado para armazenar e fornecer dados para a aplicação.

## Como Executar o Projeto

Siga estas etapas para executar o projeto Memoteca em sua máquina:

1. **Clone o Repositório:**
   ```
   git clone https://github.com/Brunodonadei/memoteca.git
   ```

2. **Instale as Dependências:**
   ```
   cd memoteca
   npm install
   ```

3. **Inicie o JSON Server:**
   ```
   json-server --watch db.json
   ```

4. **Inicie o Aplicativo Angular:**
   ```
   ng serve
   ```

5. **Acesse a Aplicação:**
   Abra seu navegador e visite `http://localhost:4200/` para acessar o Memoteca.
