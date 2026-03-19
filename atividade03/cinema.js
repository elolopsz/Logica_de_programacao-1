const { log } = require("node:console")

let assentos = [
    ["L", "L", "O"],
    ["L", "O", "L"],
    ["O", "L", "L"]
];

let cadeiraMeio = assentos[1][1];
console.log("A cadeira do meio esta: " + cadeiraMeio);
assentos [0][0] = "O";
console.log("O assento [0][0] esta "+assentos [0][0] );


