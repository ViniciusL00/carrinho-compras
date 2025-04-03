# carrinho-compras
 <h1 align="center">Projeto Carrinho de Compras</h1>

<h2 align="center"> Primeira aula: Função de Adicionar Produto </h2>

Na primeira aula, vamos aprender como utilizar funções para adicionar produtos e definir a quantidade desses produtos.

1. *Objetivo:* O objetivo desta função é capturar os dados inseridos pelo usuário (nome do produto e quantidade) a partir de um formulário HTML e armazená-los em variáveis para que possamos utilizá-los posteriormente.

**Código:**

``` function adicionar () {```

```let nomeProduto = document.getElementById('produto');```

```let quantidade = document.getElementById('quantidade');}```

**Explicação:** 

1. Função adicionar():

A função é chamada quando o usuário interage com o formulário (por exemplo, clicando em um botão de "Adicionar").

2. Captura do Nome do Produto:

Usamos o document.getElementById('produto') para capturar o valor inserido no campo de nome do produto. Esse método retorna o elemento HTML com o id "produto", que é onde o usuário digita o nome do produto.

3. Captura da Quantidade:

Da mesma forma, utilizamos document.getElementById('quantidade') para capturar o valor inserido no campo de quantidade. Esse método retorna o valor do campo de input com o id "quantidade".

4. Armazenamento nas Variáveis:

As variáveis nomeProduto e quantidade armazenam os valores dos campos do formulário. A partir daí, podemos manipular esses dados conforme necessário (por exemplo, armazenando em um array ou exibindo em outra parte da interface).

<h2 align="center"> Segunda aula: Cálculo do Preço Total dos Produtos </h2>

Na segunda aula, vamos aprender como calcular o valor total dos produtos com base na quantidade inserida pelo usuário. A função será responsável por calcular o preço total de um produto após a inserção da quantidade desejada.

*Objetivo:*

1. Obter o nome do produto e seu valor unitário.

2. Obter a quantidade desejada do produto.

3. Calcular o valor total (quantidade * valor unitário) e armazenar esse valor.

**Código:**

```function adicionar () {```

```let produto = document.getElementById('produto').value;```

```let nomeProduto = produto.split('-')[0];```

```let valorUnitario = produto.split('R$')[1];```

```let quantidade = document.getElementById('quantidade');```

```let preco = quantidade.value * valorUnitario;}```

**Explicação:**

1. Captura do Produto:

* let produto = document.getElementById('produto').value;

* Usamos document.getElementById('produto').value para pegar o valor completo do campo de input onde o usuário escolhe o produto. Esse valor geralmente será uma string que contém o nome do produto e o seu preço, separados por um caractere específico (por exemplo, "Produto-X- R$20").

2. Obtendo o Nome do Produto:

* let nomeProduto = produto.split('-')[0];

* Usamos o método .split('-') para separar a string em um array, usando o hífen ('-') como delimitador. O primeiro item do array ([0]) será o nome do produto. Assim, obtemos apenas o nome do produto, sem o preço.

3. Obtendo o Valor Unitário:

* let valorUnitario = produto.split('R$')[1];

* Da mesma forma, utilizamos o método .split('R$') para dividir a string e pegar o valor após o "R$". O segundo item do array ([1]) será o valor unitário do produto, ou seja, o preço sem o símbolo de "R$".

4. Captura da Quantidade:

* let quantidade = document.getElementById('quantidade');

* Aqui, estamos pegando o valor inserido pelo usuário no campo de quantidade. O campo de quantidade é onde o usuário indica quantos itens do produto ele deseja.

5. Cálculo do Preço Total:

* let preco = quantidade.value * valorUnitario;

* Finalmente, multiplicamos a quantidade (quantos produtos o usuário deseja) pelo valor unitário (o preço de cada unidade do produto) para calcular o preço total.

<h2 align="center"> Terceira aula: Adicionando Itens ao Carrinho </h2>

Na terceira aula, focamos em como adicionar os produtos ao carrinho e exibir o subtotal para cada item. A funcionalidade foi aprimorada para mostrar os produtos de forma interativa na interface, exibindo o nome, a quantidade e o preço total de cada item.

```function adicionar () {```

```let produto = document.getElementById('produto').value;```

```let nomeProduto = produto.split('-')[0];```

```let valorUnitario = produto.split('R$')[1];```

```let quantidade = document.getElementById('quantidade').value;```

```let preco = quantidade * valorUnitario;```

```let listaProdutos = document.getElementById('lista-produtos');```

```listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">```

```<span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">${preco}</span>```

```</section>`;}```

**Explicação:**

1. Captura de Quantidade:

* let quantidade = document.getElementById('quantidade').value;

* A quantidade do produto inserida pelo usuário é capturada a partir do campo de entrada com id quantidade.

2. Cálculo do Preço:

* let preco = quantidade * valorUnitario;

* O preço total do produto é calculado multiplicando a quantidade inserida pelo valor unitário do produto. Isso nos dá o subtotal para aquele item específico.

3. Captura da Lista de Produtos:

* let listaProdutos = document.getElementById('lista-produtos');

* Aqui, estamos selecionando o elemento HTML onde os produtos serão adicionados ao carrinho. Este elemento, uma <div> ou <section>, serve como contêiner para os itens que o usuário adicionar.

4. Adicionando o Produto ao Carrinho:

* listaProdutos.innerHTML = listaProdutos.innerHTML + <section class="carrinho__produtos__produto"> <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">${preco}</span> </section>;

* Nesta parte, o código adiciona dinamicamente um novo item à lista de produtos (lista-produtos). O HTML é alterado ao incluir um novo <section> com as informações do produto, como a quantidade, o nome e o preço total. O uso de innerHTML permite que o conteúdo da lista seja atualizado sem sobrescrever o que já estava lá.

* O item do carrinho é exibido em uma estrutura com a classe carrinho__produtos__produto, com a quantidade e o preço destacando-se usando a classe texto-azul.

**Conclusão:**

*Aprendemos a adicionar os produtos ao carrinho e exibir suas informações dinamicamente na interface. Com base nas interações do usuário, o nome do produto, a quantidade e o preço total são mostrados de forma clara. A atualização da lista de produtos no carrinho é feita sem perder os itens previamente adicionados, garantindo que o usuário possa visualizar todos os itens de forma organizada e com seus respectivos valores totais.*

*Essa funcionalidade é essencial para criar um sistema de carrinho de compras interativo, onde o usuário pode ver claramente o que está adicionando ao seu pedido. O código também permite que o carrinho seja atualizado de forma contínua, facilitando a interação com o sistema.*

<h2 align="center"> Quarta aula: Atualizando o Total e Limpando o Carrinho </h2>

Na quarta aula, implementamos funcionalidades adicionais para manter o controle do valor total do carrinho e permitir que o carrinho seja limpo a qualquer momento.

**Código:**

```let valorTotal;```
```limpar();```

```function adicionar () {```
 
```let produto = document.getElementById('produto').value;```

```let nomeProduto = produto.split('-')[0];```

```let valorUnitario = produto.split('R$')[1];```

```let quantidade = document.getElementById('quantidade').value;```

```let preco = quantidade * valorUnitario;```

```let listaProdutos = document.getElementById('lista-produtos');```

```listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">```
```<span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">${preco}</span>```
```</section>`;```

```valorTotal = valorTotal + preco;```

```let total = document.getElementById('valor-total');```

```total.textContent = `R$ ${valorTotal}`;```

```document.getElementById('quantidade').value = 0;}```


```function limpar () {```

```valorTotal = 0;```

```document.getElementById('lista-produtos').innerHTML = '';```

```document.getElementById('valor-total').textContent = 'R$ 0';}```

**Explicação:**

1. Definição da Variável valorTotal:

* let valorTotal;

* A variável valorTotal é criada para armazenar o valor total acumulado de todos os produtos adicionados ao carrinho. Ela será atualizada a cada vez que um produto for adicionado.

2. Chamada da Função limpar():

* limpar();

* Antes de começar a adicionar itens ao carrinho, chamamos a função limpar() para garantir que o valor total esteja zerado e que o carrinho não contenha nenhum item na primeira execução. Isso ajuda a inicializar o estado do carrinho sempre que a página for carregada.

3. Atualizando o Valor Total:

* valorTotal = valorTotal + preco;

* Após calcular o preço do item (subtotal), somamos esse valor ao total acumulado. Isso vai garantir que o valor total do carrinho seja atualizado com cada produto adicionado.

* let total = document.getElementById('valor-total');

* Capturamos o elemento HTML que exibirá o valor total do carrinho, geralmente um <span> ou <div> com o id valor-total.

* total.textContent = R$ ${valorTotal};

* Atualizamos o conteúdo textual do elemento total para mostrar o valor total acumulado, formatado como moeda (R$). A cada novo item adicionado, o valor total será recalculado e exibido.

4. Limpando o Campo de Quantidade:

* document.getElementById('quantidade').value = 0;

* Após a adição do produto, a quantidade é resetada para 0. Isso garante que, ao adicionar outro produto, o campo de quantidade esteja limpo e pronto para receber um novo valor.

5. Função limpar():

* function limpar() { ... }

* A função limpar() tem como objetivo reiniciar o estado do carrinho. Ela realiza três ações importantes:

`Zera a variável valorTotal, garantindo que o total acumulado seja resetado.`

`Limpa a lista de produtos do carrinho, removendo qualquer produto previamente adicionado.`

`Atualiza o valor total exibido na interface para "R$ 0", deixando o carrinho visualmente limpo.`

**Conclusão:** 

*Implementamos a lógica de atualização do valor total do carrinho e a funcionalidade de limpar o carrinho. Agora, ao adicionar um produto, o valor total é automaticamente recalculado e exibido na interface. Além disso, a função limpar() nos permite reiniciar o carrinho, apagando todos os itens e zerando o total, o que é essencial para permitir uma nova seleção de produtos sem resíduos de interações anteriores.*

*Com essas melhorias, o carrinho de compras agora se comporta de maneira mais completa e interativa, permitindo um controle mais eficaz das compras e a possibilidade de recomeçar o processo sempre que necessário.*

**Desafios:**

1. Adicione validações no código para garantir que o usuário só consiga adicionar produtos ao carrinho se tiver selecionado um produto válido e inserido uma quantidade válida. Se a entrada não for válida, exiba uma mensagem de erro apropriada.

```if (!produto || produto.trim() === "") {```

```alert("Por favor, selecione um produto válido.");```

```return; // Interrompe a função se não houver produto selecionado}```

```if (isNaN(quantidade) || quantidade <= 0) {```

```alert("Por favor, insira uma quantidade válida (um número maior que zero).");```

```return; // Interrompe a função se a quantidade for inválida}```

**Explicação:** 

*Com essas validações, agora o código garantirá que o usuário só consiga adicionar produtos ao carrinho se:*

* Ele tiver selecionado um produto válido (não vazio).

* Ele tiver inserido uma quantidade válida (um número maior que 0).

* Se qualquer uma dessas condições não for atendida, o código exibirá uma mensagem de erro (usando alert) e impedirá que o produto seja adicionado ao carrinho até que as condições sejam corrigidas.
