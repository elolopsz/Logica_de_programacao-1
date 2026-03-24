//arays

//1.1 arrays simples 
const frutas = ["maça", "banana", "laranja"];
//1.2 FIFO
const fila = ["ana", "beto", "Caio", "Daiane"];
fila.push("Ellen")
const primeiro = fila.shift(); // primeiro da item da lista
console.log(primeiro);
const pilha =
[
    "inferno de Dante",
    "One Piece",
    "A quarta asa"
]
pilha.push("O alquimista ")
const livro = pilha.pop(); // tirar o ultimo da lista
console.log(livro);

// 1.4 buscar se existe

const temLaranja = frutas.includes("Laranja");
const temManga = frutas.includes("Manga");
console.log(temLaranja);
console.log(temManga);

//1 Sets (Conjunto)
//2.1 Adicionando duplicados
const matricula = new Set([1001, 1002, 1005, 1009, 1002]);
console.log([...matricula]);

const cores = new Set (["verde", "azul"])
cores.add ("Vermelho")
cores.add ("branco")
cores.add ("Preto")
console.log([...cores]);

const temVerde = cores.has("verde")
const temAmarelo = cores.has("amarelo")

console.log(temVerde);
console.log(temAmarelo);

const convidados = 
[
    "bruno",
     "Henrique",
      "Juliano",
       "Carol", 
       "Juliano",
        "breno", 
        "Henrique"
]
const convidados_unicos = new Set (convidados);
console.log([...convidados_unicos]);

//map (mapa)
// 3.1 cadastro de preços
const produtos = new Map()
produtos.set("mouse", 50.00)
produtos.set("Teclados", 120.00)

valorMouse = produtos.get("mouse")
console.log(valorMouse);




