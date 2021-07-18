<h1 align="center">
  Tópicos Avançados em Computação :man_technologist:
</h1>

<p align="center">Repositório para atividades da disciplina de Tópicos Avançados em Computação.</a>
</p>

<p align="center">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/dpalmas/tac?color=0000FF">

  <img alt="License" src="https://img.shields.io/github/license/dpalmas/tac?color=0000FF&logo=MIT">
  
  <a href="https://github.com/dpalmas/tac/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/dpalmas/tac?color=0000FF">
  </a>
</p>

**1° Como instalar o TypeScript? :pencil:**

Precisamos inicialmente instalar a plataforma [Node.js](https://nodejs.org).

O compilador TypeScript na linha de comando pode ser instalado como um pacote Node.js.

```
npm install -g typescript
```

**2° Como criar um projeto TypeScript? :pencil:**

Crie uma pasta com o nome do seu projeto e execute o comando:

``` 
npm init
```

**3° Como fazer a compilação automática ao salvar um arquivo TypeScript? :pencil:**

Executando o comando a seguir o typescript fica em modo standby até que seja feita alguma ação:

``` typescript
tsc -w
```

**4º Como declarar variáveis e constantes? :pencil:**

``` typescript
function olaMundo(nome: string) {
  console.log("Olá Mundo")
}

olaMundo("Davi")
```

**5° Como declarar uma função e especificar seus parâmetros e o tipo de retorno? :pencil:**

``` typescript
function olaMundo(nome: string) {
  console.log("Olá Mundo")
}

var meuNome = "Davi Josué Palmas";
olaMundo(myName);
```

**6° Como especificar um valor default na passagem de parâmetros em uma função, caso o invocador não especifique um valor? :pencil:**

``` typescript
function olaMundo(nome: string) {
  console.log("Olá Mundo")
}

var meuNome: string = "1";
olaMundo(meuNome);
```

**7° Como declarar uma interface? :pencil:**

``` typescript
interface Pessoa {
  nome: aly,
  cidade: aly
}
``` 

**8° Como instanciar um objeto de uma interface?  :pencil:**

``` typescript
interface Pessoa {
  nome: aly,
  cidade: aly
}

const pessoa: Pessoa = {nome: 'Davi', cidade: 
```

**9°  Como declarar uma classe? :pencil:**

``` typescript
class Pessoa {
  private nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}
```

**10° Como instanciar um objeto de uma classe utilizando o operador new? :pencil:**

``` typescript
class Pessoa {
  private nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

const pessoa = new Pessoa('Davi')
```

**11° Como declarar uma função seguindo a notação arrow function? :pencil:**

``` typescript
const olaMundo = () => {
  console.log("Olá Mundo")
}

olaMundo();
```

**12° Quais são os tipos de dados do TypeScript?  :pencil:**

``` typescript
var jaVotou: boolean = false;
var ano: number = 2021;
var nome: string = "Davi";
var numeros: number[] = [1, 2, 3, 4, 5];
var numeros: Array<number> = [1, 2, 3, 4, 5];
enum Cor { Vermelho, Verde, Azul };
var c: Cor = Cor.Azul;
var Any: any = 4;
Any = "Talvez seja uma string";
Any = "false";

function User(): void {
  alert("Mensagem de aviso")
}
```

**13° Como instanciar um array vazio? Cite duas formas. :pencil:**

``` typescript
var pessoas: string[] = [];
var pessoas: Array<string> = [];
```

**14° Como instanciar um array tipado de números? Cite duas formas. :pencil:**

``` typescript
var numeros: number[] = [1, 2, 3, 4, 5];
var numeros: Array<number> = [1, 2, 3, 4, 5];
```

**15° Como percorrer um array com a estrutura for e mostrar no console do navegador o valor de cada item? :pencil:**

``` typescript
for (let volta = 1; volta <= 5; volta++) {
  console.log('Dando a volta número ' + volta);
};
```

**16° Como percorrer os itens de um array utilizando o seu método forEach()? :pencil:**

``` typescript
numeros.forEach(element => {
  console.log("Percorrendo números " + numeros);
});
```

**17° Como filtrar itens de um array? :pencil:**

``` typescript
function ehMaior(valor) {
  return (valor >= 10);
}

var numeros = [12, 5, 8, 130, 44].filter(ehMaior);
console.log("Teste de valor : " + numeros);
```

**18° Como aplicar transformações sobre os itens de um array? :pencil:**

``` typescript
// Mapeando array de números para um array de raízes quadradas
var numeros = [1, 4, 9];
var raizes = numeros.map(Math.sqrt);
console.log("Raizes: " + raizes);
```

**19° Como sintetizar/reduzir valores de um array em um único valor? :pencil:**

``` typescript
var numeros = [1, 2, 3, 4, 5, 6];
var total = numeros.reduce(function (total, numero) {
  return total + numero;
}, 0);
console.log(total);
```

**20° Criar uma interface para representar uma “Cidade”, contendo dois atributos: uf e o nome da cidade. :pencil:**

``` typescript
interface Cidade {
  nome: string,
  uf: string
}

const pessoa: Cidade = {
  nome: 'Medianeira', 
  uf: PR'
}

console.log(pessoa);
```

**21° Criar um array de Cidade, adicionando algumas cidades. :pencil:**

``` typescript
var cidades: string[] = ['Medianeira', 'Foz do Iguaçu', 'Cascavel', 'Curitiba'];
console.log("Lista de cidades: " + cidades);
```

**22° Criar um projeto para consumo de uma [API REST](https://reqres.in/). :pencil:**

Esta API disponibiliza uma lista de usuários, que podem ser obtidos de forma paginada. Fazer uma página HTML, para exibir a lista dos usuários e os links de paginação. Criar o TypeScript para consumir os dados da API e atualizar a página HTML conforme a paginação selecionada pelo usuário. Mostrar os dados dos objetos oriundos da API (nome, e-mail e avatar).
Siga o exemplo de consumo de uma [API](https://jsfiddle.net/ricardosobjak/2dpkjo6h/).

[Consumo de API REST](https://github.com/dpalmas/tac/tree/main/lista_de_usuarios)
