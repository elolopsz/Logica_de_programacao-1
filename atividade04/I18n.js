const termosPT = ["Bem-vindo", "Carrinho", "Sair"];

const termosEn = new Map([
  ["Bem-vindo", "Welcome"],
  ["Carrinho", "Cart"],
  ["Sair", "Logout"]
]);

const termoES = new Map([
  ["Bem-vindo", "Bienvenido"],
  ["Carrinho", "Carrito"],
  ["Sair", "Salir"]
]);

// escolher idioma
const idiomas_selecionados = termosEn;

// gerar tradução
const traducao = termosPT.map(termo =>
  idiomas_selecionados.get(termo)
);

console.log(traducao[0]);
console.log(traducao[1]);
console.log(traducao[2]);