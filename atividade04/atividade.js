const vendasRaw = [
    { produto: 'Teclado', preco: 150 },
    { produto: 'Mouse', preco: 80 },
    { produto: 'Teclado', preco: 150 }, // Duplicado
    { produto: 'Monitor', preco: 900 },
    { produto: 'Mouse', preco: 80 },    // Duplicado
    { produto: 'Mousepad', preco: 30 }
];

const array_produtos =
//map cria um array com todos os nomes de produtos.
    vendasRaw.map(venda => venda.produto);
    //new Set(...) remove duplicatas, ficando apenas com produtos únicos.
const produtosUnicos = new Set(vendasRaw.map(item => item.produto));
console.log([...produtosUnicos]);
// criar map  produto -> preço

//Map é uma estrutura que guarda pares chave → valor.
//forEach percorre cada venda e adiciona produto como chave e preco como valor.
const produtosMap = new Map();
vendasRaw.forEach(item =>  {
    produtosMap.set(item.produto, item.preco)
});
console.log(produtosMap);
//soma das vendas 
let totalCompra = 0
//for of e uma funcao temporaria
//produtosMap.values() retorna os preços do Map: [150, 80, 900, 30].
//for...of percorre cada preço e soma em totalCompra.
for (let preco of produtosMap.values()){
    totalCompra = totalCompra + preco
}
console.log(totalCompra);
