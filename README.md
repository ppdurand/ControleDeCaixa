# Controle de caixa

## Descrição
Projeto para a visualização de um controle de movimentações monetárias. O usuário pode fazer uma movimentação (Receita ou Despesa) e também deleta-la. Também há um grafico mostrando a soma das movimentações de cada tipo.

## Como Rodar o Projeto
Para rodar o código vá para a raiz do projeto (onde possui o arquivo 'docker-compose.yml') e execute o comando no terminal:

``
docker-compose up
``

Agora acesse a rota 'http://localhost:3000' em seu navegador

ATENÇÃO: O projeto usa as portas 3306 (MySQL), 8080 (Spring) e 3000 (React). Então garanta que essas portas estejam disponíveis e que nenhum serviço esteja rodando em nenhuma dessas portas.

## Tecnologias usadas
- Java
- Spring
- React
- Typescript
- HTML
- CSS

## Imagem do projeto
![Imagem do projeto](/frontend/public/tela.png)
