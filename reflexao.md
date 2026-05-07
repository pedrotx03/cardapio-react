# Reflexão: Lanchonete React

**1. O que ficou repetitivo no código?**
R: No nosso código, usamos a função `.map()` justamente para "salvar" a interface de ser repetitiva. Se não tivéssemos usado ela, teríamos que copiar e colar as tags `<li>` e todas as configurações de estilo visual para cada um dos lanches manualmente. Porém, o que ainda ficou repetitivo foi a estrutura dos dados: para cada lanche novo, precisamos repetir a criação do objeto com `{ id, nome, preco }` dentro do nosso arquivo principal.

**2. Se a lanchonete tivesse 30 itens, o que aconteceria?**
R: O nosso arquivo `App.jsx` ficaria gigantesco, poluído e difícil de dar manutenção. Atualmente, estamos misturando o "Banco de Dados" (a lista com os itens) e a "Interface" (o visual) no mesmo arquivo. Com 30 itens, a melhor prática no React seria separar essas responsabilidades: colocaríamos os dados dos lanches em um arquivo separado (como um arquivo `.json` ou puxando de uma API externa) e deixaríamos o `App.jsx` responsável apenas por ler esses dados e exibi-los na tela.

**3. O código ficou maior ou menor?**
R: Em quantidade total de linhas, o código como um todo ficou praticamente do mesmo tamanho (ou até um pouquinho maior por causa da criação do novo arquivo e dos `imports`/`exports`). Porém, o arquivo principal `App.jsx` ficou muito **menor** e infinitamente mais limpo! O grande benefício de usar componentes não é necessariamente escrever menos linhas no início, mas sim deixar o projeto organizado, legível e preparado para crescer sem virar uma bagunça.

**4. Se você mudar a cor de fundo do `<ItemCardapio/>`, quantos lugares precisa alterar?**
R: Apenas em **um lugar**! Eu só preciso abrir o arquivo `ItemCardapio.jsx` e alterar o estilo lá dentro. Como o `App.jsx` usa esse mesmo "molde" 5 vezes, a alteração que eu fizer no componente vai se refletir automaticamente em todos os itens da tela ao mesmo tempo.

**5. Como os dados (nome, preço) chegaram dentro do componente?**
R: Eles chegaram através de **Props** (propriedades). No `App.jsx`, nós "injetamos" os dados no componente como se fossem atributos de uma tag HTML (ex: `nome="X-Bacon Completo" preco={25.50}`). O componente `ItemCardapio`, por sua vez, foi preparado para receber essas *props* como parâmetros na sua função `({ nome, preco })` e usá-las para exibir as informações corretas de cada lanche.