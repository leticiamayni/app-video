# **Video Streaming App**

Este projeto é uma aplicação de streaming de vídeos desenvolvida em Angular, com funcionalidades para exibir listas de vídeos organizadas em categorias, detalhes do vídeo e contagem de visualizações.

---

## **Funcionalidades**

- **Home Page**:
  - Exibição de listas de vídeos divididas em categorias como "Mais populares" e "Mais recentes".
  - Vídeo-cards com thumbnail, título, número de visualizações formatado.

- **Página de exibição do vídeo**:
  - Reproduz o vídeo via iframe do YouTube.
  - Exibe informações adicionais (título, descrição, visualizações).
  - Incrementa automaticamente o número de visualizações ao acessar o vídeo.

- **Formatação das visualizações**:
  - Números grandes são convertidos para formatos legíveis como `1mil`, `1mi`, `1bi`.

- **Interação com dados via JSON Server**:
  - Simula o backend para persistência de dados.
  - Permite a manipulação de visualizações, likes, favoritos e "watch later".

---

## **Instalação**

### **Pré-requisitos**
- Node.js (versão 16 ou superior)
- Angular CLI
- JSON Server

### **Passos**
1. Clone o repositório:
   ```python
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. Instale as dependências:
    ```python
    npm install
    ```

3. Inicie o JSON Server:
    ```python
    npx json-server --watch db.json --port 3000
    ```

4. Inicie o servidor de desenvolvimento Angular:
    ```python
    ng serve
    ```

5. Acesse a aplicação no navegador:
    ```python
    http://localhost:4200
    ```


### **Estrutura do Projeto**

    ```json
    src/
    ├── app/
    │   ├── components/
    │   │   ├── video-card/       # Componente para exibir vídeo na home
    │   │   ├── video/            # Página de exibição do vídeo
    │   │   └── nav-bar/          # Barra de navegação
    │   ├── services/
    │   │   ├── video.service.ts  # Manipulação dos dados de vídeos
    │   ├── utils/
    │   │   └── format-views.ts   # Função para formatar números de visualizações
    │   ├── app.module.ts         # Módulo principal da aplicação
    │   ├── app.component.ts      # Componente raiz
    │   └── app-routing.module.ts # Configuração de rotas
    ├── assets/                   # Recursos estáticos (imagens, estilos)
    ├── styles.scss               # Estilos globais
    └── index.html                # Arquivo HTML principal
    ```

### **Banco de Dados Simulado (db.json)**
    Exemplo de estrutura do arquivo:

        ```json
        {
        "videos": [
            {
            "id": 1,
            "title": "Introdução ao Angular",
            "views": 12500,
            "thumbnail": "link-da-miniatura",
            "description": "Descrição do vídeo",
            "url": "https://www.youtube.com/embed/video-id"
            },
            {
            "id": 2,
            "title": "Melhores práticas com TypeScript",
            "views": 457800,
            "thumbnail": "link-da-miniatura",
            "description": "Descrição do vídeo",
            "url": "https://www.youtube.com/embed/video-id"
            }
        ]
    }
        ```


### **Rotas de Aplicação**
    **/:** Página inicial com listas de vídeos.
    **/video/:id:** Página de exibição do vídeo com detalhes.

### **Tecnologias Utilizadas**
    **Framework:** Angular
    **Estilização:** SCSS e Angular Material
    **Mock de Backend:** JSON Server
    **Ferramentas adicionais:**
        RxJS para manipulação de streams de dados.
        TypeScript para tipagem estática.

