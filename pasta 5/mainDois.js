// IDADE 
// PEDIR A IDADE NA PESSOA E INFORMAR SE:
// 0 -12 CRIANÇA
// 13-18 ADOLESCENTE
//  19 - 60 ADULTO
// > 60 IDOSO

let idade = prompt("Digite sua idade");

age(idade);

    function age (x){

        if(x < 0 || x > 120){

            console.log("invalido");

        } else if(x <= 12&& x>=0){

            console.log("Criança");

        } else if(x >= 13&& x < 60){

            console.log("Adulto");

        } else if(x > 60&& x< 120){

            console.log("Idoso")

        } else if(x == 120){

            console.log("pé na cova");
        }
        

    }