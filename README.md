Miguel Henriqueta Soares

---

#  Descrição do Aplicativo

O App Filmes é uma aplicação desenvolvida com Vue.js e Ionic Framework com o objetivo de exibir uma lista de filmes e permitir que o usuário visualize detalhes individuais de cada filme.

O sistema possui navegação entre páginas, renderização dinâmica de dados e utilização de rotas com parâmetros.

---

#  Telas Desenvolvidas

##  WelcomePage
Tela inicial do aplicativo.

Função:
- Apresentar o sistema ao usuário
- Permitir entrada no aplicativo

---

##  FilmesPage
Tela responsável pela listagem dos filmes.

Função:
- Exibir os filmes cadastrados
- Mostrar título, ano e classificação
- Permitir acesso aos detalhes do filme

---

##  DetalhesFilmePage
Tela responsável por exibir os detalhes do filme selecionado.

Função:
- Mostrar título
- Mostrar ano
- Mostrar descrição
- Mostrar faixa etária
- Permitir retorno à página de filmes

---

#  Decisões Técnicas do Projeto

## Vue.js
Utilizado para:
- Reatividade
- Estruturação das páginas
- Renderização dinâmica
- Manipulação de dados

---

## Ionic Framework
Utilizado para:
- Interface visual
- Componentes responsivos
- Estrutura mobile

Componentes utilizados:
- IonPage
- IonContent
- IonButton
- IonCard
- IonInput

---

## Vue Router
Utilizado para realizar a navegação entre páginas.

Exemplo:
```ts
router.push('/filmes')