# Reflexão: Lanchonete React

**1. O que ficou repetitivo no código?**
R: No nosso código, usamos a função `.map()` justamente para "salvar" a interface de ser repetitiva. Se não tivéssemos usado ela, teríamos que copiar e colar as tags `<li>` e todas as configurações de estilo visual para cada um dos lanches manualmente. Porém, o que ainda ficou repetitivo foi a estrutura dos dados: para cada lanche novo, precisamos repetir a criação do objeto com `{ id, nome, preco }` dentro do nosso arquivo principal.

**2. Se a lanchonete tivesse 30 itens, o que aconteceria?**
R: O nosso arquivo `App.jsx` ficaria gigantesco, poluído e difícil de dar manutenção. Atualmente, estamos misturando o "Banco de Dados" (a lista com os itens) e a "Interface" (o visual) no mesmo arquivo. Com 30 itens, a melhor prática no React seria separar essas responsabilidades: colocaríamos os dados dos lanches em um arquivo separado (como um arquivo `.json` ou puxando de uma API externa) e deixaríamos o `App.jsx` responsável apenas por ler esses dados e exibi-los na tela.