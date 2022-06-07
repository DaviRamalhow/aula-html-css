        
//----- Variaveis -----// 
    var name = "Davi";
    var age = 6;
    var weight = 62.3;
    var waked = true;

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

var num1 = prompt("Digite o primeiro numero");
var num2 = prompt("Digite o segundo numero");
var num3 = prompt("Digite o terceiro numero");
var x;


//---------- Maior Numero ----------
if (num1 > num2 && num1 > num3){
    console.log("O maior numero é " + num1);

} 

if (num2 > num1&&num2>num3){
    console.log("O maior numero é " + num2);

} 

if (num3 > num1&&num3 > num2){
    console.log("O maior numero é " + num3);
}



//---------- Menor ----------
if (num1 < num2 && num1 < num3){
    console.log("O menor numero é " + num1);

} 

if (num2 < num1 && num2 < num3){
    console.log("O menor numero é " + num2);

} 

if (num3 < num1 && num3 < num2){
    console.log("O menor numero é " + num3);
}