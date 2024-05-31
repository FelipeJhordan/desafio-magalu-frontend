# Desafio Magalu Front-end
## Descrição
Esse projeto foi criado com o intuito de implementar o  layout apresentado no <a href="https://www.figma.com/design/A0oWVtPDNSrj1G5SY2dkgA/full-stack?node-id=0-1&t=TsxfpjkNlAGj3Mz6-0" > figma</a>.
Mais detalhes sobre a proposta do desafio pode ser encontrados no <a href="https://github.com/misaku/Desafio-Full-Stack/blob/main/FRONT-END.md"> repositório </a> com a descrição do problema.
## Objetivos e diferenciais alcançados
### Objetivos
- [x]   Navegação entre as telas.
### Diferenciais
- [x]  Validação dos formulário
- [ ]  Criação de testes.

## Links
O projeto está hospedado na vercel para facilitar a visualização, e a API que é consumida também está sendo hospededada em uma plataforma online.
- Front-end:  https://desafio-magalu-frontend.vercel.app/
- Back-end: https://p01--backend--7qb49cjkg5gj.code.run/api/v1/docs

## Execução
### Dependências
- Node (20.x ou mais recente)
- Navegador


### Como executar
Clonar este repositório: 
```
   git clone https://github.com/FelipeJhordan/desafio-magalu-frontend.git
```
Ir para o diretório:
```
  cd desafio-magalu-frontend
```
Criar um arquivo .env e adicionar o host da API:
```
  touch .env && echo "API_HOST=${SUA_API_HOST}" > .env 
```
Instalar as depêndencias:
```
npm install ## ou yarn
```

Executar a aplicação:
```
npm run dev
```
## Estrutura do projeto
O projeto foi estruturado de forma onde cada diretório dentro do /src fosse com um propósito que agregasse arquivos em comum:

## Pages
Contém as páginas do site, cada uma composta por componentes React e elementos HTML.

## Services
Inclui serviços e ações que podem ser utilizados para chamar processos específicos.

## Hooks
Agrupa hooks personalizados para abstrair comportamentos e reutilizá-los entre as páginas.

## Assets
Armazena arquivos como ícones, imagens, e outros recursos estáticos.

## Components
Reúne elementos e funcionalidades relacionados a componentes, facilitando o reuso e desacoplando o código.

## Data
Contém tipagens e dados estáticos para serem utilizados pelas páginas.


