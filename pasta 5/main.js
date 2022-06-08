        
//----- Variaveis -----// 
//    var name = "Davi";
//    var age = 6;
//    var weight = 62.3;
//    var waked = true;
//-----   ALERT ------//
//alert("Olá " + name + "!");

// if (waked == true){
//    alert("Davi esta acordado");
//} else {
//    alert("Davi esta dormindo");
//}

//waked == true ? console.log("Davi esta acordado") : console.log("Davi esta dormindo");
//var dia = prompt("Que dia é hoje?!");
//console.log(dia);

//Exercicio 1
// Peça 2 numeros e retorne o maior

//---------------- ORDENAÇÃO -----------------//

    let numeros = [prompt("Digite o primeiro numero"), prompt("digite o segundo numero"), prompt("digite o terceiro numero")];

    numeros.sort((a,b) => a - b);
    //Se compare(a, b) for menor que zero, o método sort() classifica a para um índice menor que b. Ou seja, o a virá antes de b.

    // Se compare(a, b) for maior que zero, o método sort() classificará b com um índice menor que a, ou seja, b virá primeiro.

    //Se compare(a, b) retornar zero, o método sort() considera a igual a b e deixa suas posições inalteradas.

console.log("O maior numero é " + numeros[2]);
console.log("O menor numero é " + numeros[0]);