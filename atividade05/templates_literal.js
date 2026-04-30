const nomeJogador = "Alex";
let pontos = 0;
pontos = pontos + 10;
pontos += 50;
console.log(nomeJogador, "true", "tem", pontos, "pontos");
//template literal
const preco = 100;
const desconto = 20;
console.log(`o produto custa R$ ${preco - desconto} e com desconto de R$ ${desconto}`);


const nomeAluno = "Maria";
const disciplina = "Matemática";
const nota = 8;
const nota2 = 5;
const resultado = `
--- boletim escolar ---;
 aluno ${nomeAluno};
 disciplina ${disciplina};
 nota 1: ${nota};
 nota 2: ${nota2};
 media: ${(nota + nota2) / 2};
status ${nota >= 6 ? "aprovado" : "reprovado"};
`;
console.log(resultado);
